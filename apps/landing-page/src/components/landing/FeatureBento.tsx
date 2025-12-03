"use client";

import { motion } from "framer-motion";
import { Building2, Bot, CreditCard, Globe } from "lucide-react";
import { bentoFeatures } from "@/lib/landing-content";
import { cn } from "@/lib/utils";
import {
  Card,
  ThemedSection,
  useScrollDwell,
  DwellHint,
} from "@nebutra/custom-ui";
import { useRef, useCallback } from "react";

const ICONS = {
  "🏢": Building2,
  "🤖": Bot,
  "💳": CreditCard,
  "🌍": Globe,
};

/**
 * Stagger pop-in animation variants per DESIGN.md Section 11.4
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * FeatureBento - Asymmetric feature grid using Card compound component
 *
 * @see DESIGN.md Section 5 & Section 10 & Section 11.4
 */
export function FeatureBento() {
  const features = Object.entries(bentoFeatures);
  const sectionRef = useRef<HTMLElement>(null);

  // Dwell hint state
  const handleDwell = useCallback(() => {}, []);
  const { isDwelling } = useScrollDwell(sectionRef, {
    threshold: 1200,
    cooldown: 8000,
    onDwell: handleDwell,
  });

  return (
    <ThemedSection ref={sectionRef} theme="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Dwell Hint */}
        <DwellHint
          show={isDwelling}
          message="Every feature is battle-tested in production."
          position="bottom"
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Production-ready features, out of the box
          </p>
        </motion.div>

        {/* Bento Grid with stagger animation */}
        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map(([key, feature], index) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS] || Building2;
            const isLarge = index === 0 || index === 1;

            return (
              <motion.div
                key={key}
                variants={itemVariants}
                className={cn(isLarge && "lg:col-span-1 lg:row-span-2")}
              >
                <Card
                  variant="gradient"
                  className="group relative h-full overflow-hidden border-border/10 transition-all hover:border-border/20"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-accent)]/5 opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10">
                    <Card.Header>
                      <Card.Icon
                        size="lg"
                        className="bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-accent)]/20"
                      >
                        <Icon className="h-6 w-6 text-[var(--brand-accent)]" />
                      </Card.Icon>
                    </Card.Header>

                    <Card.Body>
                      <Card.Title className="text-xl">
                        {feature.title}
                      </Card.Title>
                      <Card.Description className="mt-2">
                        {feature.description}
                      </Card.Description>

                      {/* Feature list if available */}
                      {"features" in feature && feature.features && (
                        <ul className="mt-4 space-y-2">
                          {feature.features.map((item: string) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-sm text-muted-foreground/80"
                            >
                              <span className="h-1 w-1 rounded-full bg-[var(--brand-accent)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card.Body>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--brand-primary)]/10 to-transparent blur-2xl" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </ThemedSection>
  );
}

FeatureBento.displayName = "FeatureBento";
