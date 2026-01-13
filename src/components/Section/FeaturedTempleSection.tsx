import {
  BookOpen,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Shield,
} from "lucide-react";
import Image from "next/image";
import foguang from "@/assets/templ/foguang-temple.jpg";

const FeaturedTempleSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6 border border-primary-200">
            <Star className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700 tracking-wide">
              ARCHITECTURAL MASTERPIECE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-neutral-900">Featured </span>
            <span className="text-gradient-vermilion">Temple</span>
          </h2>

          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Exploring architectural masterpieces that define China&apos;s temple
            heritage
          </p>
        </div>

        {/* Temple Card */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent-jade/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>

          {/* Main Content */}
          <div className="relative grid lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
            {/* Image Section */}
            <div className="relative h-[400px] lg:h-full min-h-[500px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-700/90 to-secondary-900/90">
                {/* Placeholder for temple image - replace with actual Image component */}

                <Image
                  src={foguang}
                  alt="Foguang Temple"
                  fill
                  className="absolute inset-0"
                  priority
                />
              </div>

              {/* Image Overlay Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                    <Calendar className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">
                      857 CE
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                    Foguang Temple
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg font-medium">
                      Mount Wutai, Shanxi
                    </span>
                  </div>
                </div>

                {/* Architectural Features Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <span className="text-sm font-medium text-white">
                      Timber Frame
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <span className="text-sm font-medium text-white">
                      Dougong System
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <span className="text-sm font-medium text-white">
                      Tang Dynasty
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-gold to-accent-jade"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16">
              {/* Temple Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-neutral-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 font-mono mb-1">
                    1,166
                  </div>
                  <div className="text-sm text-neutral-600">Years Standing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 font-mono mb-1">
                    3rd
                  </div>
                  <div className="text-sm text-neutral-600">Oldest Wooden</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-jade font-mono mb-1">
                    0
                  </div>
                  <div className="text-sm text-neutral-600">Nails Used</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold font-mono mb-1">
                    12
                  </div>
                  <div className="text-sm text-neutral-600">Bracket Levels</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Engineering Marvel of Tang Dynasty
                </h4>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Built in 857 CE, Foguang Temple&apos;s East Hall is
                  China&apos;s third-oldest wooden building. Its revolutionary
                  dougong bracket system distributes weight without nails,
                  creating an engineering marvel that has survived over 1,160
                  years through earthquakes and wars.
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-10">
                <h4 className="text-xl font-heading font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-500" />
                  Architectural Innovations
                </h4>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Interlocking dougong bracket system supporting massive roof without nails",
                      icon: "⚡",
                    },
                    {
                      text: "Original Tang Dynasty frescoes and sculptures perfectly preserved",
                      icon: "🎨",
                    },
                    {
                      text: "Earthquake-resistant design with flexible timber framework",
                      icon: "🌍",
                    },
                    {
                      text: "Proportional perfection using the ancient √2 ratio system",
                      icon: "📐",
                    },
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm">{feature.icon}</span>
                      </div>
                      <span className="text-neutral-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTempleSection;
