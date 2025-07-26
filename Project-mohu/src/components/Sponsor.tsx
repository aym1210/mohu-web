import React from 'react';
import { Shield, Users, Award, CheckCircle } from 'lucide-react';

const Sponsor = () => {
  const services = [
    "Certified security officers and guards",
    "Concierge and mobile patrols", 
    "CCTV monitoring and tech support",
    "Event security and industry training"
  ];

  const certifications = [
    "ASIAL member",
    "ISO certified", 
    "CM3 qualified",
    "Fully licensed to operate across Victoria"
  ];

  return (
    <section id="sponsor" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Sponsor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At MoHu Prestige Detailing, we are proudly supported by Citadel Group — a trusted name in both property development and security solutions across Melbourne.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">
                  Citadel Group
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 40 years of combined industry experience, Citadel Security delivers award-winning security services that keep businesses, public spaces, and events safe.
              </p>

              <div className="bg-blue-600 text-white p-6 rounded-xl mb-8">
                <p className="text-xl font-semibold text-center">
                  "Our business is protecting yours."
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                Their Expert Team Provides:
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                Certifications & Qualifications:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <Shield className="w-20 h-20 mx-auto mb-6 text-blue-200" />
                <img
                  src="src/components/Gallery/Citadel_Group.png"
                  alt="Citadel Group Logo"
                  className="w-32 h-auto mx-auto mb-4 filter brightness-0 invert"
                />
                <h4 className="text-2xl font-bold mb-4">Citadel Security</h4>
                <p className="text-blue-100 mb-6">
                  Award-winning security services across Melbourne with over 40 years of combined experience.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-blue-200">Licensed</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;