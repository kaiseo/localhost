"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Globe, ShieldCheck, Milestone } from "lucide-react";

export default function Roadmap() {
    const t = useTranslations("Roadmap");

    const phases = [
        { icon: Milestone, color: "#FFB347" },
        { icon: ShieldCheck, color: "#A1A1A1" },
        { icon: Globe, color: "#555" }
    ];

    return (
        <section id="roadmap" className="py-32 px-6 relative bg-[#121212] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-6 tracking-tight"
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#A1A1A1] text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        {t("subtitle")}
                    </motion.p>
                </header>

                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

                    <div className="space-y-16 lg:space-y-32">
                        {[0, 1, 2].map((idx) => {
                            const phase = phases[idx];
                            const isEven = idx % 2 === 0;

                            return (
                                <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="flex-1 w-full lg:w-auto"
                                    >
                                        <div className={`premium-card p-10 rounded-3xl relative group hover:border-[#FFB347]/30 transition-all duration-500 ${isEven ? "lg:mr-16" : "lg:ml-16"}`}>
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="text-[#FFB347] font-mono text-xs tracking-widest uppercase py-1 px-3 bg-[#FFB347]/10 rounded-full">
                                                    {t(`phases.${idx}.id`)}
                                                </span>
                                                <span className="text-[#555] font-mono text-[10px] uppercase">
                                                    {t(`phases.${idx}.status`)}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#EDEDED] mb-4 group-hover:text-[#FFB347] transition-colors line-clamp-1">
                                                {t(`phases.${idx}.title`)}
                                            </h3>
                                            <p className="text-[#A1A1A1] leading-relaxed">
                                                {t(`phases.${idx}.desc`)}
                                            </p>

                                            {/* Decorative Index */}
                                            <span className="absolute -top-10 -right-4 text-9xl font-bold text-white/5 pointer-events-none select-none italic group-hover:text-[#FFB347]/5 transition-colors">
                                                0{idx + 1}
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Central Node */}
                                    <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-[#121212] rounded-full border border-white/10" />
                                        <div className="relative z-10 text-[#FFB347]" style={{ color: idx === 0 ? "#FFB347" : "#555" }}>
                                            <phase.icon size={28} />
                                        </div>
                                        {idx === 0 && (
                                            <div className="absolute inset-0 bg-[#FFB347]/20 rounded-full animate-pulse-glow" />
                                        )}
                                    </div>

                                    {/* Empty Space for alignment (Desktop) */}
                                    <div className="hidden lg:block flex-1" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <div className="inline-block p-1 rounded-full border border-white/5 bg-white/5">
                        <div className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1E1E1E] to-[#121212] border border-white/5 flex items-center gap-4 group hover:border-[#FFB347]/30 transition-all duration-300">
                            <div className="w-2 h-2 rounded-full bg-[#FFB347] animate-ping" />
                            <span className="text-[#A1A1A1] text-sm">Building more bases worldwide...</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-mono text-xs overflow-hidden leading-none break-all p-4">
                {Array(20).fill("LOCAL NOMAD INFRASTRUCTURE NETWORK GENESIS BLOCK PHASE 01 JEUNGPYEONG BASE VILLAGE OS SCALING FUTURE.").join(" ")}
            </div>
        </section>
    );
}
