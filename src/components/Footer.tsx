import { Heart, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('common');
    return (
        <footer className="bg-white border-t border-gray-100 mt-auto py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Main info */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600">
                            {t('footerTitle')}
                        </h3>
                        <p className="text-gray-600 flex items-center justify-center gap-2">
                            {t('volunteeringProject')} <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        </p>
                    </div>

                    {/* Additional details */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500">
                        <div className="flex items-center justify-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full">
                            <span className="font-medium">{t('developer')}</span>
                            <span className="text-gray-900 font-semibold">Firas Aldweni</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full">
                            <span className="font-medium">{t('dataSource')}</span>
                            <a href="https://www.jica.go.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors">
                                JICA <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/* Open source */}
                    <div className="pt-6 border-t border-gray-100 w-full max-w-md flex justify-center">
                        <a
                            href="https://github.com/firasaldeeni/hyogo-hospitals-guide"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span>{t('openSourceProject')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
