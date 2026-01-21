import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Story from "@/components/Story";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import TargetAudience from "@/components/TargetAudience";
import Programs from "@/components/Programs";
import FAQ from "@/components/FAQ";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <TargetAudience />
                <Features />
                <Programs />
                <Story />
                <Vision />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
