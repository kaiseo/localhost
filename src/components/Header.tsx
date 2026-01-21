"use client";

import { Link, usePathname } from '@/i18n/routing';
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const pathname = usePathname();

    const nextLocale = locale === 'ko' ? 'en' : 'ko';
    // Label could be 'EN' when current is 'ko', and '한국어' or 'KO' when current is 'en'
    const label = locale === 'ko' ? 'EN' : 'KO';

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#121212]/80 border-b border-white/5"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-xl font-bold text-[#EDEDED] group-hover:text-[#FFB347] transition-colors">
                        Local
                    </span>
                    <span className="text-xl font-bold text-[#FFB347]">host</span>
                </Link>

                <div className="flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Link
                            href={pathname}
                            locale="ko"
                            className={`transition-colors ${locale === 'ko' ? 'text-[#FFB347]' : 'text-[#A1A1A1] hover:text-[#EDEDED]'}`}
                        >
                            KO
                        </Link>
                        <span className="text-white/10">|</span>
                        <Link
                            href={pathname}
                            locale="en"
                            className={`transition-colors ${locale === 'en' ? 'text-[#FFB347]' : 'text-[#A1A1A1] hover:text-[#EDEDED]'}`}
                        >
                            EN
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/join"
                        className="px-5 py-2.5 rounded-full border border-[#FFB347]/50 text-[#FFB347] font-medium hover:bg-[#FFB347] hover:text-[#121212] btn-glow transition-all duration-300"
                    >
                        {t('join')}
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
