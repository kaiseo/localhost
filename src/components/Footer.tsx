"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Instagram, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const tw = useTranslations('Waitlist');
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("error");
            return;
        }

        setStatus("loading");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setEmail("");
    };

    return (
        <footer className="py-24 px-6 bg-[#121212] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Final CTA Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mb-12"
                >
                    {t('cta')}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20 text-left">
                    {/* Option A: Waitlist */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="premium-card p-8 rounded-2xl h-full flex flex-col justify-between"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-[#EDEDED] mb-3">{tw('title')}</h4>
                            <p className="text-[#A1A1A1] text-sm mb-6">{tw('subtitle')}</p>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-3 text-[#FFB347] font-medium py-3"
                                >
                                    <CheckCircle2 size={20} />
                                    <span>{tw('success')}</span>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="relative w-full">
                                    <div className="relative flex items-center">
                                        <Mail className="absolute left-4 text-[#A1A1A1] group-focus-within:text-[#FFB347] transition-colors pointer-events-none" size={18} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (status === "error") setStatus("idle");
                                            }}
                                            placeholder={tw('placeholder')}
                                            className={`w-full bg-[#1A1A1A] border ${status === "error" ? "border-red-500/50" : "border-white/10"} focus:border-[#FFB347]/50 rounded-xl py-3.5 pl-11 pr-14 outline-none transition-all text-sm text-[#EDEDED] placeholder:text-[#555]`}
                                        />
                                        <button
                                            disabled={status === "loading"}
                                            className="absolute right-1.5 p-2 rounded-lg bg-[#FFB347] text-[#121212] hover:bg-[#FFCC80] transition-all disabled:opacity-50 flex items-center justify-center shrink-0"
                                            title={tw('button')}
                                        >
                                            {status === "loading" ? (
                                                <div className="w-4 h-4 border-2 border-[#121212]/30 border-t-[#121212] rounded-full animate-spin" />
                                            ) : (
                                                <ArrowRight size={18} />
                                            )}
                                        </button>
                                    </div>
                                    {status === "error" && (
                                        <p className="text-red-400 text-xs mt-2 absolute left-1">{tw('error')}</p>
                                    )}
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Option B: Discord */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="premium-card p-8 rounded-2xl h-full flex flex-col justify-between border-[#FFB347]/10"
                    >
                        <div className="mb-6">
                            <h4 className="text-xl font-bold text-[#EDEDED] mb-3">Join the Community</h4>
                            <p className="text-[#A1A1A1] text-sm leading-relaxed">디스코드에서 실시간으로 빌더들과 소통하고 프로젝트 소식을 가장 빠르게 확인하세요.</p>
                        </div>
                        <Link
                            href="/join"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFB347] text-[#121212] font-bold text-base btn-glow hover:bg-[#FFCC80] transition-all"
                        >
                            {t('button')}
                        </Link>
                    </motion.div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 mb-8">
                    <a
                        href="https://instagram.com/localhost"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#A1A1A1] hover:text-[#FFB347] hover:bg-[#FFB347]/10 transition-all duration-300 border border-white/5"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:hello@localhost.kr"
                        className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#A1A1A1] hover:text-[#FFB347] hover:bg-[#FFB347]/10 transition-all duration-300 border border-white/5"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-[#A1A1A1] text-xs font-mono uppercase tracking-widest opacity-50">
                    {t('copyright')}
                </p>
            </div>
        </footer>
    );
}
