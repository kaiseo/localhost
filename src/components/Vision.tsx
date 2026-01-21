"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Vision() {
    const t = useTranslations('Vision');
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="py-24 px-6 bg-[#1E1E1E]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    style={{ scale, opacity }}
                    className="text-center"
                >
                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mb-6">
                        {t('title')} <span className="text-[#A1A1A1] font-normal">{t('loading')}</span>
                    </h2>

                    {/* Visual - Dual Image Crossfade */}
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative mx-auto mb-8 rounded-2xl overflow-hidden aspect-video max-w-2xl cursor-pointer group border-2 border-white/5 shadow-2xl"
                    >
                        {/* Default Image (Always visible, behind) */}
                        <Image
                            src="/images/vision-default.png"
                            alt="Village Project Default"
                            fill
                            className="object-cover"
                        />

                        {/* Hover Image (Fades in on top) */}
                        <Image
                            src="/images/vision-hover.png"
                            alt="Village Project Construction"
                            fill
                            className={`object-cover transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
                        />

                        {/* Default Text Overlay */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                            <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                                <p className="text-[#EDEDED] font-medium">{t('defaultText')}</p>
                            </div>
                        </div>

                        {/* Hover Overlay (Subtle Gradient) */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

                        {/* Coming Soon Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 bg-[#FFB347] text-[#121212] text-sm font-medium rounded-full z-10 shadow-lg">
                            {t('badge')}
                        </div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: t.raw('description') }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
