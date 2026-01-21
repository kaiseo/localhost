"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Waitlist() {
    const t = useTranslations('Waitlist');
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
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="premium-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#FFB347]/5 to-transparent pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center py-8"
                            >
                                <div className="w-20 h-20 rounded-full bg-[#FFB347]/10 flex items-center justify-center text-[#FFB347] mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#EDEDED] mb-2">{t('success')}</h3>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] mb-4">
                                    {t('title')}
                                </h2>
                                <p className="text-[#A1A1A1] mb-10 max-w-md mx-auto">
                                    {t('subtitle')}
                                </p>

                                <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] group-focus-within:text-[#FFB347] transition-colors" size={20} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (status === "error") setStatus("idle");
                                            }}
                                            placeholder={t('placeholder')}
                                            className={`w-full bg-[#121212]/50 border-2 ${status === "error" ? "border-red-500/50" : "border-white/5"} focus:border-[#FFB347]/50 rounded-2xl py-4 pl-12 pr-32 outline-none transition-all text-[#EDEDED] placeholder:text-[#555]`}
                                        />
                                        <button
                                            disabled={status === "loading"}
                                            className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-[#FFB347] text-[#121212] font-bold hover:bg-[#FFCC80] transition-all flex items-center gap-2 group/btn disabled:opacity-50"
                                        >
                                            {status === "loading" ? (
                                                <div className="w-5 h-5 border-2 border-[#121212]/30 border-t-[#121212] rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <span className="hidden sm:inline">{t('button')}</span>
                                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {status === "error" && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-3 text-left pl-2"
                                        >
                                            {t('error')}
                                        </motion.p>
                                    )}
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
