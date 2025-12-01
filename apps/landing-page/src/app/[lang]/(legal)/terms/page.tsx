/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";
import { locales } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Terms of Service | Nebutra",
  description: "The agreement governing your use of Nebutra services.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function TermsOfServicePage() {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Terms of Service</h1>
      
      <p className="lead">
        <strong>Effective Date:</strong> January 1, 2025
        <br />
        <strong>Last Updated:</strong> January 1, 2025
      </p>

      <p>
        Welcome to Nebutra! These Terms of Service ("Terms") govern your access to and use of 
        Nebutra's website, applications, APIs, and services (collectively, the "Services") 
        provided by Nebutra, Inc. ("Nebutra," "Company," "we," "us," or "our").
      </p>

      <p>
        By accessing or using our Services, you agree to be bound by these Terms and our{" "}
        <Link href="/privacy">Privacy Policy</Link>. If you do not agree to these Terms, do not use our Services.
      </p>

      <h2>1. Acceptance of Terms</h2>

      <h3>1.1 Eligibility</h3>
      <p>To use our Services, you must:</p>
      <ul>
        <li>Be at least 18 years old or the age of legal majority in your jurisdiction</li>
        <li>Have the authority to enter into these Terms on behalf of yourself or your organization</li>
        <li>Not be prohibited from using our Services under applicable law</li>
      </ul>

      <h3>1.2 Organization Accounts</h3>
      <p>
        If you use our Services on behalf of an organization, you represent that you have 
        authority to bind that organization to these Terms.
      </p>

      <h2>2. Description of Services</h2>
      <p>Nebutra provides a SaaS platform that includes:</p>
      <ul>
        <li>AI-powered features and content generation</li>
        <li>Content management and community tools</li>
        <li>Recommendation systems</li>
        <li>E-commerce integrations</li>
        <li>Web3 capabilities</li>
        <li>Analytics and reporting</li>
      </ul>

      <h2>3. Account Registration</h2>

      <h3>3.1 Account Creation</h3>
      <p>To access certain features, you must create an account. You agree to:</p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the security of your account credentials</li>
        <li>Promptly update your information if it changes</li>
        <li>Accept responsibility for all activities under your account</li>
      </ul>

      <h2>4. Subscription and Billing</h2>

      <h3>4.1 Pricing</h3>
      <p>
        Our Services are offered under various subscription plans as described on our Pricing page. 
        Prices are subject to change with 30 days' notice.
      </p>

      <h3>4.2 Payment</h3>
      <ul>
        <li>Subscriptions are billed in advance on a monthly or annual basis</li>
        <li>All fees are non-refundable except as stated in our <Link href="/refund">Refund Policy</Link></li>
        <li>You authorize us to charge your payment method for applicable fees</li>
        <li>We use Stripe for secure payment processing</li>
      </ul>

      <h2>5. Acceptable Use</h2>

      <h3>5.1 Prohibited Activities</h3>
      <p>You agree NOT to:</p>
      <ul>
        <li>Violate any applicable laws, regulations, or third-party rights</li>
        <li>Use the Services to transmit malware, spam, or harmful content</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with or disrupt the integrity or performance of our Services</li>
        <li>Use automated tools to scrape, copy, or extract data without permission</li>
        <li>Reverse engineer, decompile, or disassemble our Services</li>
        <li>Use our AI features to generate illegal, harmful, or deceptive content</li>
      </ul>

      <h2>6. Intellectual Property</h2>

      <h3>6.1 Our Intellectual Property</h3>
      <p>
        Nebutra and its licensors own all rights, title, and interest in the Services, including 
        all software, designs, trademarks, and content created by us.
      </p>

      <h3>6.2 Your Content</h3>
      <p>
        You retain ownership of content you create or upload ("Your Content"). By using our Services, 
        you grant us a worldwide, non-exclusive, royalty-free license to use, store, process, and 
        display Your Content solely to provide the Services to you.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        <strong>
          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
          EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </strong>
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        <strong>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEBUTRA SHALL NOT BE LIABLE FOR INDIRECT, 
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, DATA, 
          USE, OR GOODWILL.
        </strong>
      </p>
      <p>
        <strong>
          IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID 
          US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) $100 USD.
        </strong>
      </p>

      <h2>9. Termination</h2>

      <h3>9.1 By You</h3>
      <p>
        You may terminate your account at any time through your account settings. Upon termination, 
        you will lose access to the Services.
      </p>

      <h3>9.2 By Us</h3>
      <p>We may suspend or terminate your account if you:</p>
      <ul>
        <li>Violate these Terms</li>
        <li>Engage in fraudulent or illegal activity</li>
        <li>Fail to pay applicable fees</li>
        <li>Create risk or legal exposure for us</li>
      </ul>

      <h2>10. Dispute Resolution</h2>

      <h3>10.1 Informal Resolution</h3>
      <p>
        Before initiating formal proceedings, you agree to contact us at legal@nebutra.com to 
        attempt to resolve disputes informally.
      </p>

      <h3>10.2 Governing Law</h3>
      <p>
        These Terms are governed by the laws of the State of Delaware, without regard to conflict 
        of law principles.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have questions about these Terms, please contact us:</p>
      <p>
        <strong>Nebutra, Inc.</strong><br />
        Email: <a href="mailto:legal@nebutra.com">legal@nebutra.com</a><br />
        Support: <a href="mailto:support@nebutra.com">support@nebutra.com</a>
      </p>

      <hr />

      <p>
        By using Nebutra, you acknowledge that you have read, understood, and agree to be bound 
        by these Terms of Service.
      </p>
    </article>
  );
}
