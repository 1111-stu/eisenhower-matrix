import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TranslationProvider } from "@/components/TranslationProvider";
import {
  DEFAULT_LOCALE,
  getCommonMessages,
  isSupportedLocale,
  type Locale,
} from "@/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

const resolveLocale = (rawLocale: string): Locale => {
  return isSupportedLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = getCommonMessages(locale);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const basePath =
    locale === "en" ? "/en" : locale === "zh" ? "/zh" : "/cn";
  const canonicalUrl = siteUrl ? `${siteUrl}${basePath}` : basePath;

  const title =
    messages.seo?.title ?? "Eisenhower Matrix – Task Prioritization Tool";
  const description =
    messages.seo?.description ??
    "Use the Eisenhower Matrix to prioritize tasks by urgency and importance.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: siteUrl ? `${siteUrl}/en` : "/en",
        "zh-Hant": siteUrl ? `${siteUrl}/zh` : "/zh",
        "zh-Hans": siteUrl ? `${siteUrl}/cn` : "/cn",
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale:
        locale === "en"
          ? "en_US"
          : locale === "zh"
          ? "zh_Hant"
          : "zh_Hans",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    other: {
      "application-name": messages.appName ?? "Eisenhower Matrix",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = getCommonMessages(locale);

  return (
    <html
      lang={
        locale === "en" ? "en" : locale === "zh" ? "zh-Hant" : "zh-Hans"
      }
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationProvider locale={locale} messages={messages}>
          {children}
        </TranslationProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}


