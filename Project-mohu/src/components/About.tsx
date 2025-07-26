import React from 'react';
import { Award, Users, MapPin, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Premium Quality",
      description: "Using only top-tier products and expert techniques for exceptional results."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Local Experts",
      description: "Founded by passionate locals from Tarneit who understand your needs."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Convenient Location",
      description: "Located in Tarneit, easily accessible for all your detailing needs."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Passionate Service",
      description: "We treat every car with the same level of pride and prestige."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At MoHu Prestige Detailing, we believe your car deserves more than just a wash — it deserves refinement, care, and precision. Founded by two passionate locals from Tarneit, MoHu delivers high-end car wash and detailing services that restore brilliance and elevate every drive.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We specialise in premium exterior and interior detailing using only top-tier products and expert techniques. Whether it's a daily vehicle or a luxury ride, we treat every car with the same level of pride and prestige.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-xl font-semibold text-blue-900">
                Who Are We?
              </p>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Founded by two car enthusiasts and proud Tarneit locals, MoHu was created from a shared vision: to redefine the standard of car care in our community. We specialise in meticulous exterior and interior detailing, using only the finest professional-grade products, advanced techniques, and a sharp eye for detail.
              </p>

              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                From everyday sedans to luxury vehicles, we bring a level of dedication and craftsmanship that restores brilliance and leaves a lasting impression. Whether it's removing years of wear or maintaining that showroom shine, we treat each car like it's our own — because to us, clean is never enough.
              </p>

              <p className="text-lg text-gray-700 mt-4 leading-relaxed font-semibold text-blue-900">
                "At MoHu, we aim for flawless. We aim for prestige. Because your car deserves nothing less."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="src/components/Gallery/clean1 (35).jpeg"
                alt="Professional car detailing"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;