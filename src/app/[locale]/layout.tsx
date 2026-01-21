import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import SoundControl from "@/components/SoundControl";
import BackToTop from "@/components/BackToTop";
import NoiseTexture from "@/components/NoiseTexture";
import MouseSpotlight from "@/components/MouseSpotlight";
import CustomCursor from "@/components/CustomCursor";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pretendard = localFont({
    src: "../fonts/PretendardVariable.woff2",
    display: "swap",
    variable: "--font-pretendard",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    const baseUrl = "https://localhost.kr";
    const localizedUrl = `${baseUrl}/${locale}`;

    return {
        title: t('title'),
        description: t('description'),
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: localizedUrl,
            languages: {
                'ko-KR': '/ko',
                'en-US': '/en',
            },
        },
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            url: localizedUrl,
            siteName: "Localhost",
            locale: locale === 'ko' ? 'ko_KR' : 'en_US',
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: t('ogTitle'),
            description: t('ogDescription'),
        },
    };
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    const messages = await getMessages();

    const baseUrl = "https://localhost.kr";
    const localizedUrl = `${baseUrl}/${locale}`;

    return (
        <html lang={locale}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Localhost",
                            "url": localizedUrl,
                            "description": t('description'),
                            "publisher": {
                                "@type": "Organization",
                                "name": "Localhost"
                            }
                        })
                    }}
                />
            </head>
            <body className={`${pretendard.variable} font-sans antialiased bg-[#121212] text-[#EDEDED]`}>
                <NextIntlClientProvider messages={messages}>
                    <CustomCursor />
                    <NoiseTexture />
                    <MouseSpotlight />
                    <SoundControl />
                    <BackToTop />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
