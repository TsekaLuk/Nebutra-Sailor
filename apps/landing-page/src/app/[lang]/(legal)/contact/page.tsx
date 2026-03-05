import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};
  const t = await getTranslations({ locale: lang, namespace: "legalPages" });
  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang as Locale);
  const t = await getTranslations("legalPages");

  const contacts = [
    {
      title: t("contact.contacts.general.title"),
      email: "hello@nebutra.com",
      description: t("contact.contacts.general.description"),
    },
    {
      title: t("contact.contacts.sales.title"),
      email: "sales@nebutra.com",
      description: t("contact.contacts.sales.description"),
    },
    {
      title: t("contact.contacts.support.title"),
      email: "support@nebutra.com",
      description: t("contact.contacts.support.description"),
    },
    {
      title: t("contact.contacts.legal.title"),
      email: "legal@nebutra.com",
      description: t("contact.contacts.legal.description"),
    },
    {
      title: t("contact.contacts.privacy.title"),
      email: "privacy@nebutra.com",
      description: t("contact.contacts.privacy.description"),
    },
    {
      title: t("contact.contacts.security.title"),
      email: "security@nebutra.com",
      description: t("contact.contacts.security.description"),
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--neutral-12)] dark:text-white">
          {t("contact.heading")}
        </h1>
        <p className="mt-4 text-lg text-[var(--neutral-10)]">
          {t("contact.subheading")}
        </p>
      </section>

      {/* Contact Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <div
            key={contact.email}
            className="rounded-[var(--radius-lg)] border border-[var(--neutral-6)] p-6 transition-colors hover:border-[color:var(--blue-8)] dark:hover:border-[color:var(--blue-7)]"
          >
            <h3 className="font-semibold text-[var(--neutral-12)] dark:text-white">
              {contact.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--neutral-10)]">
              {contact.description}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-block text-[color:var(--blue-11)] hover:text-[color:var(--blue-12)] dark:text-[color:var(--blue-9)] dark:hover:text-[color:var(--blue-10)]"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="rounded-[var(--radius-2xl)] border border-[var(--neutral-6)] p-8">
        <h2 className="text-2xl font-bold text-[var(--neutral-12)] dark:text-white mb-6">
          {t("contact.formTitle")}
        </h2>
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--neutral-11)]"
              >
                {t("contact.form.name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-[var(--radius-lg)] border border-[var(--neutral-7)] bg-[var(--neutral-1)] px-4 py-2 text-[var(--neutral-12)] focus:border-[color:var(--blue-8)] focus:ring-[color:var(--blue-8)] dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--neutral-11)]"
              >
                {t("contact.form.email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-[var(--radius-lg)] border border-[var(--neutral-7)] bg-[var(--neutral-1)] px-4 py-2 text-[var(--neutral-12)] focus:border-[color:var(--blue-8)] focus:ring-[color:var(--blue-8)] dark:text-white"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-[var(--neutral-11)]"
              >
                {t("contact.form.company")}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 block w-full rounded-[var(--radius-lg)] border border-[var(--neutral-7)] bg-[var(--neutral-1)] px-4 py-2 text-[var(--neutral-12)] focus:border-[color:var(--blue-8)] focus:ring-[color:var(--blue-8)] dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-[var(--neutral-11)]"
              >
                {t("contact.form.category")} *
              </label>
              <select
                id="category"
                name="category"
                required
                className="mt-1 block w-full rounded-[var(--radius-lg)] border border-[var(--neutral-7)] bg-[var(--neutral-1)] px-4 py-2 text-[var(--neutral-12)] focus:border-[color:var(--blue-8)] focus:ring-[color:var(--blue-8)] dark:text-white"
              >
                <option value="general">
                  {t("contact.form.categories.general")}
                </option>
                <option value="sales">
                  {t("contact.form.categories.sales")}
                </option>
                <option value="support">
                  {t("contact.form.categories.support")}
                </option>
                <option value="legal">
                  {t("contact.form.categories.legal")}
                </option>
                <option value="privacy">
                  {t("contact.form.categories.privacy")}
                </option>
                <option value="partnership">
                  {t("contact.form.categories.partnership")}
                </option>
                <option value="press">
                  {t("contact.form.categories.press")}
                </option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[var(--neutral-11)]"
            >
              {t("contact.form.subject")} *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-1 block w-full rounded-[var(--radius-lg)] border border-[var(--neutral-7)] bg-[var(--neutral-1)] px-4 py-2 text-[var(--neutral-12)] focus:border-[color:var(--blue-8)] focus:ring-[color:var(--blue-8)] dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--neutral-11)]"
            >
              {t("contact.form.message")} *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-[var(--radius-lg)] border border-[var(--neutral-7)] bg-[var(--neutral-1)] px-4 py-2 text-[var(--neutral-12)] focus:border-[color:var(--blue-8)] focus:ring-[color:var(--blue-8)] dark:text-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-[var(--radius-lg)] bg-[color:var(--blue-9)] px-6 py-3 font-semibold text-white transition hover:bg-[color:var(--blue-10)] focus:outline-none focus:ring-2 focus:ring-[color:var(--blue-8)] focus:ring-offset-2"
            >
              {t("contact.form.submit")}
            </button>
          </div>
          <p className="text-sm text-[var(--neutral-9)]">
            {t("contact.form.privacyNotice")}{" "}
            <Link
              href="/privacy"
              className="text-[color:var(--blue-11)] hover:underline dark:text-[color:var(--blue-9)]"
            >
              {t("contact.form.privacyLink")}
            </Link>
            .
          </p>
        </form>
      </section>

      {/* Office Info */}
      <section className="rounded-[var(--radius-2xl)] bg-[var(--neutral-2)] p-8">
        <h2 className="text-xl font-bold text-[var(--neutral-12)] dark:text-white mb-4">
          {t("contact.companyInfoTitle")}
        </h2>
        <div className="space-y-4 text-[var(--neutral-10)]">
          <div>
            <h3 className="font-semibold text-[var(--neutral-12)] dark:text-white">
              Nebutra, Inc.
            </h3>
            <p>San Francisco, California</p>
            <p>United States</p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--neutral-12)] dark:text-white">
              {t("contact.socialMedia")}
            </h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://twitter.com/nebutra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--neutral-9)] hover:text-[color:var(--blue-11)] dark:hover:text-[color:var(--blue-9)]"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/nebutra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--neutral-9)] hover:text-[color:var(--blue-11)] dark:hover:text-[color:var(--blue-9)]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nebutra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--neutral-9)] hover:text-[color:var(--blue-11)] dark:hover:text-[color:var(--blue-9)]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
