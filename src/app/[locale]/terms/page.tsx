"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function TermsPage() {
    const t = useTranslations('Footer');

    return (
        <div className="min-h-screen bg-[#121212] text-[#EDEDED] py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-[#A1A1A1] hover:text-[#FFB347] transition-colors mb-12">
                    <ArrowLeft size={18} />
                    <span>Back to Village</span>
                </Link>

                <h1 className="text-4xl font-bold mb-12">{t('terms')}</h1>

                <div className="space-y-8 text-[#A1A1A1] leading-relaxed">
                    <section>
                        <h2 className="text-[#EDEDED] text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                        <p>By using this website and joining our community, you agree to comply with the terms and conditions outlined here.</p>
                    </section>

                    <section>
                        <h2 className="text-[#EDEDED] text-xl font-semibold mb-4">2. Community Conduct</h2>
                        <p>Localhost is a space for builders. We expect all members to treat each other with respect and maintain a focus on constructive collaboration.</p>
                    </section>

                    <section>
                        <h2 className="text-[#EDEDED] text-xl font-semibold mb-4">3. Modifications</h2>
                        <p>We reserve the right to modify these terms as the Localhost infrastructure and village project evolve.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
