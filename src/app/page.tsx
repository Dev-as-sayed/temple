import FeaturedTempleSection from "@/components/Section/FeaturedTempleSection";
import Hero from "@/components/Section/Hero";
import IntroductionSection from "@/components/Section/IntroductionSection";
import TimelineSection from "@/components/Section/TimelineSection";

const page = () => {
  return (
    <div>
      <Hero />
      <IntroductionSection />
      <TimelineSection />
      <FeaturedTempleSection />
    </div>
  );
};

export default page;
