"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import PixelScene from "./PixelScene";
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');
    const containerRef = useRef<HTMLDivElement>(null);
    const [displayText, setDisplayText] = useState("");
    const fullText = t('title');

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    useEffect(() => {
        let i = 0;
        setDisplayText("");
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 70);
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <section ref={containerRef} className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
            {/* Pixel Art Scene Background (stars, forest, campfire) */}
            <PixelScene />

            <motion.div
                style={{ y: yTranslate, opacity: opacityFade }}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
            >
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 whitespace-pre-line text-[#EDEDED] min-h-[2em]"
                >
                    <span className="sr-only">{fullText}</span>
                    <span aria-hidden="true">
                        {displayText}
                        <span className="inline-block w-0.5 h-10 sm:h-12 lg:h-14 bg-[#FFB347] ml-1 animate-pulse align-middle" />
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg sm:text-xl text-[#A1A1A1] mb-10 max-w-xl mx-auto whitespace-pre-wrap"
                >
                    {t('subtitle')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/join"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFB347] text-[#121212] font-semibold text-lg btn-glow animate-pulse-glow hover:bg-[#FFCC80] transition-colors duration-300"
                    >
                        {t('cta')}
                    </Link>

                    <button
                        onClick={() => {
                            const storySection = document.getElementById('story');
                            storySection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-[#EDEDED] font-medium text-lg hover:bg-white/5 transition-all duration-300"
                    >
                        {t('explore')}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="translate-y-px"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
