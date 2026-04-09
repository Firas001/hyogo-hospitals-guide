'use client';

import { useTransition } from 'react';
import { Locale, locales } from '@/i18n/config';
import { setUserLocale } from '@/lib/locale';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';

const languageNames: Record<Locale, string> = {
    ar: 'العربية',
    en: 'English',
    bn: 'বাংলা',
    ja: '日本語',
    fr: 'Français',
    sw: 'Kiswahili'
};

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const currentLocale = useLocale() as Locale;

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    };

    return (
        <div className="relative flex items-center bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-full px-3 py-1.5 backdrop-blur-md border border-white/20">
            <Globe className="w-4 h-4 text-white me-2" />
            <select
                value={currentLocale}
                onChange={handleLanguageChange}
                disabled={isPending}
                className="appearance-none bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer pe-4"
            >
                {locales.map((locale) => (
                    <option key={locale} value={locale} className="text-gray-900">
                        {languageNames[locale] || locale}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 inset-e-2 flex items-center">
                <svg className="h-4 w-4 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
