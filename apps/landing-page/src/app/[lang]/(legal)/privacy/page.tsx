import { Metadata } from "next";
import { locales } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Privacy Policy | Nebutra",
  description: "How Nebutra collects, uses, and protects your personal information.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function PrivacyPolicyPage() {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Privacy Policy</h1>
      
      <p className="lead">
        <strong>Effective Date:</strong> January 1, 2025
        <br />
        <strong>Last Updated:</strong> January 1, 2025
      </p>

      <p>
        At Nebutra ("Company," "we," "us," or "our"), we are committed to protecting your privacy. 
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
        when you use our website, applications, and services (collectively, the "Services").
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <p>We collect information you directly provide to us, including:</p>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, password, and organization details when you create an account.</li>
        <li><strong>Profile Information:</strong> Profile picture, job title, company name, and other optional information.</li>
        <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through Stripe).</li>
        <li><strong>Communications:</strong> Messages, feedback, and other communications you send to us.</li>
        <li><strong>Content:</strong> Any content you create, upload, or store using our Services.</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <p>When you use our Services, we automatically collect certain information:</p>
      <ul>
        <li><strong>Device Information:</strong> Device type, operating system, browser type, and unique device identifiers.</li>
        <li><strong>Usage Information:</strong> Pages viewed, features used, actions taken, and time spent on Services.</li>
        <li><strong>Log Data:</strong> IP address, access times, referring URLs, and system activity logs.</li>
        <li><strong>Location Information:</strong> General location based on IP address (we do not collect precise geolocation).</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li><strong>Provide Services:</strong> Operate, maintain, and improve our Services.</li>
        <li><strong>Process Transactions:</strong> Handle payments, billing, and related operations.</li>
        <li><strong>Communicate:</strong> Send service announcements, updates, and marketing communications (with consent).</li>
        <li><strong>Personalize:</strong> Customize your experience and provide relevant recommendations.</li>
        <li><strong>Analyze:</strong> Understand usage patterns and improve our Services.</li>
        <li><strong>Protect:</strong> Detect, prevent, and respond to fraud, abuse, and security incidents.</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We may share your information in the following circumstances:</p>
      
      <h3>3.1 Service Providers</h3>
      <p>We share information with third-party vendors who provide services on our behalf, including:</p>
      <ul>
        <li><strong>Infrastructure:</strong> Cloud hosting (Vercel, Supabase), database services</li>
        <li><strong>Payment Processing:</strong> Stripe for secure payment handling</li>
        <li><strong>Authentication:</strong> Clerk for identity management</li>
        <li><strong>Analytics:</strong> PostHog, Vercel Analytics for usage insights</li>
      </ul>

      <h3>3.2 Business Transfers</h3>
      <p>
        If we are involved in a merger, acquisition, or sale of assets, your information may be 
        transferred as part of that transaction.
      </p>

      <h3>3.3 Legal Requirements</h3>
      <p>
        We may disclose information when required by law, legal process, or government request, 
        or to protect our rights, privacy, safety, or property.
      </p>

      <h2>4. Your Rights and Choices</h2>
      
      <h3>4.1 Access and Portability</h3>
      <p>
        You can access your personal information through your account settings and request a 
        copy of your data in a portable format.
      </p>

      <h3>4.2 Correction</h3>
      <p>You can update your account information at any time through the dashboard.</p>

      <h3>4.3 Deletion</h3>
      <p>You can request deletion of your account and associated data through settings or by contacting us.</p>

      <h3>4.4 Marketing Communications</h3>
      <p>
        You can opt out of marketing emails by clicking "unsubscribe" in any marketing email or 
        updating your preferences.
      </p>

      <h2>5. Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your information, including:</p>
      <ul>
        <li>Encryption of data in transit (TLS) and at rest</li>
        <li>Regular security assessments and penetration testing</li>
        <li>Access controls and authentication requirements</li>
        <li>Monitoring and logging of system activity</li>
      </ul>

      <h2>6. California Privacy Rights (CCPA)</h2>
      <p>If you are a California resident, you have specific rights regarding your personal information:</p>
      <ul>
        <li><strong>Right to Know:</strong> Request disclosure of information we collect, use, and share.</li>
        <li><strong>Right to Delete:</strong> Request deletion of your personal information.</li>
        <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we do not sell your data).</li>
        <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights.</li>
      </ul>

      <h2>7. European Privacy Rights (GDPR)</h2>
      <p>If you are in the EEA, UK, or Switzerland, you have additional rights under GDPR:</p>
      <ul>
        <li><strong>Legal Basis:</strong> We process your data based on contract performance, legitimate interests, or consent.</li>
        <li><strong>Rights:</strong> Access, rectification, erasure, portability, restriction, and objection.</li>
        <li><strong>DPO:</strong> You can contact our Data Protection Officer at dpo@nebutra.com.</li>
      </ul>

      <h2>8. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us:</p>
      <p>
        <strong>Nebutra, Inc.</strong><br />
        Email: <a href="mailto:privacy@nebutra.com">privacy@nebutra.com</a><br />
        Legal: <a href="mailto:legal@nebutra.com">legal@nebutra.com</a><br />
        DPO: <a href="mailto:dpo@nebutra.com">dpo@nebutra.com</a>
      </p>
    </article>
  );
}
