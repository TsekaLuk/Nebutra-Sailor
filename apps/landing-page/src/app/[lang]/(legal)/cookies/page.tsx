import { Metadata } from "next";
import { locales } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Cookie Policy | Nebutra",
  description: "How Nebutra uses cookies and similar technologies.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function CookiePolicyPage() {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Cookie Policy</h1>
      
      <p className="lead">
        <strong>Effective Date:</strong> January 1, 2025
        <br />
        <strong>Last Updated:</strong> January 1, 2025
      </p>

      <p>
        This Cookie Policy explains how Nebutra, Inc. ("Nebutra," "we," "us," or "our") uses 
        cookies and similar tracking technologies on our website and services.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are 
        widely used to make websites work more efficiently and provide information to website owners.
      </p>

      <h2>How We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul>
        <li><strong>Enable Essential Features:</strong> Provide core functionality like user authentication and security</li>
        <li><strong>Remember Preferences:</strong> Store your language, theme, and other settings</li>
        <li><strong>Improve Performance:</strong> Understand how visitors interact with our services</li>
        <li><strong>Personalize Experience:</strong> Deliver relevant content and recommendations</li>
        <li><strong>Measure Marketing:</strong> Track the effectiveness of our marketing campaigns</li>
      </ul>

      <h2>Types of Cookies We Use</h2>

      <h3>Strictly Necessary Cookies</h3>
      <p>These cookies are essential for the website to function properly. They cannot be disabled.</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>__session</code></td>
              <td>Nebutra</td>
              <td>User authentication session</td>
              <td>Session</td>
            </tr>
            <tr>
              <td><code>__clerk_db_jwt</code></td>
              <td>Clerk</td>
              <td>Authentication token</td>
              <td>7 days</td>
            </tr>
            <tr>
              <td><code>cookie_consent</code></td>
              <td>Nebutra</td>
              <td>Stores cookie consent preferences</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Functional Cookies</h3>
      <p>These cookies enable personalized features and remember your preferences.</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>locale</code></td>
              <td>Nebutra</td>
              <td>Stores language preference</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td><code>theme</code></td>
              <td>Nebutra</td>
              <td>Stores theme preference</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Analytics Cookies</h3>
      <p>These cookies help us understand how visitors interact with our website.</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>_ga</code></td>
              <td>Google Analytics</td>
              <td>Distinguishes unique users</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td><code>ph_*</code></td>
              <td>PostHog</td>
              <td>Product analytics</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Marketing Cookies</h3>
      <p>These cookies are used for advertising and tracking ad campaign performance.</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>_fbp</code></td>
              <td>Facebook</td>
              <td>Tracks visits for Facebook ads</td>
              <td>3 months</td>
            </tr>
            <tr>
              <td><code>_gcl_au</code></td>
              <td>Google Ads</td>
              <td>Conversion tracking</td>
              <td>3 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Managing Your Cookie Preferences</h2>

      <h3>Cookie Consent Banner</h3>
      <p>When you first visit our website, you'll see a cookie consent banner that allows you to:</p>
      <ul>
        <li><strong>Accept All:</strong> Enable all cookie categories</li>
        <li><strong>Reject All:</strong> Disable all optional cookies (necessary cookies remain)</li>
        <li><strong>Customize:</strong> Choose specific cookie categories to enable</li>
      </ul>
      <p>You can change your preferences at any time by clicking "Cookie Settings" in the footer.</p>

      <h3>Browser Settings</h3>
      <p>Most web browsers allow you to control cookies through their settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings {'>'} Privacy and security {'>'} Cookies</li>
        <li><strong>Firefox:</strong> Settings {'>'} Privacy & Security {'>'} Cookies</li>
        <li><strong>Safari:</strong> Preferences {'>'} Privacy {'>'} Cookies</li>
        <li><strong>Edge:</strong> Settings {'>'} Privacy, search, and services {'>'} Cookies</li>
      </ul>
      <p><em>Note: Blocking certain cookies may impact website functionality.</em></p>

      <h2>Similar Technologies</h2>
      <p>In addition to cookies, we may use:</p>
      <ul>
        <li><strong>Local Storage:</strong> To store preferences and cache data locally</li>
        <li><strong>Session Storage:</strong> For temporary data during your browsing session</li>
        <li><strong>Pixel Tags:</strong> Small images to track email opens and website visits</li>
      </ul>
      <p><strong>We do NOT use browser fingerprinting for tracking.</strong></p>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. We will notify you of material changes 
        by posting the updated policy on our website.
      </p>

      <h2>Contact Us</h2>
      <p>If you have questions about our use of cookies, please contact us:</p>
      <p>
        <strong>Nebutra, Inc.</strong><br />
        Email: <a href="mailto:privacy@nebutra.com">privacy@nebutra.com</a><br />
        Legal: <a href="mailto:legal@nebutra.com">legal@nebutra.com</a>
      </p>

      <hr />

      <p>
        For more information about how we collect and process your data, please see our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </article>
  );
}
