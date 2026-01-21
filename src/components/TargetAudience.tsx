"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function TargetAudience() {
    const t = useTranslations('TargetAudience');
    const checkList = t.raw('list') as string[];

    return (
        <section className="py-24 px-6 bg-[#121212]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-[#FFB347] text-sm font-medium tracking-widest uppercase mb-4">
                        {t('label')}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] leading-tight" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {checkList.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 bg-[#1E1E1E] p-6 rounded-xl border border-white/5 hover:border-[#FFB347]/30 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#FFB347]/10 flex items-center justify-center text-[#FFB347] group-hover:bg-[#FFB347] group-hover:text-[#121212] transition-colors">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <p className="text-[#EDEDED] font-medium text-lg leading-relaxed">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

