'use client';

import LanguageSwitcher from './LanguageSwitcher';
import { HeartPulse } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('common');
    return (
        <header className="sticky top-0 z-50 w-full bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                            <HeartPulse className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl tracking-tight font-bold text-white hidden sm:block">
                            {t('headerTitle')}
                        </span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}
