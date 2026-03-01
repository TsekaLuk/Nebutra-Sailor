import { Hono } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { prisma, Prisma } from "@nebutra/db";
import { logger } from "@nebutra/logger";
import { DatabaseError, NotFoundError, toApiError } from "@nebutra/errors";

const log = logger.child({ service: "consent" });

type ConsentEnv = {
  Variables: { userId?: string; organizationId?: string };
};
export const consentRoutes = new Hono<ConsentEnv>();

// ============================================
// Validation Schemas
// ============================================

const recordConsentSchema = z.object({
  documentSlug: z.string().min(1),
  documentVersion: z.string().optional(),
  consentType: z
    .enum(["EXPLICIT", "IMPLICIT", "OPT_IN", "OPT_OUT"])
    .default("EXPLICIT"),
  context: z.string().optional(),
  visitorId: z.string().min(1),
  metadata: z.record(z.unknown()).optional(),
});

const cookieConsentSchema = z.object({
  visitorId: z.string().min(1),
  preferences: z.object({
    functional: z.boolean().default(false),
    analytics: z.boolean().default(false),
    marketing: z.boolean().default(false),
    thirdParty: z.boolean().default(false),
  }),
});

// ============================================
// Document Consent Endpoints
// ============================================

/**
 * POST /api/v1/legal/consent
 * Record user consent for a legal document
 */
consentRoutes.post(
  "/consent",
  zValidator("json", recordConsentSchema),
  async (c) => {
    const data = c.req.valid("json");
    const userId = c.get("userId") as string | undefined;
    const organizationId = c.get("organizationId") as string | undefined;

    try {
      // Get the latest active document version
      const document = await prisma.legalDocument.findFirst({
        where: {
          slug: data.documentSlug,
          isActive: true,
          ...(data.documentVersion && { version: data.documentVersion }),
        },
        orderBy: { effectiveAt: "desc" },
      });

      if (!document) {
        const notFound = new NotFoundError("LegalDocument", data.documentSlug);
        return c.json(
          toApiError(notFound),
          notFound.statusCode as ContentfulStatusCode,
        );
      }

      // Create consent record
      const consentData: Parameters<
        typeof prisma.userConsent.create
      >[0]["data"] = {
        visitorId: data.visitorId,
        documentId: document.id,
        documentSlug: document.slug,
        documentVersion: document.version,
        consentType: data.consentType,
        consentGiven: true,
        consentContext: data.context ?? null,
        metadata: (data.metadata ?? {}) as Prisma.InputJsonValue,
      };

      if (userId) consentData.userId = userId;
      if (organizationId) consentData.organizationId = organizationId;

      const ipAddress =
        c.req.header("x-forwarded-for") || c.req.header("x-real-ip");
      if (ipAddress) consentData.ipAddress = ipAddress;

      const userAgent = c.req.header("user-agent");
      if (userAgent) consentData.userAgent = userAgent;

      const consent = await prisma.userConsent.create({
        data: consentData,
      });

      return c.json({
        success: true,
        consentId: consent.id,
        documentSlug: consent.documentSlug,
        documentVersion: consent.documentVersion,
        consentedAt: consent.consentedAt,
      });
    } catch (error) {
      const dbError = new DatabaseError(
        "record consent",
        error instanceof Error ? error : undefined,
      );
      log.error("Failed to record consent", { error, userId, organizationId });
      return c.json(
        toApiError(dbError),
        dbError.statusCode as ContentfulStatusCode,
      );
    }
  },
);

/**
 * GET /api/v1/legal/consent/status
 * Get consent status for a document
 */
consentRoutes.get("/consent/status", async (c) => {
  const documentSlug = c.req.query("documentSlug");
  const visitorId = c.req.query("visitorId");
  const userId = c.get("userId") as string | undefined;

  if (!documentSlug) {
    return c.json({ error: "documentSlug is required" }, 400);
  }

  try {
    // Get the current active document version
    const currentDocument = await prisma.legalDocument.findFirst({
      where: {
        slug: documentSlug,
        isActive: true,
      },
      orderBy: { effectiveAt: "desc" },
    });

    if (!currentDocument) {
      const notFound = new NotFoundError("LegalDocument", documentSlug);
      return c.json(
        toApiError(notFound),
        notFound.statusCode as ContentfulStatusCode,
      );
    }

    // Find user's latest consent for this document
    const consent = await prisma.userConsent.findFirst({
      where: {
        documentSlug,
        consentGiven: true,
        withdrawnAt: null,
        OR: [
          ...(userId ? [{ userId }] : []),
          ...(visitorId ? [{ visitorId }] : []),
        ],
      },
      orderBy: { consentedAt: "desc" },
    });

    const hasConsented = !!consent;
    const needsReconsent =
      hasConsented && consent.documentVersion !== currentDocument.version;

    return c.json({
      hasConsented,
      consentedVersion: consent?.documentVersion,
      currentVersion: currentDocument.version,
      needsReconsent,
      lastConsentedAt: consent?.consentedAt,
    });
  } catch (error) {
    const dbError = new DatabaseError(
      "get consent status",
      error instanceof Error ? error : undefined,
    );
    log.error("Failed to get consent status", {
      error,
      documentSlug,
      userId,
      visitorId,
    });
    return c.json(
      toApiError(dbError),
      dbError.statusCode as ContentfulStatusCode,
    );
  }
});

/**
 * DELETE /api/v1/legal/consent
 * Withdraw consent for a document
 */
consentRoutes.delete("/consent", async (c) => {
  const documentSlug = c.req.query("documentSlug");
  const visitorId = c.req.query("visitorId");
  const userId = c.get("userId") as string | undefined;

  if (!documentSlug) {
    return c.json({ error: "documentSlug is required" }, 400);
  }

  try {
    // Update all matching consent records
    const result = await prisma.userConsent.updateMany({
      where: {
        documentSlug,
        withdrawnAt: null,
        OR: [
          ...(userId ? [{ userId }] : []),
          ...(visitorId ? [{ visitorId }] : []),
        ],
      },
      data: {
        withdrawnAt: new Date(),
        consentGiven: false,
      },
    });

    return c.json({
      success: true,
      withdrawnCount: result.count,
    });
  } catch (error) {
    const dbError = new DatabaseError(
      "withdraw consent",
      error instanceof Error ? error : undefined,
    );
    log.error("Failed to withdraw consent", {
      error,
      documentSlug,
      userId,
      visitorId,
    });
    return c.json(
      toApiError(dbError),
      dbError.statusCode as ContentfulStatusCode,
    );
  }
});

// ============================================
// Cookie Consent Endpoints
// ============================================

/**
 * POST /api/v1/legal/cookie-consent
 * Record cookie consent preferences
 */
consentRoutes.post(
  "/cookie-consent",
  zValidator("json", cookieConsentSchema),
  async (c) => {
    const data = c.req.valid("json");
    const userId = c.get("userId") as string | undefined;

    // Calculate expiry (1 year from now)
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    try {
      // Upsert cookie consent (create or update by visitorId)
      const createData: Parameters<
        typeof prisma.cookieConsent.upsert
      >[0]["create"] = {
        visitorId: data.visitorId,
        necessary: true, // Always true
        functional: data.preferences.functional,
        analytics: data.preferences.analytics,
        marketing: data.preferences.marketing,
        thirdParty: data.preferences.thirdParty,
        expiresAt,
      };
      if (userId) createData.userId = userId;

      const ipAddress =
        c.req.header("x-forwarded-for") || c.req.header("x-real-ip");
      if (ipAddress) createData.ipAddress = ipAddress;

      const userAgent = c.req.header("user-agent");
      if (userAgent) createData.userAgent = userAgent;

      const updateData: Parameters<
        typeof prisma.cookieConsent.upsert
      >[0]["update"] = {
        functional: data.preferences.functional,
        analytics: data.preferences.analytics,
        marketing: data.preferences.marketing,
        thirdParty: data.preferences.thirdParty,
        expiresAt,
      };
      if (userId) updateData.userId = userId;
      if (ipAddress) updateData.ipAddress = ipAddress;
      if (userAgent) updateData.userAgent = userAgent;

      const consent = await prisma.cookieConsent.upsert({
        where: { visitorId: data.visitorId },
        create: createData,
        update: updateData,
      });

      return c.json({
        success: true,
        consentId: consent.id,
        preferences: {
          necessary: consent.necessary,
          functional: consent.functional,
          analytics: consent.analytics,
          marketing: consent.marketing,
          thirdParty: consent.thirdParty,
        },
        consentedAt: consent.consentedAt,
        expiresAt: consent.expiresAt,
      });
    } catch (error) {
      const dbError = new DatabaseError(
        "record cookie consent",
        error instanceof Error ? error : undefined,
      );
      log.error("Failed to record cookie consent", {
        error,
        userId,
        visitorId: data.visitorId,
      });
      return c.json(
        toApiError(dbError),
        dbError.statusCode as ContentfulStatusCode,
      );
    }
  },
);

/**
 * GET /api/v1/legal/cookie-consent
 * Get cookie consent preferences
 */
consentRoutes.get("/cookie-consent", async (c) => {
  const visitorId = c.req.query("visitorId");
  const userId = c.get("userId") as string | undefined;

  if (!visitorId && !userId) {
    return c.json({ error: "visitorId or userId is required" }, 400);
  }

  try {
    const consent = await prisma.cookieConsent.findFirst({
      where: {
        OR: [
          ...(visitorId ? [{ visitorId }] : []),
          ...(userId ? [{ userId }] : []),
        ],
        expiresAt: { gt: new Date() },
      },
      orderBy: { updatedAt: "desc" },
    });

    if (!consent) {
      return c.json({
        hasConsent: false,
        preferences: null,
      });
    }

    return c.json({
      hasConsent: true,
      preferences: {
        necessary: consent.necessary,
        functional: consent.functional,
        analytics: consent.analytics,
        marketing: consent.marketing,
        thirdParty: consent.thirdParty,
      },
      consentedAt: consent.consentedAt,
      updatedAt: consent.updatedAt,
      expiresAt: consent.expiresAt,
    });
  } catch (error) {
    const dbError = new DatabaseError(
      "get cookie consent",
      error instanceof Error ? error : undefined,
    );
    log.error("Failed to get cookie consent", { error, visitorId, userId });
    return c.json(
      toApiError(dbError),
      dbError.statusCode as ContentfulStatusCode,
    );
  }
});

// ============================================
// Legal Documents Endpoints
// ============================================

/**
 * GET /api/v1/legal/documents
 * List available legal documents
 */
consentRoutes.get("/documents", async (c) => {
  const locale = c.req.query("locale") || "en";
  const type = c.req.query("type");

  try {
    const documents = await prisma.legalDocument.findMany({
      where: {
        isActive: true,
        locale,
        ...(type && { type: type as never }),
      },
      orderBy: { effectiveAt: "desc" },
      select: {
        id: true,
        slug: true,
        type: true,
        locale: true,
        version: true,
        title: true,
        summary: true,
        effectiveAt: true,
        isRequired: true,
      },
    });

    // Deduplicate by slug (keep latest version)
    const uniqueDocs = documents.reduce(
      (acc, doc) => {
        if (!acc[doc.slug]) {
          acc[doc.slug] = doc;
        }
        return acc;
      },
      {} as Record<string, (typeof documents)[0]>,
    );

    return c.json({
      documents: Object.values(uniqueDocs),
    });
  } catch (error) {
    const dbError = new DatabaseError(
      "list legal documents",
      error instanceof Error ? error : undefined,
    );
    log.error("Failed to list documents", { error, locale, type });
    return c.json(
      toApiError(dbError),
      dbError.statusCode as ContentfulStatusCode,
    );
  }
});

/**
 * GET /api/v1/legal/documents/:slug
 * Get a specific legal document
 */
consentRoutes.get("/documents/:slug", async (c) => {
  const slug = c.req.param("slug");
  const locale = c.req.query("locale") || "en";
  const version = c.req.query("version");

  try {
    const document = await prisma.legalDocument.findFirst({
      where: {
        slug,
        locale,
        isActive: true,
        ...(version && { version }),
      },
      orderBy: { effectiveAt: "desc" },
    });

    if (!document) {
      const notFound = new NotFoundError("LegalDocument", slug);
      return c.json(
        toApiError(notFound),
        notFound.statusCode as ContentfulStatusCode,
      );
    }

    return c.json({ document });
  } catch (error) {
    const dbError = new DatabaseError(
      "get legal document",
      error instanceof Error ? error : undefined,
    );
    log.error("Failed to get document", { error, slug, locale, version });
    return c.json(
      toApiError(dbError),
      dbError.statusCode as ContentfulStatusCode,
    );
  }
});

// ============================================
// Contact Form Endpoint
// ============================================

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1),
  category: z
    .enum([
      "general",
      "sales",
      "support",
      "legal",
      "privacy",
      "partnership",
      "press",
    ])
    .default("general"),
});

/**
 * POST /api/v1/legal/contact
 * Submit a contact form
 */
consentRoutes.post(
  "/contact",
  zValidator("json", contactFormSchema),
  async (c) => {
    const data = c.req.valid("json");

    try {
      const submission = await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company ?? null,
          phone: data.phone ?? null,
          subject: data.subject,
          message: data.message,
          category: data.category,
          status: "new",
          ipAddress:
            c.req.header("x-forwarded-for") ??
            c.req.header("x-real-ip") ??
            null,
          userAgent: c.req.header("user-agent") ?? null,
        },
      });

      // TODO: Send notification email via Resend

      return c.json({
        success: true,
        submissionId: submission.id,
        message:
          "Your message has been received. We will respond within 1-2 business days.",
      });
    } catch (error) {
      const dbError = new DatabaseError(
        "submit contact form",
        error instanceof Error ? error : undefined,
      );
      log.error("Failed to submit contact form", {
        error,
        email: data.email,
        category: data.category,
      });
      return c.json(
        toApiError(dbError),
        dbError.statusCode as ContentfulStatusCode,
      );
    }
  },
);

export default consentRoutes;
