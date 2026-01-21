"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslations } from 'next-intl';
import NoiseTexture from "@/components/NoiseTexture";
import MouseSpotlight from "@/components/MouseSpotlight";

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center relative overflow-hidden px-6">
            <NoiseTexture />
            <MouseSpotlight />

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#FFB347] font-mono text-xl mb-4 block tracking-widest opacity-80">404</span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#EDEDED] mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-[#A1A1A1] text-lg max-w-md mx-auto mb-10 leading-relaxed">
                        {t('description')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFB347] text-[#121212] font-semibold text-lg btn-glow hover:bg-[#FFCC80] transition-all"
                    >
                        <Home size={20} />
                        {t('button')}
                    </Link>
                </motion.div>
            </div>

            {/* Decorative campfire glow in the distance */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFB347]/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
}
