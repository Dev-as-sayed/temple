import Image from "next/image";
import section_bg from "@/assets/templ/introduction.png";

const IntroductionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-neutral-50 via-white to-secondary-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image with Cultural Border */}
          <div className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border-2 border-accent-gold/20">
            <Image
              src={section_bg}
              alt="Ancient Chinese Temple Architecture"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-500/40"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary-500/40"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary-500/40"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-500/40"></div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-sm font-medium text-primary-700 tracking-wide">
                ARCHITECTURAL HERITAGE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              <span className="text-neutral-900">Where Philosophy</span>
              <br />
              <span className="text-gradient-vermilion">Meets Engineering</span>
            </h2>

            {/* Decorative Separator */}
            <div className="flex justify-center lg:justify-start items-center gap-4">
              <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
              <div className="w-6 h-1 bg-secondary-500 rounded-full"></div>
              <div className="w-3 h-1 bg-accent-jade rounded-full"></div>
            </div>

            {/* Main Description */}
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed md:leading-loose">
              Chinese temple architecture represents one of humanity&apos;s most
              sophisticated building traditions. For over two millennia, master
              craftsmen combined{" "}
              <span className="font-semibold text-secondary-700">
                religious devotion
              </span>
              ,{" "}
              <span className="font-semibold text-primary-600">
                mathematical precision
              </span>
              , and
              <span className="font-semibold text-accent-jade">
                {" "}
                artistic beauty
              </span>{" "}
              to create structures that have withstood earthquakes, wars, and
              the passage of time.
            </p>

            {/* Highlight Quote */}
            <div className="relative pl-6 md:pl-8 py-4 md:py-6 border-l-4 border-secondary-500/50 bg-gradient-to-r from-secondary-50/50 to-transparent rounded-r-lg">
              <p className="text-neutral-800 italic text-base md:text-lg">
                &ldquo;Each temple tells a story of the dynasty that built it,
                the beliefs that inspired it, and the innovations that made it
                possible.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
