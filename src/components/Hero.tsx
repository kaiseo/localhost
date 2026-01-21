"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
                    {displayText}
                    <span className="inline-block w-0.5 h-10 sm:h-12 lg:h-14 bg-[#FFB347] ml-1 animate-pulse align-middle" />
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

                {/* CTA Button */}
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    href="https://discord.gg/HYB8uHAn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFB347] text-[#121212] font-semibold text-lg btn-glow animate-pulse-glow hover:bg-[#FFCC80] transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    {t('cta')}
                </motion.a>
            </motion.div>
        </section>
    );
}
