"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    const t = useTranslations('Footer');

    return (
        <div className="min-h-screen bg-[#121212] text-[#EDEDED] py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-[#A1A1A1] hover:text-[#FFB347] transition-colors mb-12">
                    <ArrowLeft size={18} />
                    <span>Back to Village</span>
                </Link>

                <h1 className="text-4xl font-bold mb-12">{t('privacy')}</h1>

                <div className="space-y-8 text-[#A1A1A1] leading-relaxed">
                    <section>
                        <h2 className="text-[#EDEDED] text-xl font-semibold mb-4">1. Information Collection</h2>
                        <p>We collect your email address when you sign up for our waitlist to provide project updates and important community news.</p>
                    </section>

                    <section>
                        <h2 className="text-[#EDEDED] text-xl font-semibold mb-4">2. Use of Information</h2>
                        <p>Your information is used solely for the purpose of communicating about the Localhost project. We do not sell or share your personal data with third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-[#EDEDED] text-xl font-semibold mb-4">3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your email address and personal information.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
