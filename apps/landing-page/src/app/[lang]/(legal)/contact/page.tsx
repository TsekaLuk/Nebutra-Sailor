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
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("contact.heading")}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {t("contact.subheading")}
        </p>
      </section>

      {/* Contact Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <div
            key={contact.email}
            className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {contact.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {contact.description}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t("contact.formTitle")}
        </h2>
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t("contact.form.name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t("contact.form.email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t("contact.form.company")}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t("contact.form.category")} *
              </label>
              <select
                id="category"
                name="category"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
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
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("contact.form.subject")} *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("contact.form.message")} *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t("contact.form.submit")}
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("contact.form.privacyNotice")}{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              {t("contact.form.privacyLink")}
            </Link>
            .
          </p>
        </form>
      </section>

      {/* Office Info */}
      <section className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {t("contact.companyInfoTitle")}
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Nebutra, Inc.
            </h3>
            <p>San Francisco, California</p>
            <p>United States</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t("contact.socialMedia")}
            </h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://twitter.com/nebutra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/nebutra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nebutra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
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
