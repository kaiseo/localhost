"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/routing";
import { MessageSquare, Instagram, Mail, ArrowLeft, ExternalLink } from "lucide-react";
import NoiseTexture from "@/components/NoiseTexture";
import MouseSpotlight from "@/components/MouseSpotlight";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function JoinPage() {
    const t = useTranslations('Join');

    const options = [
        {
            id: 'discord',
            icon: MessageSquare,
            title: t('discord.title'),
            desc: t('discord.desc'),
            label: t('discord.label'),
            href: "https://discord.gg/HYB8uHAn",
            color: "#5865F2",
            external: true
        },
        {
            id: 'instagram',
            icon: Instagram,
            title: t('instagram.title'),
            desc: t('instagram.desc'),
            label: t('instagram.label'),
            href: "https://instagram.com/localhost",
            color: "#E4405F",
            external: true
        },
        {
            id: 'email',
            icon: Mail,
            title: t('email.title'),
            desc: t('email.desc'),
            label: t('email.label'),
            href: "mailto:hello@localhost.kr",
            color: "#FFB347",
            external: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-[#EDEDED] flex flex-col items-center justify-center px-6 py-20 relative">
            <NoiseTexture />
            <MouseSpotlight />

            <div className="max-w-4xl w-full relative z-10">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-[#A1A1A1] hover:text-[#FFB347] transition-colors group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{t('back')}</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('title')}</h1>
                    <p className="text-[#A1A1A1] text-lg">{t('subtitle')}</p>
                </motion.div>

                {/* Options Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {options.map((option) => (
                        <motion.a
                            key={option.id}
                            href={option.href}
                            target={option.external ? "_blank" : undefined}
                            rel={option.external ? "noopener noreferrer" : undefined}
                            variants={itemVariants}
                            className="premium-card p-8 rounded-3xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-300"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                                style={{ backgroundColor: `${option.color}10`, color: option.color }}
                            >
                                <option.icon size={32} />
                            </div>

                            <h2 className="text-xl font-bold mb-3 group-hover:text-[#FFB347] transition-colors">
                                {option.title}
                            </h2>
                            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8 flex-grow">
                                {option.desc}
                            </p>

                            <div className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-[#FFB347] group-hover:text-[#121212] group-hover:border-transparent transition-all duration-300">
                                {option.label}
                                {option.external && <ExternalLink size={14} />}
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Background Decorative Glows */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#FFB347]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#FFB347]/3 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}
