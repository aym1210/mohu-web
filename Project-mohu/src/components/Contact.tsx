import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+61 436 621 845 / +61 403 450 507",
      action: "tel:+61436621845"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "Mohu.prestige.detailing@gmail.com",
      action: "mailto:Mohu.prestige.detailing@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "44 Edgewood Bvd, Tarneit VIC 3029",
      action: "https://maps.google.com/?q=44+Edgewood+Bvd,+Tarneit+VIC+3029"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Tue & Thu: 12PM-5PM, Sun: 11AM-5PM",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "#"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      url: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to give your car the prestige treatment it deserves? Get in touch with us today.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    {item.action ? (
                      <a
                        href={item.action}
                        target={item.action.startsWith('http') ? '_blank' : undefined}
                        rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Booking */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Quick Booking</h3>
            <p className="text-gray-300 mb-6">
              Ready to book? Send us a message on WhatsApp or give us a call for immediate assistance.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  const phoneNumber = "+61436621845";
                  const message = "Hi! I'd like to book a detailing service. Could you please provide more details about availability?";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </button>
              
              <button
                onClick={() => window.open('tel:+61436621845')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <div className="bg-gray-700 rounded-lg h-64 flex flex-col items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">44 Edgewood Bvd, Tarneit VIC 3029</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p className="font-semibold mb-2">Business Hours:</p>
                    <p>Tuesday: 12:00 PM – 5:00 PM</p>
                    <p>Thursday: 12:00 PM – 5:00 PM</p>
                    <p>Sunday: 11:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;