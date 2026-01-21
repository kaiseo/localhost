"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function Story() {
    const t = useTranslations('Story');
    return (
        <section className="py-24 px-6 bg-[#121212] relative overflow-hidden">
            {/* Gradient mesh background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB347]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FFB347]/3 rounded-full blur-3xl" />

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Section Label */}
                    <p className="text-[#FFB347] text-sm font-medium tracking-widest uppercase mb-4">
                        {t('label')}
                    </p>

                    {/* Main Quote */}
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#EDEDED] leading-relaxed mb-8">
                        {t.rich('quote', {
                            br: () => <br />,
                            gray: (chunks) => <span className="text-[#A1A1A1]">{chunks}</span>,
                            orange: (chunks) => <span className="text-[#FFB347]">{chunks}</span>
                        })}
                    </blockquote>

                    {/* Founder Attribution */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#FFB347] font-bold">
                            L
                        </div>
                        <div className="text-left">
                            <p className="text-[#EDEDED] font-medium">{t('founder')}</p>
                            <p className="text-[#A1A1A1] text-sm">{t('date')}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
