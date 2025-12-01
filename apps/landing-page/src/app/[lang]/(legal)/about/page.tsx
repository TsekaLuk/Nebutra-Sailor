/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Metadata } from "next";
import { locales } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "About Us | Nebutra",
  description: "Learn about Nebutra's mission, team, and vision for the future of enterprise SaaS.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          About Nebutra
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Building the future of AI-native enterprise software
        </p>
      </section>

      {/* Mission Section */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Our Mission</h2>
        <p>
          At Nebutra, we believe that every business deserves access to powerful, AI-native tools 
          that were once only available to tech giants. Our mission is to democratize enterprise 
          software by building a comprehensive SaaS platform that combines the latest in artificial 
          intelligence with robust multi-tenant architecture.
        </p>
        <p>
          We're building the infrastructure that allows businesses to leverage AI for content creation, 
          personalized recommendations, e-commerce optimization, and community building—all in one 
          unified platform.
        </p>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            title="Innovation First"
            description="We constantly push boundaries to deliver cutting-edge AI capabilities that give our customers a competitive edge."
          />
          <ValueCard
            title="Trust & Transparency"
            description="We believe in earning trust through transparency—in our pricing, our policies, and how we handle your data."
          />
          <ValueCard
            title="Customer Success"
            description="Your success is our success. We're committed to providing the tools and support you need to grow."
          />
          <ValueCard
            title="Security by Design"
            description="Security isn't an afterthought. We build with enterprise-grade security from the ground up."
          />
          <ValueCard
            title="Global Scale"
            description="Our platform is built to serve customers worldwide with reliable, low-latency performance."
          />
          <ValueCard
            title="Open Ecosystem"
            description="We embrace integrations and APIs that let you connect Nebutra with your existing tools."
          />
        </div>
      </section>

      {/* Company Info Section */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Company Information</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Legal Name</dt>
            <dd className="text-gray-600 dark:text-gray-400">Nebutra, Inc.</dd>
          </div>
          <div>
            <dt className="font-semibold">Founded</dt>
            <dd className="text-gray-600 dark:text-gray-400">2024</dd>
          </div>
          <div>
            <dt className="font-semibold">Headquarters</dt>
            <dd className="text-gray-600 dark:text-gray-400">San Francisco, California</dd>
          </div>
          <div>
            <dt className="font-semibold">Jurisdiction</dt>
            <dd className="text-gray-600 dark:text-gray-400">Delaware, United States</dd>
          </div>
        </dl>
      </section>

      {/* Contact CTA */}
      <section className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Want to learn more?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We'd love to hear from you. Reach out to discuss how Nebutra can help your business.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </a>
          <a
            href="mailto:hello@nebutra.com"
            className="rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 font-semibold text-gray-700 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            hello@nebutra.com
          </a>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
