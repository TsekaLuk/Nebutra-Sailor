/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Metadata } from "next";
import { locales } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "FAQ | Nebutra",
  description: "Frequently asked questions about Nebutra's platform, pricing, and services.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Nebutra?",
        a: "Nebutra is an AI-native enterprise SaaS platform that provides multi-tenant architecture, AI-powered features, content management, recommendation systems, e-commerce integrations, and Web3 capabilities—all in one unified platform.",
      },
      {
        q: "Who is Nebutra for?",
        a: "Nebutra is designed for businesses of all sizes looking to leverage AI capabilities in their operations. Whether you're a startup building an AI-powered product or an enterprise looking to modernize your tech stack, Nebutra provides the tools you need.",
      },
      {
        q: "Is Nebutra suitable for my industry?",
        a: "Nebutra is industry-agnostic and serves customers across e-commerce, media, SaaS, fintech, and more. Our flexible platform adapts to various use cases through customizable features and integrations.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        q: "How does Nebutra pricing work?",
        a: "We offer three main tiers: Free (for evaluation and small projects), Pro ($29/month for growing teams), and Enterprise (custom pricing for large organizations). Each tier includes different feature sets and usage limits.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes! Our Free tier lets you explore the platform without a credit card. When you're ready for more features and higher limits, you can upgrade to Pro or Enterprise.",
      },
      {
        q: "Can I change my plan at any time?",
        a: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately with pro-rated billing. Downgrades take effect at the start of your next billing cycle.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express) and process payments securely through Stripe. Enterprise customers can also pay via invoice.",
      },
      {
        q: "Do you offer refunds?",
        a: "Annual subscribers can request a full refund within 14 days of their initial purchase. Please see our Refund Policy for complete details.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        q: "What AI features does Nebutra offer?",
        a: "Nebutra provides AI-powered content generation, smart recommendations, automated translations, sentiment analysis, and more. Our AI features are powered by leading models and are designed to integrate seamlessly into your workflows.",
      },
      {
        q: "Can I integrate Nebutra with my existing tools?",
        a: "Yes! Nebutra offers a comprehensive API and integrations with popular tools including Shopify, Stripe, and various CMS platforms. Enterprise customers can also request custom integrations.",
      },
      {
        q: "Does Nebutra support multiple languages?",
        a: "Yes, our platform supports internationalization (i18n) with AI-powered translations. You can serve content in multiple languages and localize your user experience.",
      },
      {
        q: "What about Web3 capabilities?",
        a: "Nebutra includes Web3 features for NFT management, blockchain integrations, and token-gated content. These features are available on Pro and Enterprise plans.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "How does Nebutra handle my data?",
        a: "Your data is encrypted in transit (TLS) and at rest. We follow industry best practices for data security and comply with GDPR, CCPA, and other privacy regulations. See our Privacy Policy for details.",
      },
      {
        q: "Is Nebutra SOC 2 compliant?",
        a: "We are actively working toward SOC 2 Type II certification. Enterprise customers can request our current security documentation and compliance reports.",
      },
      {
        q: "Where is my data stored?",
        a: "Data is primarily stored in secure data centers in the United States. Enterprise customers can request specific data residency options for compliance with local regulations.",
      },
      {
        q: "Can I export my data?",
        a: "Yes, you can export your data at any time through our API or by contacting support. We believe your data belongs to you.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "What support options are available?",
        a: "Free tier users have access to community support and documentation. Pro users get email support with 24-hour response time. Enterprise customers receive dedicated support with priority response and a dedicated success manager.",
      },
      {
        q: "Do you offer onboarding assistance?",
        a: "Yes! Pro and Enterprise customers receive onboarding assistance to help you get started quickly. Enterprise customers also get custom implementation support.",
      },
      {
        q: "How can I report a bug or request a feature?",
        a: "You can report bugs and request features through our support channels or directly in the app. We actively review all feedback and prioritize based on customer needs.",
      },
    ],
  },
];

export default async function FAQPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Find answers to common questions about Nebutra
        </p>
      </section>

      {/* FAQ Categories */}
      {faqs.map((category) => (
        <section key={category.category}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {category.category}
          </h2>
          <div className="space-y-4">
            {category.questions.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-900 dark:text-white">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 transition group-open:rotate-180">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Still have questions?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Can't find what you're looking for? Our team is here to help.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Support
          </a>
          <a
            href="mailto:support@nebutra.com"
            className="rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 font-semibold text-gray-700 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
