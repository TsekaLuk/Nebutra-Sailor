/**
 * Navigation Components
 *
 * Components for narrative UX and scroll-based navigation.
 * Implements the story progression system from DESIGN.md Section 11.2
 */

export {
  ScrollSpyProvider,
  useScrollSpy,
  useRegisterSection,
  type SectionInfo,
  type ScrollSpyContextValue,
  type ScrollSpyProviderProps,
} from "./ScrollSpyProvider";

export { StoryProgress, type StoryProgressProps } from "./StoryProgress";
