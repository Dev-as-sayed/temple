import { ArrowRight } from "lucide-react";
import Image from "next/image";
import section_bg from "@/assets/bg/hero-bg.jpg";
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={section_bg}
          alt="Chinese Temple Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          The Legacy of Chinese
          <br />
          <span className="text-primary-300">Temple Architecture</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-200 max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover the extraordinary blend of history, philosophy, and
          engineering that defines centuries of architectural mastery across
          Chinese dynasties.
        </p>
        <button className="flex flex-row justify-center mx-auto bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-6">
          Begin Your Journey
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
