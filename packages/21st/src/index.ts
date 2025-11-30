/**
 * @nebutra/21st
 *
 * 21st.dev compatible UI components for Nebutra
 *
 * This package provides shadcn/ui style components built with:
 * - Radix UI primitives for accessibility
 * - Tailwind CSS for styling
 * - CSS variables for theming
 * - CVA (Class Variance Authority) for variants
 *
 * @example
 * ```tsx
 * // Import components
 * import { Button, Card, Dialog } from "@nebutra/21st";
 *
 * // Import utilities
 * import { cn } from "@nebutra/21st/lib/utils";
 *
 * // Import styles (in your app's globals.css or layout)
 * import "@nebutra/21st/styles/globals.css";
 *
 * function App() {
 *   return (
 *     <Card>
 *       <CardHeader>
 *         <CardTitle>Welcome</CardTitle>
 *       </CardHeader>
 *       <CardContent>
 *         <Button variant="gradient">Get Started</Button>
 *       </CardContent>
 *     </Card>
 *   );
 * }
 * ```
 */

// Utility functions
export { cn, Slot } from "./lib/utils.js";

// UI Components
export {
  // Button
  Button,
  buttonVariants,
  type ButtonProps,
  // Card
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  // Dialog
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
  // Input
  Input,
  type InputProps,
  // Badge
  Badge,
  badgeVariants,
  type BadgeProps,
} from "./components/ui/index.js";

// Hooks
export { useMediaQuery } from "./components/hooks/index.js";

// Design tokens (for programmatic access)
export {
  nebutraColors,
  nebutraSpacing,
  nebutraBorderRadius,
  nebutraShadows,
  nebutraTypography,
  nebutraAnimations,
  nebutraPreset,
  type NebutraPreset,
} from "./tailwind.preset.js";
