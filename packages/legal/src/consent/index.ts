export {
  // Visitor ID
  generateVisitorId,
  getVisitorId,
  // Cookie consent
  defaultCookiePreferences,
  getCookieConsent,
  saveCookieConsent,
  acceptAllCookies,
  rejectAllCookies,
  hasCookieConsent,
  isCookieCategoryAllowed,
  getCookieConsentExpiry,
  // Document consent
  getDocumentConsents,
  cacheDocumentConsent,
  hasDocumentConsentCached,
  // API client
  configureConsentApi,
  recordDocumentConsent,
  getConsentStatus,
  recordCookieConsent,
  // GTM integration
  updateGTMConsent,
  initializeGTMConsentMode,
} from "./service";

export type { ConsentApiConfig } from "./service";
