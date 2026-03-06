import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const proxy = createMiddleware(routing);

export default proxy;

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)", "/"],
};
