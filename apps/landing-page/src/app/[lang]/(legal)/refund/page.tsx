/* eslint-disable @next/next/no-html-link-for-pages */
import { Metadata } from "next";
import { locales } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Refund Policy | Nebutra",
  description: "Our refund and cancellation policies for Nebutra services.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RefundPolicyPage() {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Refund Policy</h1>
      
      <p className="lead">
        <strong>Effective Date:</strong> January 1, 2025
        <br />
        <strong>Last Updated:</strong> January 1, 2025
      </p>

      <p>
        At Nebutra, we want you to be completely satisfied with our services. This Refund Policy 
        outlines the circumstances under which refunds are available and the process for requesting them.
      </p>

      <h2>Subscription Plans</h2>

      <h3>Monthly Subscriptions</h3>
      <ul>
        <li><strong>Cancellation:</strong> You may cancel your monthly subscription at any time</li>
        <li><strong>Pro-rata Refunds:</strong> We do not offer pro-rata refunds for partial months</li>
        <li><strong>Access:</strong> You retain access to paid features until the end of your billing period</li>
        <li><strong>Automatic Renewal:</strong> Subscriptions automatically renew unless cancelled</li>
      </ul>

      <h3>Annual Subscriptions</h3>
      <ul>
        <li><strong>14-Day Money-Back Guarantee:</strong> New annual subscribers may request a full refund within 14 days of their initial purchase</li>
        <li><strong>After 14 Days:</strong> Refunds are generally not available after the 14-day period</li>
        <li><strong>Cancellation:</strong> You may cancel at any time, but your subscription will remain active until the end of the annual term</li>
        <li><strong>No Pro-rata Refunds:</strong> We do not offer partial refunds for unused months</li>
      </ul>

      <h2>Eligible Refund Scenarios</h2>
      <p>We will consider refund requests in the following circumstances:</p>

      <h3>1. Service Issues</h3>
      <ul>
        <li>Significant service outages affecting your ability to use core features</li>
        <li>Technical issues that we are unable to resolve within a reasonable timeframe</li>
        <li>Features significantly different from what was advertised</li>
      </ul>

      <h3>2. Billing Errors</h3>
      <ul>
        <li>Duplicate charges</li>
        <li>Incorrect billing amounts</li>
        <li>Unauthorized charges (after verification)</li>
      </ul>

      <h3>3. Exceptional Circumstances</h3>
      <ul>
        <li>Documented medical emergencies</li>
        <li>Natural disasters affecting your business</li>
        <li>Other circumstances evaluated on a case-by-case basis</li>
      </ul>

      <h2>Non-Refundable Items</h2>
      <p>The following are generally not eligible for refunds:</p>
      <ul>
        <li><strong>Usage-based charges:</strong> API calls, AI token consumption, or storage used</li>
        <li><strong>Add-ons and extras:</strong> One-time purchases or add-on services</li>
        <li><strong>Enterprise contracts:</strong> Custom agreements have their own terms</li>
        <li><strong>Voluntary cancellations:</strong> After the refund eligibility period</li>
        <li><strong>Terms violations:</strong> Accounts terminated for policy violations</li>
      </ul>

      <h2>How to Request a Refund</h2>

      <h3>Step 1: Contact Support</h3>
      <p>Email us at <a href="mailto:billing@nebutra.com">billing@nebutra.com</a> with:</p>
      <ul>
        <li>Your account email address</li>
        <li>Subscription plan and billing period</li>
        <li>Reason for refund request</li>
        <li>Any relevant documentation</li>
      </ul>

      <h3>Step 2: Review Process</h3>
      <ul>
        <li>We will review your request within 5 business days</li>
        <li>We may ask for additional information</li>
        <li>You will receive a written decision via email</li>
      </ul>

      <h3>Step 3: Refund Processing</h3>
      <p>If approved:</p>
      <ul>
        <li>Refunds are processed to the original payment method</li>
        <li>Credit card refunds typically appear within 5-10 business days</li>
        <li>Bank processing times may vary</li>
      </ul>

      <h2>Plan Changes</h2>

      <h3>Upgrades</h3>
      <ul>
        <li>Upgrades take effect immediately</li>
        <li>You are charged the pro-rated difference for the remainder of your billing period</li>
        <li>No refund is provided for the previous plan</li>
      </ul>

      <h3>Downgrades</h3>
      <ul>
        <li>Downgrades take effect at the next billing period</li>
        <li>You retain access to current features until then</li>
        <li>No partial refunds for the current period</li>
      </ul>

      <h2>Free Trial</h2>
      <ul>
        <li>Free trials do not require payment information</li>
        <li>No charges occur during the trial period</li>
        <li>You will be notified before any charges begin</li>
      </ul>

      <h2>Dispute Resolution</h2>
      <p>If you disagree with our refund decision:</p>
      <ol>
        <li>Reply to the decision email with additional information</li>
        <li>Request escalation to a supervisor</li>
        <li>Contact us at <a href="mailto:legal@nebutra.com">legal@nebutra.com</a> for further review</li>
      </ol>

      <h2>Contact Us</h2>
      <p>For refund requests or questions about this policy:</p>
      <p>
        <strong>Nebutra, Inc.</strong><br />
        Billing: <a href="mailto:billing@nebutra.com">billing@nebutra.com</a><br />
        Support: <a href="mailto:support@nebutra.com">support@nebutra.com</a><br />
        Legal: <a href="mailto:legal@nebutra.com">legal@nebutra.com</a>
      </p>
      <p>We aim to respond to all refund requests within 5 business days.</p>

      <hr />

      <p>
        This policy is part of our <a href="/terms">Terms of Service</a>. By using Nebutra, 
        you agree to these refund terms.
      </p>
    </article>
  );
}
