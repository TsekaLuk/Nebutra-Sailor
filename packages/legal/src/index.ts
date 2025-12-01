/**
 * @nebutra/legal
 *
 * Legal & Compliance infrastructure for Nebutra SaaS.
 * Provides GDPR/CCPA compliant consent management, legal document versioning,
 * and reusable React components.
 *
 * @example
 * ```typescript
 * import {
 *   CookieBanner,
 *   ConsentCheckbox,
 *   LegalFooter,
 *   legalConfig,
 *   recordDocumentConsent,
 * } from "@nebutra/legal";
 * ```
 */

// Types
export * from "./types";

// Document configuration
export {
  companyInfo,
  cookieCategories,
  documentConfigs,
  cookieConfig,
  contactConfig,
  legalConfig,
  getDocumentConfig,
  getRequiredDocuments,
  getDocumentsByType,
  getCookieCategory,
  getOptionalCookieCategories,
} from "./documents";

// Consent service
export {
  // Visitor ID
  generateVisitorId,
  getVisitorId,
  // Cookie consent
  defaultCookiePreferences,
  getCookieConsent,
  saveCookieConsent,
  acceptAllCookies,
  rejectAllCookies,
  hasCookieConsent,
  isCookieCategoryAllowed,
  getCookieConsentExpiry,
  // Document consent
  getDocumentConsents,
  cacheDocumentConsent,
  hasDocumentConsentCached,
  // API client
  configureConsentApi,
  recordDocumentConsent,
  getConsentStatus,
  recordCookieConsent,
  // GTM integration
  updateGTMConsent,
  initializeGTMConsentMode,
  type ConsentApiConfig,
} from "./consent";

// React components
export {
  CookieBanner,
  CookieSettingsButton,
  ConsentCheckbox,
  MultiConsentCheckbox,
  LegalFooter,
  LegalLinks,
  type CookieBannerProps,
  type CookieBannerTranslations,
  type CookieSettingsButtonProps,
  type ConsentCheckboxProps,
  type MultiConsentCheckboxProps,
  type LegalFooterProps,
  type LegalFooterTranslations,
  type LegalLinksProps,
} from "./components";
