import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Sparkles, Shield, Eye, Droplets, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      name: "Exterior Detail",
      price: "$20",
      description: "Complete exterior wash, dry, and shine treatment",
      features: ["Pressure wash", "Hand dry", "Tire shine", "Window cleaning"],
      image: "src/components/Gallery/exterior-detail.jpg.jpeg"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Interior Detail",
      price: "$30",
      description: "Thorough interior cleaning and conditioning",
      features: ["Vacuum", "Dashboard clean", "Seat conditioning", "Air freshener"],
      image: "src/components/Gallery/interior-detail.jpg.jpeg"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      name: "Carpet Deep Steam Cleaning",
      price: "$15",
      description: "Professional steam cleaning for carpets and upholstery",
      features: ["Steam cleaning", "Stain removal", "Odor elimination", "Fast drying"],
      image: "src/components/Gallery/carpet-cleaning.jpeg"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "Clay Bar Treatment",
      price: "$75",
      description: "Remove contaminants and restore paint smoothness",
      features: ["Paint decontamination", "Smooth finish", "Paint preparation", "Professional grade"],
      image: "src/components/Gallery/clay-bar.jpg"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      name: "Headlight Restoration",
      price: "$150",
      description: "Restore clarity and brightness to foggy headlights",
      features: ["UV protection", "Crystal clear finish", "Improved visibility", "Long-lasting results"],
      image: "src/components/Gallery/headlight-restoration.jpg"
    },
    {
      icon: <Star className="w-8 h-8" />,
      name: "Wax Coating on Exterior Detail - EXTRA",
      price: "$10",
      description: "Premium wax coating for exterior detail service",
      features: ["Paint protection", "Enhanced shine", "Water repellent", "UV protection"],
      image: "src/components/Gallery/wax-coating.jpg.jpg"
    }
  ];

  const handleBooking = (serviceName: string) => {
    const bookingUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ApvcefZDRDsUmhc4cDheXVG6-Hw1RVPHwcoyG146fEKgzjyLslJu7lls-78SpD-EPA4u-T2vT";
    window.open(bookingUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Specialise In
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional detailing services tailored to keep your vehicle looking its absolute best
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Service Image */}
              {service.image && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              {/* Icon & Price */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                  <div className="text-sm text-gray-500">AUD</div>
                </div>
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <button
                onClick={() => handleBooking(service.name)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We offer customized detailing packages to meet your specific needs. Contact us to discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;