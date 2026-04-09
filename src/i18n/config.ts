export type Locale = (typeof locales)[number];

export const locales = ['ar', 'en', 'bn', "ja", "fr", "sw"] as const;
export const defaultLocale: Locale = 'en';
