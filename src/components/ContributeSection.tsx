'use client';

import { useTranslations } from 'next-intl';
import { PlusCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContributeSection() {
    const t = useTranslations('common');

    return (
        <section className="relative my-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Background decoration */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 opacity-[0.03] pointer-events-none" />

            <div className="relative rounded-3xl border border-blue-100 bg-white shadow-lg overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-linear-to-r from-blue-500 to-indigo-600" />

                <div className="px-8 py-10 sm:px-14 sm:py-12 flex flex-col sm:flex-row items-center gap-8">
                    {/* Icon */}
                    <div className="shrink-0 w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-200">
                        <MapPin className="w-9 h-9 text-white" strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-center sm:text-start">
                        <h2 className="text-2xl font-bold text-slate-800 leading-snug">
                            {t('contributeTitle')}
                        </h2>
                        <p className="mt-2 text-slate-500 text-base leading-relaxed max-w-xl">
                            {t('contributeDescription')}
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="shrink-0">
                        <Link
                            target='_blank'
                            href="https://forms.gle/tithDgZgMFAbeYGs5"
                            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-semibold text-base
                         bg-linear-to-r from-blue-600 to-indigo-600
                         shadow-md shadow-blue-300/40
                         hover:shadow-lg hover:shadow-blue-400/40
                         hover:scale-[1.03]
                         active:scale-[0.98]
                         transition-all duration-200 ease-out
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <PlusCircle className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
                            {t('contributeButton')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
