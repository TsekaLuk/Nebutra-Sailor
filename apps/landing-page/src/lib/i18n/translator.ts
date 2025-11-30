import { Locale, defaultLocale } from "./locales";

// Static translations (fallback when AI translation unavailable)
const staticTranslations: Record<Locale, Record<string, string>> = {
  en: {
    "hero.title": "Build Your Next SaaS Platform",
    "hero.subtitle": "Enterprise-grade architecture for AI-native applications",
    "hero.cta": "Get Started",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.blog": "Blog",
  },
  zh: {
    "hero.title": "构建您的下一个 SaaS 平台",
    "hero.subtitle": "企业级 AI 原生应用架构",
    "hero.cta": "立即开始",
    "nav.features": "功能",
    "nav.pricing": "定价",
    "nav.about": "关于",
    "nav.blog": "博客",
  },
  ja: {
    "hero.title": "次世代SaaSプラットフォームを構築",
    "hero.subtitle": "AIネイティブアプリのためのエンタープライズアーキテクチャ",
    "hero.cta": "始める",
    "nav.features": "機能",
    "nav.pricing": "料金",
    "nav.about": "概要",
    "nav.blog": "ブログ",
  },
  ko: {
    "hero.title": "차세대 SaaS 플랫폼 구축",
    "hero.subtitle": "AI 네이티브 애플리케이션을 위한 엔터프라이즈 아키텍처",
    "hero.cta": "시작하기",
    "nav.features": "기능",
    "nav.pricing": "가격",
    "nav.about": "소개",
    "nav.blog": "블로그",
  },
  es: {
    "hero.title": "Construye tu próxima plataforma SaaS",
    "hero.subtitle": "Arquitectura empresarial para aplicaciones nativas de IA",
    "hero.cta": "Comenzar",
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.about": "Acerca de",
    "nav.blog": "Blog",
  },
  fr: {
    "hero.title": "Construisez votre prochaine plateforme SaaS",
    "hero.subtitle": "Architecture entreprise pour applications IA natives",
    "hero.cta": "Commencer",
    "nav.features": "Fonctionnalités",
    "nav.pricing": "Tarifs",
    "nav.about": "À propos",
    "nav.blog": "Blog",
  },
  de: {
    "hero.title": "Bauen Sie Ihre nächste SaaS-Plattform",
    "hero.subtitle": "Enterprise-Architektur für KI-native Anwendungen",
    "hero.cta": "Loslegen",
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.about": "Über uns",
    "nav.blog": "Blog",
  },
};

/**
 * Get translation for a key
 * Falls back to English if translation not found
 */
export function t(key: string, locale: Locale = defaultLocale): string {
  return (
    staticTranslations[locale]?.[key] ||
    staticTranslations[defaultLocale][key] ||
    key
  );
}

/**
 * Get all translations for a locale
 */
export function getTranslations(locale: Locale): Record<string, string> {
  return staticTranslations[locale] || staticTranslations[defaultLocale];
}

/**
 * AI-based translation (calls api-gateway)
 * TODO: Implement when AI service is available
 */
export async function translateWithAI(
  text: string,
  targetLocale: Locale,
  sourceLocale: Locale = defaultLocale
): Promise<string> {
  // Placeholder: In production, this calls api-gateway/ai/translate
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!apiUrl) {
    console.warn("API_URL not configured, using static translation");
    return text;
  }

  try {
    const response = await fetch(`${apiUrl}/ai/translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        source: sourceLocale,
        target: targetLocale,
      }),
    });

    if (!response.ok) {
      throw new Error("Translation API error");
    }

    const data = await response.json();
    return data.translatedText || text;
  } catch (error) {
    console.error("AI translation failed:", error);
    return text;
  }
}
