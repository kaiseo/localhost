"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Trees, Zap, MapPin } from "lucide-react";

export default function LocationFeature() {
    const t = useTranslations("Location");

    const icons = [Trees, Zap, MapPin];

    return (
        <section id="location" className="py-32 px-6 relative overflow-hidden bg-[#121212]">
            {/* Background Glows */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FFB347]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative group"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden premium-card border border-white/5 relative">
                            {/* Visual Placeholder for Jeungpyeong Nature */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] to-[#121212] flex items-center justify-center">
                                <span className="text-white/10 font-mono text-8xl select-none group-hover:scale-110 transition-transform duration-700">BASE #1</span>
                            </div>

                            {/* Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-8 left-8 right-8 p-6 bg-[#121212]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-[#A1A1A1] text-[10px] uppercase tracking-widest font-mono">Current Status</span>
                                        <span className="text-[#FFB347] font-bold">Strategic Planning</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[#A1A1A1] text-[10px] uppercase tracking-widest font-mono">Location Status</span>
                                        <span className="text-[#EDEDED] font-bold">Deep Woods, KR (Confidential)</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                                    <span className="text-[#555] font-mono text-[10px] tracking-widest">36.XX° N, 127.XX° E</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 border border-white/5 rounded-full pointer-events-none" />
                        <div className="absolute -bottom-12 -left-12 w-96 h-96 border border-[#FFB347]/5 rounded-full pointer-events-none" />
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-12">
                        <header>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#FFB347] font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
                            >
                                {t("tag")}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-6 leading-tight tracking-tight"
                            >
                                {t("title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-[#A1A1A1] text-lg leading-relaxed max-w-lg"
                            >
                                {t("subtitle")}
                            </motion.p>
                        </header>

                        <div className="space-y-6">
                            {[0, 1, 2].map((idx) => {
                                const Icon = icons[idx];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        className="premium-card p-6 rounded-2xl flex gap-6 group hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-[#FFB347]/5 flex items-center justify-center text-[#FFB347] group-hover:bg-[#FFB347]/10 transition-colors">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-[#EDEDED] font-bold mb-1 group-hover:text-[#FFB347] transition-colors">
                                                {t(`features.${idx}.title`)}
                                            </h3>
                                            <p className="text-[#A1A1A1] text-sm leading-relaxed">
                                                {t(`features.${idx}.desc`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
