"use client";

import { motion } from "framer-motion";
import { Moon, Flame, Laptop } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Programs() {
    const t = useTranslations('Programs');

    const programs = [
        {
            icon: Moon,
            title: t('deepwork.title'),
            description: t('deepwork.desc'),
            time: "Thu 22:00 ~"
        },
        {
            icon: Flame,
            title: t('bonfire.title'),
            description: t('bonfire.desc'),
            time: "Monthly"
        },
        {
            icon: Laptop,
            title: t('demo.title'),
            description: t('demo.desc'),
            time: "Quarterly"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#1E1E1E]">
            <div className="max-w-6xl mx-auto">
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
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED]" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="premium-card p-8 rounded-2xl group"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#A1A1A1] group-hover:text-[#FFB347] group-hover:scale-110 transition-all mb-6">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#EDEDED] mb-3 group-hover:text-[#FFB347] transition-colors">{program.title}</h3>
                                <p className="text-[#A1A1A1] leading-relaxed mb-6 h-12">
                                    {program.description}
                                </p>
                                <div className="inline-block px-3 py-1 bg-[#1E1E1E] text-[#FFB347] text-xs font-bold rounded-full border border-white/5">
                                    {program.time}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
