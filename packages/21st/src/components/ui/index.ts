/**
 * @nebutra/21st UI Components
 *
 * shadcn/ui compatible components built with Radix UI + Tailwind CSS
 * These components follow 21st.dev patterns and can be extended with
 * components from the 21st.dev marketplace.
 */

// Button
export { Button, buttonVariants, type ButtonProps } from "./button.js";

// Card
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card.js";

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./dialog.js";

// Input
export { Input, type InputProps } from "./input.js";

// Badge
export { Badge, badgeVariants, type BadgeProps } from "./badge.js";

// Pricing Card
export {
  Card as PricingCardCard,
  Header as PricingCardHeader,
  Description as PricingCardDescription,
  Plan as PricingCardPlan,
  PlanName as PricingCardPlanName,
  Badge as PricingCardBadge,
  Price as PricingCardPrice,
  MainPrice as PricingCardMainPrice,
  Period as PricingCardPeriod,
  OriginalPrice as PricingCardOriginalPrice,
  Body as PricingCardBody,
  List as PricingCardList,
  ListItem as PricingCardListItem,
  Separator as PricingCardSeparator,
} from "./pricing-card.js";

// Re-export pricing card as namespace for dot-notation usage
import * as PricingCard from "./pricing-card.js";
export { PricingCard };

// AnimatedHikeCard
export {
  AnimatedHikeCard,
  type AnimatedHikeCardProps,
  type Stat as AnimatedHikeCardStat,
} from "./animated-hike-card.js";
