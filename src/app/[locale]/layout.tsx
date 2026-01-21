import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import SoundControl from "@/components/SoundControl";
import BackToTop from "@/components/BackToTop";
import NoiseTexture from "@/components/NoiseTexture";
import MouseSpotlight from "@/components/MouseSpotlight";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const pretendard = localFont({
    src: "../fonts/PretendardVariable.woff2",
    display: "swap",
    variable: "--font-pretendard",
});

export const metadata: Metadata = {
    title: "Localhost | Digital Cabin in the Woods",
    description: "Disconnect Noise, Connect Localhost. 몰입을 위한 디지털 오두막.",
    openGraph: {
        title: "Localhost",
        description: "새벽 2시의 차분한 라운지 바. 개발자, 노마드, 빌더를 위한 몰입의 OS.",
        url: "https://localhost.kr",
        siteName: "Localhost",
        locale: "ko_KR",
        type: "website",
    },
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${pretendard.variable} font-sans antialiased bg-[#121212] text-[#EDEDED]`}>
                <NextIntlClientProvider messages={messages}>
                    <NoiseTexture />
                    <MouseSpotlight />
                    <SoundControl />
                    <BackToTop />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
