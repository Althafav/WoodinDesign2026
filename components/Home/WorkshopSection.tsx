import { Globe, Heart, TreePine, Wrench } from "lucide-react";

export default function WorkshopsSection() {
  const participantBenefits = [
    {
      title: "Deep Understanding of Wood's Value",
      description:
        "A deeper understanding of wood's environmental, aesthetic, and structural value.",
      icon: TreePine,
    },
    {
      title: "Professional Networks",
      description:
        "New networks and collaborative opportunities across disciplines and geographies.",
      icon: Globe,
    },
    {
      title: "Practical Tools & Knowledge",
      description:
        "Practical tools for compliance, sourcing, and sustainable design.",
      icon: Wrench,
    },
    {
      title: "Human-Centered Design Appreciation",
      description:
        "A renewed appreciation of wood's role in building healthier, smarter, and more human-centered spaces.",
      icon: Heart,
    },
  ];

  return (
    <section id="workshops" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Workshops and{" "}
              <span className="text-green-600">Panel Discussions</span>
            </h2>
            <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Bridge the gap between digital tools and material intelligence,
              showing how wood is evolving as a medium for sustainable
              innovation and timeless beauty.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Column - Description */}
            <div className="space-y-8">
              <div className="relative">
                {/* <img
                  src={workshopsImage}
                  alt="Workshop environment"
                  className="w-full h-64 object-cover rounded-2xl"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>

              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl text-green-800 mb-6">
                  Platform for Innovation
                </h3>
                <p className="text-lg text-green-700 leading-relaxed">
                  <span className="text-green-600">"Wood in Design"</span>{" "}
                  serves as a platform for cross-sector collaboration,
                  encouraging architects, technologists, artists, regulators,
                  and environmentalists to co-create the next generation of
                  sustainable and meaningful spaces.
                </p>
                <p className="text-lg text-green-700 leading-relaxed mt-4">
                  By fostering a culture of innovation and ecological awareness,
                  the conference empowers professionals to integrate wood into
                  future-proof, compliant, and inspiring environments—locally
                  and globally.
                </p>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl text-gray-900 mb-8">
                  What Participants Will Gain
                </h3>

                <div className="space-y-6">
                  {participantBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <benefit.icon className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl mb-6">Ready to Transform Your Practice?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join industry leaders in exploring the future of sustainable wood
              design and construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-white border-1 rounded-full text-white hover:bg-white hover:text-green-700 text-lg px-8 py-4 transition delay-100">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
