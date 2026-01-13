import { Calendar, ChevronRight, Sparkles } from "lucide-react";

// Timeline data
const timelineData = [
  {
    dynasty: "Han & Northern/Southern",
    period: "206 BCE - 589 CE",
    description:
      "Buddhism arrives in China; initial adaptation of Indian stupas into multi-story Chinese pagodas. Temple layouts transition from single-quadrangle compounds to large, multi-courtyard monastery complexes.",
    innovation: "Timber-frame dougong bracket system begins development",
    color: "from-secondary-800 to-secondary-900",
    icon: "🏛️",
  },
  {
    dynasty: "Sui & Tang",
    period: "581 - 907 CE",
    description:
      "Golden age of Chinese Buddhism; massive imperial temple complexes. Sophisticated timber-frame structures reach maturity with perfect proportions and seismic-resistant designs.",
    innovation:
      "Perfection of dougong brackets & 'tube-in-tube' wooden structures",
    color: "from-primary-800 to-primary-900",
    icon: "🌟",
  },
  {
    dynasty: "Song & Liao",
    period: "960 - 1279 CE",
    description:
      "Standardization of architectural manuals; innovative pagoda designs. The Yingxian Wooden Pagoda (1056 AD) demonstrates advanced earthquake engineering principles.",
    innovation: "Scientific design ratios (√2 principle) in temple proportions",
    color: "from-accent-jade/80 to-accent-jade",
    icon: "📐",
  },
  {
    dynasty: "Ming & Qing",
    period: "1368 - 1912 CE",
    description:
      "Imperial symbolism integrated into temple design; sophisticated color symbolism. Temple of Heaven's Hall of Prayer for Good Harvests represents cosmological perfection.",
    innovation: "Complex spatial symbolism & integrated garden-temple designs",
    color: "from-accent-gold/80 to-accent-gold",
    icon: "🎨",
  },
  {
    dynasty: "Modern Study",
    period: "20th Century - Present",
    description:
      "Pioneering research by Liang Sicheng and Lin Huiyin; systematic documentation and preservation. Digital technologies enable new forms of architectural analysis and virtual reconstruction.",
    innovation: "Systematic field survey & architectural historiography",
    color: "from-neutral-800 to-neutral-900",
    icon: "📚",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6 border border-primary-500/20">
            <Calendar className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300 tracking-wide">
              HISTORICAL PROGRESSION
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-white">Architectural </span>
            <span className="text-gradient-vermilion">Evolution</span>
            <span className="text-white"> Through Time</span>
          </h2>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Trace the development of temple architecture across China&apos;s
            great dynasties, from early Buddhist adaptations to modern
            preservation efforts
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-linear-to-b from-primary-500 via-secondary-500 to-accent-jade md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot with Gradient */}
                <div
                  className={`absolute left-4 md:left-1/2 w-6 h-6 rounded-full ${item.color} border-4 border-neutral-950 md:-translate-x-1/2 z-10 flex items-center justify-center`}
                >
                  <span className="text-xs font-bold">{item.icon}</span>
                </div>

                {/* Decorative Connector Line from Dot */}
                <div
                  className={`absolute left-7 md:left-1/2 h-0.5 w-8 md:w-16 ${
                    item.color
                  } md:-translate-x-1/2 z-0 ${
                    index % 2 === 0
                      ? "md:translate-x-0 md:left-auto md:right-1/2"
                      : ""
                  }`}
                />

                {/* Content Card */}
                <div
                  className={`md:w-1/2 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${item.color} p-6 md:p-8 rounded-xl border border-neutral-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary-500/30`}
                  >
                    {/* Dynasty Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4 border border-white/20">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <span className="text-sm font-medium text-white tracking-wide">
                        {item.dynasty}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-current rounded-full"></div>
                      <p className="text-lg font-mono font-medium text-white/90">
                        {item.period}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-200 leading-relaxed mb-6 text-lg">
                      {item.description}
                    </p>

                    {/* Innovation Highlight */}
                    <div className="pt-6 border-t border-white/20">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-500/20 rounded flex items-center justify-center mt-1">
                          <ChevronRight className="w-4 h-4 text-primary-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary-300 mb-1">
                            Key Innovation
                          </p>
                          <p className="text-white/90 font-medium">
                            {item.innovation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Spacer for Alternating Layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
