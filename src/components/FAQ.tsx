"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function FAQ() {
    const t = useTranslations('FAQ');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: t('q1'), a: t('a1') },
        { q: t('q2'), a: t('a2') },
        { q: t('q3'), a: t('a3') }
    ];

    return (
        <section className="py-24 px-6 bg-[#121212]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-[#EDEDED] mb-4">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1E1E1E] rounded-xl border border-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#252525] transition-colors"
                            >
                                <span className="text-[#EDEDED] font-medium text-lg">{faq.q}</span>
                                <ChevronDown
                                    className={`text-[#A1A1A1] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0 text-[#A1A1A1] leading-relaxed border-t border-white/5 mx-6 mt-2">
                                    {faq.a}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

