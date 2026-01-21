"use client";

import { motion } from "framer-motion";
import { Headphones, TrendingUp, Home } from "lucide-react";
import { useTranslations } from 'next-intl';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Features() {
    const t = useTranslations('Features');

    const features = [
        {
            icon: Headphones,
            title: t('focus.title'),
            description: t('focus.desc'),
        },
        {
            icon: TrendingUp,
            title: t('insight.title'),
            description: t('insight.desc'),
        },
        {
            icon: Home,
            title: t('basecamp.title'),
            description: t('basecamp.desc'),
        },
    ];

    return (
        <section className="py-24 px-6 bg-[#121212] relative overflow-hidden">
            {/* Gradient mesh background */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFB347]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FFB347]/3 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mb-4">
                        Why <span className="text-[#FFB347]">Localhost</span>?
                    </h2>
                    <p className="text-[#A1A1A1] max-w-md mx-auto">
                        화면 속 모닥불처럼, 따뜻한 집중의 공간
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="premium-card rounded-2xl p-8"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-[#FFB347]/10 flex items-center justify-center mb-6">
                                <feature.icon className="w-7 h-7 text-[#FFB347]" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[#EDEDED] mb-4">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#A1A1A1] leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
