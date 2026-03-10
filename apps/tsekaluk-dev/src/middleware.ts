import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except static files, api routes, and special Next.js paths
    "/((?!api|_next|_vercel|og|rss\\.xml|sitemap\\.xml|robots\\.txt|.*\\..*).*)",
  ],
};
