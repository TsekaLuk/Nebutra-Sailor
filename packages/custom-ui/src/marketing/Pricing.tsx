/**
 * Pricing - Pricing Plans Section
 *
 * Display pricing plans with features comparison and CTAs.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md#pricing
 *
 * ## Features (TODO)
 * - [ ] Section title + subtitle
 * - [ ] Monthly/Yearly billing toggle
 * - [ ] Pricing cards with:
 *   - [ ] Plan name + description
 *   - [ ] Price (with currency formatting)
 *   - [ ] Features list (included/excluded)
 *   - [ ] CTA button
 *   - [ ] Popular/recommended badge
 * - [ ] Feature comparison table (optional)
 * - [ ] Yearly discount display
 *
 * ## Animation (TODO)
 * - [ ] Price change animation on toggle
 * - [ ] Card hover effects
 * - [ ] Entrance animation on scroll
 *
 * ## i18n (TODO)
 * - [ ] Currency formatting per locale
 * - [ ] Localized plan names/descriptions
 */

"use client";

import * as React from "react";
import type { PricingProps } from "./types";

export function Pricing({
  locale = "en",
  plans = [],
  defaultBillingCycle = "monthly",
  showBillingToggle = true,
  showComparison = false,
  title,
  subtitle,
  yearlyDiscount,
  className,
  id,
  density = "normal",
}: PricingProps) {
  // TODO: Implement billing cycle state
  const [billingCycle, setBillingCycle] = React.useState(defaultBillingCycle);

  // TODO: Implement price formatting
  const formatPrice = (amount: number, currency = "USD") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id={id} className={className} data-density={density}>
      {/* TODO: Section Header */}
      <div data-slot="header">
        {title && <h2 data-slot="title">{title}</h2>}
        {subtitle && <p data-slot="subtitle">{subtitle}</p>}
      </div>

      {/* TODO: Billing Toggle */}
      {showBillingToggle && (
        <div data-slot="billing-toggle">
          <button
            data-active={billingCycle === "monthly"}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            data-active={billingCycle === "yearly"}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
            {yearlyDiscount && (
              <span data-badge>Save {yearlyDiscount}%</span>
            )}
          </button>
        </div>
      )}

      {/* TODO: Pricing Cards */}
      <div data-slot="plans">
        {plans.map((plan) => (
          <div
            key={plan.id}
            data-slot="plan-card"
            data-popular={plan.popular}
          >
            {/* TODO: Use PricingCard component */}
            {plan.badge && <span data-slot="badge">{plan.badge}</span>}
            <h3 data-slot="plan-name">{plan.name}</h3>
            <p data-slot="plan-description">{plan.description}</p>
            <div data-slot="price">
              <span data-slot="amount">
                {formatPrice(
                  billingCycle === "monthly"
                    ? plan.price.monthly
                    : plan.price.yearly / 12,
                  plan.price.currency
                )}
              </span>
              <span data-slot="period">/month</span>
              {billingCycle === "yearly" && (
                <span data-slot="billed-yearly">
                  Billed {formatPrice(plan.price.yearly, plan.price.currency)}/year
                </span>
              )}
            </div>
            <ul data-slot="features">
              {plan.features.map((feature, i) => (
                <li key={i} data-included={feature.included}>
                  {/* TODO: Check/X icon */}
                  {feature.text}
                  {feature.tooltip && (
                    <span data-slot="tooltip">{feature.tooltip}</span>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={plan.cta.href}
              data-slot="cta"
              data-variant={plan.cta.variant}
              data-analytics={`pricing-cta-${plan.id}`}
            >
              {plan.cta.text}
            </a>
          </div>
        ))}
      </div>

      {/* TODO: Comparison Table */}
      {showComparison && (
        <div data-slot="comparison">
          {/* TODO: Implement feature comparison table */}
        </div>
      )}
    </section>
  );
}

Pricing.displayName = "Pricing";
