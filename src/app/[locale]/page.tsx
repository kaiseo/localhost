import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import FeatureSection from "@/components/Features";
import Programs from "@/components/Programs";
import Story from "@/components/Story";
import Vision from "@/components/Vision";
import LocationFeature from "@/components/LocationFeature";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";

export default function Home() {
    return (
        <>
            <Hero />
            <TargetAudience />
            <FeatureSection />
            <Programs />
            <Story />
            <Vision />
            <LocationFeature />
            <Roadmap />
            <FAQ />
        </>
    );
}
