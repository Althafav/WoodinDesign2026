import { Award, Leaf, Star, Target, Trophy, Zap } from "lucide-react";

export default function AwardsSection() {
  const awardCategories = [
    {
      title: "Timber Innovation Award",
      icon: Zap,
      description:
        "For pioneering uses of engineered wood (CLT, Glulam, hybrid systems) that redefine architectural or structural boundaries.",
    },
    {
      title: "Vision 2030 Sustainability Award",
      icon: Target,
      description:
        "Celebrating projects that contribute to carbon reduction, urban greening, and sustainable city development in alignment with national goals.",
    },
    {
      title: "Design & Technology Integration Award",
      icon: Award,
      description:
        "Honoring excellence in digital fabrication, CNC/robotic techniques, and the seamless blend of tradition with cutting-edge design tools.",
    },
    {
      title: "Climate Resilience in Wood Award",
      icon: Leaf,
      description:
        "Awarded to projects demonstrating exceptional performance of timber in harsh climates — including heat, sand, and humidity — with proven longevity and durability.",
    },
    {
      title: "Emerging Talent in Wood Architecture",
      icon: Star,
      description:
        "Spotlighting students or young professionals leading the next wave of innovation in wood design, sustainability, or fabrication.",
    },
  ];

  return (
    <section id="awards" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <img
          src={awardsImage}
          alt="Wood in Design Awards 2025"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-green-400 mb-6">
              Wood in Design Awards 2025
            </h2>
            <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
              Celebrating Innovation, Sustainability &amp; Vision 2030 Impact
            </p>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              In recognition of excellence across the timber design ecosystem,
              the Wood in Design Awards will honor individuals, teams, and
              projects that exemplify the transformative role of wood in shaping
              Saudi Arabia’s sustainable future — in line with Vision 2030 and
              the Saudi Green Initiative.
            </p>
          </div>

          {/* Award Categories */}
          <div className="mb-16">
            <h3 className="text-3xl text-green-400 mb-12 text-center">
              Award Categories
            </h3>

            <div className="flex justify-items-center">
              <div className="grid md:grid-cols-2 gap-8 ">
                {awardCategories.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-green-400/20 hover:bg-white/20 rounded-2xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <award.icon className="w-8 h-8 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-lg text-green-400 mb-3">
                            {award.title}
                          </h4>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {award.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards Dinner Information */}
          <div className="text-center">
            <div className="bg-green-600/20 backdrop-blur-sm border-green-400/30 max-w-2xl mx-auto rounded-2xl">
              <div className="p-8">
                <Trophy className="w-12 h-12 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl text-white mb-4">
                  Winners will be recognized during the
                </h3>
                <h4 className="text-3xl text-green-400 mb-4">
                  WoodShow Awards Dinner
                </h4>
                <p className="text-xl text-gray-300 italic">
                  8 September 2025 – 8:00 PM
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <div className="bg-green-500 hover:bg-green-600 text-white text-lg px-12 py-4 rounded-xl cursor-pointer">
                Submit Your Project
              </div>
              <p className="text-sm text-gray-300">
                Submission deadline: 8 September 2025 – 8:00 PM 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
