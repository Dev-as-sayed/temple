// components/AboutPage.jsx
"use client";

import {
  Package,
  Building,
  Ruler,
  Compass,
  Shield,
  BookOpen,
  Users,
  ChevronRight,
  Sparkles,
  Layers,
  Eye,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1920')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6 border border-primary-200">
              <BookOpen className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700 tracking-wide">
                ARCHITECTURAL HISTORY
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">
              <span className="text-neutral-900">History of </span>
              <span className="text-gradient-vermilion">Chinese Temple</span>
              <br />
              <span className="text-neutral-900">Architecture</span>
            </h1>
            <p className="text-2xl text-neutral-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              A journey through two millennia of spiritual expression,
              engineering innovation, and cultural preservation that shaped
              China&apos;s sacred landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Periods Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            <span className="text-neutral-900">Evolution Through </span>
            <span className="text-gradient-ochre">Dynastic Eras</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Early Formation",
                period: "Han to Southern Dynasties",
                years: "206 BCE - 589 CE",
                description:
                  "Initial adaptation of Indian stupas, development of multi-courtyard complexes",
                color: "border-secondary-500",
                bg: "bg-secondary-50",
                icon: <Layers className="w-6 h-6 text-secondary-600" />,
              },
              {
                title: "Golden Age",
                period: "Sui & Tang Dynasties",
                years: "581 - 907 CE",
                description:
                  "Timber-frame perfection, massive imperial temples, sophisticated proportions",
                color: "border-primary-500",
                bg: "bg-primary-50",
                icon: <Sparkles className="w-6 h-6 text-primary-600" />,
              },
              {
                title: "Refinement",
                period: "Song & Liao Dynasties",
                years: "960 - 1279 CE",
                description:
                  "Standardization, engineering manuals, innovative pagoda designs",
                color: "border-accent-jade",
                bg: "bg-accent-jade/10",
                icon: <Ruler className="w-6 h-6 text-accent-jade" />,
              },
              {
                title: "Symbolic Maturity",
                period: "Ming & Qing Dynasties",
                years: "1368 - 1912 CE",
                description:
                  "Cosmological symbolism, integrated gardens, imperial patronage",
                color: "border-accent-gold",
                bg: "bg-accent-gold/10",
                icon: <Compass className="w-6 h-6 text-accent-gold" />,
              },
            ].map((era, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 ${era.color} ${era.bg} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center border">
                    {era.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {era.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{era.period}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-lg font-mono font-semibold text-neutral-800 mb-2">
                    {era.years}
                  </div>
                  <p className="text-neutral-700">{era.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Principles Section */}
      <section className="py-20 px-4 bg-linear-to-br from-neutral-100 to-secondary-50/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                <span className="text-neutral-900">Core </span>
                <span className="text-gradient-vermilion">Philosophical</span>
                <span className="text-neutral-900"> Principles</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Harmony with Nature",
                    description:
                      "Temples positioned according to feng shui principles, integrating natural landscapes",
                    icon: <Compass className="w-6 h-6" />,
                    color: "text-accent-jade",
                  },
                  {
                    title: "Cosmological Order",
                    description:
                      "Layouts mirroring celestial patterns, representing the harmony of heaven and earth",
                    icon: <Eye className="w-6 h-6" />,
                    color: "text-primary-600",
                  },
                  {
                    title: "Structural Integrity",
                    description:
                      "Engineered for longevity, using flexible timber frames to withstand earthquakes",
                    icon: <Shield className="w-6 h-6" />,
                    color: "text-secondary-600",
                  },
                ].map((principle, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${principle.color} bg-white border flex items-center justify-center flex-shrink-0`}
                    >
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-neutral-700">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="relative h-[400px] bg-linear-to-br from-white to-neutral-100 rounded-2xl border border-neutral-200 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary-500/30 flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full border-2 border-secondary-500/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-accent-jade/50 flex items-center justify-center">
                      <Package className="w-8 h-8 text-neutral-700" />
                    </div>
                  </div>
                </div>
                <p className="text-lg text-neutral-700 font-medium">
                  Concentric harmony of{" "}
                  <span className="text-primary-600">heaven</span>,
                  <span className="text-secondary-600"> earth</span>, and
                  <span className="text-accent-jade"> humanity</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovators Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-neutral-900">Master Builders & </span>
              <span className="text-gradient-ochre">Innovators</span>
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              The visionaries who transformed spiritual concepts into
              architectural reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Master Craftsmen",
                era: "Tang & Song Dynasties",
                contribution:
                  "Perfected timber-frame techniques, developed dougong bracket systems",
                achievement:
                  "Created earthquake-resistant structures lasting millennia",
                color: "bg-primary-50 border-primary-200",
              },
              {
                name: "Monk-Architects",
                era: "Various Periods",
                contribution:
                  "Integrated Buddhist symbolism with Chinese architectural forms",
                achievement:
                  "Designed monastic complexes balancing spirituality and function",
                color: "bg-secondary-50 border-secondary-200",
              },
              {
                name: "Liang Sicheng & Lin Huiyin",
                era: "20th Century",
                contribution:
                  "Pioneered systematic study of Chinese architectural history",
                achievement:
                  "Documented and preserved ancient structures during modernization",
                color: "bg-accent-jade/10 border-accent-jade/20",
              },
            ].map((innovator, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${innovator.color} transition-all duration-300 hover:shadow-lg cursor-pointer`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-neutral-200 to-white border flex items-center justify-center">
                    <Users className="w-8 h-8 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {innovator.name}
                    </h3>
                    <p className="text-sm text-neutral-600">{innovator.era}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-neutral-500 mb-1">
                      Key Contribution
                    </div>
                    <p className="text-neutral-800">{innovator.contribution}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-500 mb-1">
                      Notable Achievement
                    </div>
                    <p className="text-neutral-800">{innovator.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Innovations Section */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-neutral-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                <span className="text-neutral-900">Engineering </span>
                <span className="text-gradient-vermilion">Breakthroughs</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Dougong Bracket System",
                    description:
                      "Interlocking wooden brackets distributing roof weight without nails",
                    impact:
                      "Enabled massive overhanging roofs and seismic resilience",
                    icon: "🏗️",
                  },
                  {
                    title: "Timber-Frame Flexibility",
                    description:
                      "Mortise-and-tenon joints allowing structural movement",
                    impact: "Withstood countless earthquakes over centuries",
                    icon: "🌳",
                  },
                  {
                    title: "√2 Ratio System",
                    description:
                      "Mathematical proportions based on square-diagonal relationship",
                    impact:
                      "Created harmoniously proportioned spaces resonating with cosmic order",
                    icon: "📐",
                  },
                ].map((innovation, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{innovation.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {innovation.title}
                        </h3>
                        <p className="text-neutral-700 mb-3">
                          {innovation.description}
                        </p>
                        <div className="text-sm font-medium text-primary-600">
                          {innovation.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-neutral-200">
              {/* Replace with architectural diagram image */}
              <div className="absolute inset-0 bg-linear-to-br from-secondary-700 to-neutral-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building className="w-24 h-24 text-white/50 mx-auto mb-6" />
                  <p className="text-white/80 text-lg font-medium">
                    Structural diagram of traditional
                    <br />
                    Chinese timber framing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Modern Study Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              <span className="text-neutral-900">Enduring </span>
              <span className="text-gradient-ochre">Legacy</span>
            </h2>

            <div className="prose prose-lg mx-auto text-neutral-700 mb-12">
              <p className="text-xl leading-relaxed mb-8">
                Chinese temple architecture represents more than historical
                artifacts—it embodies a living tradition of design intelligence
                that continues to inspire modern architects and engineers
                worldwide.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 my-12">
                <div className="p-6 bg-primary-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    2,000+
                  </div>
                  <div className="text-neutral-800 font-medium">
                    Years of Continuous Development
                  </div>
                </div>
                <div className="p-6 bg-secondary-50 rounded-xl">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">
                    50+
                  </div>
                  <div className="text-neutral-800 font-medium">
                    UNESCO World Heritage Sites
                  </div>
                </div>
              </div>

              <p className="text-xl leading-relaxed">
                Today, digital preservation, 3D modeling, and sustainable
                restoration techniques ensure that these architectural
                masterpieces continue to educate and inspire future generations
                about China&apos;s rich cultural heritage and engineering
                genius.
              </p>
            </div>

            <Link href="/temples">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Explore Temple Database
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
