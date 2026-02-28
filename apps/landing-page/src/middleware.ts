import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all routes except _next internals, api routes, and static files (anything with a dot)
  matcher: ["/((?!_next|api|.*\\..*).*)", "/"],
};
