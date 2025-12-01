import { Metadata } from "next";
import { locales } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Contact Us | Nebutra",
  description: "Get in touch with Nebutra for sales, support, or general inquiries.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const contacts = [
  {
    title: "General Inquiries",
    email: "hello@nebutra.com",
    description: "For general questions about Nebutra",
  },
  {
    title: "Sales",
    email: "sales@nebutra.com",
    description: "Talk to our sales team about enterprise solutions",
  },
  {
    title: "Support",
    email: "support@nebutra.com",
    description: "Get help with your account or technical issues",
  },
  {
    title: "Legal",
    email: "legal@nebutra.com",
    description: "Legal inquiries and compliance questions",
  },
  {
    title: "Privacy",
    email: "privacy@nebutra.com",
    description: "Data privacy and GDPR requests",
  },
  {
    title: "Security",
    email: "security@nebutra.com",
    description: "Report security vulnerabilities",
  },
];

export default async function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          We'd love to hear from you. Choose the best way to reach us.
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
          Send us a message
        </h2>
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name *
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
                Email *
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
                Company
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
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="general">General Inquiry</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="legal">Legal</option>
                <option value="privacy">Privacy</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject *
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
              Message *
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
              Send Message
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </section>

      {/* Office Info */}
      <section className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Company Information
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Nebutra, Inc.</h3>
            <p>San Francisco, California</p>
            <p>United States</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Social Media</h3>
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
