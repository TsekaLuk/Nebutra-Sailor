/**
 * Footer - Site Footer Component
 *
 * Full site footer with navigation, social links, newsletter, and legal.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md#footer
 *
 * ## Features (TODO)
 * - [ ] Logo + tagline
 * - [ ] Link sections (Product, Company, Resources, Legal)
 * - [ ] Social media links
 * - [ ] Newsletter signup form
 * - [ ] Locale/language switcher
 * - [ ] Copyright notice
 * - [ ] Legal links (Privacy, Terms)
 *
 * ## Responsive (TODO)
 * - [ ] Desktop: multi-column layout
 * - [ ] Mobile: stacked sections with accordions
 */

"use client";

import * as React from "react";
import type { FooterProps } from "./types";

export function Footer({
  locale = "en",
  sections = [],
  social = [],
  showNewsletter = true,
  copyright,
  className,
  id,
}: FooterProps) {
  return (
    <footer id={id} className={className}>
      {/* TODO: Main Footer Content */}
      <div data-slot="main">
        {/* TODO: Logo + Description */}
        <div data-slot="brand">
          <div data-slot="logo">
            {/* TODO: Logo component */}
            <span>Logo</span>
          </div>
          <p data-slot="description">
            {/* TODO: Company tagline */}
            Building the future of...
          </p>
          {/* TODO: Social Links */}
          {social.length > 0 && (
            <div data-slot="social">
              {social.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  {/* TODO: Social icon */}
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* TODO: Link Sections */}
        {sections.map((section) => (
          <div key={section.title} data-slot="link-section">
            <h4 data-slot="section-title">{section.title}</h4>
            <ul data-slot="links">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    {link.badge && <span data-badge>{link.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* TODO: Newsletter */}
        {showNewsletter && (
          <div data-slot="newsletter">
            <h4 data-slot="newsletter-title">Subscribe to our newsletter</h4>
            <p data-slot="newsletter-description">
              Get the latest updates and news.
            </p>
            <form data-slot="newsletter-form">
              {/* TODO: Email input + submit button */}
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        )}
      </div>

      {/* TODO: Bottom Bar */}
      <div data-slot="bottom">
        {/* TODO: Copyright */}
        <p data-slot="copyright">
          {copyright ||
            `© ${new Date().getFullYear()} Nebutra. All rights reserved.`}
        </p>

        {/* TODO: Legal Links */}
        <div data-slot="legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>

        {/* TODO: Locale Switcher */}
        <div data-slot="locale">
          <span>{locale.toUpperCase()}</span>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";
