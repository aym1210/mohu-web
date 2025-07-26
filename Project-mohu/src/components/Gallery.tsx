import React from 'react';
import { ExternalLink, Plus } from 'lucide-react';

const Gallery = () => {
  // Placeholder images - replace these URLs with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "src/components/Gallery/clean1 (1).jpeg",
      alt: "Exterior car detailing",
    },
    {
      id: 2,
      src: "src/components/Gallery/clean1 (19).jpeg",
      alt: "Interior car cleaning",
    },
    {
      id: 3,
      src: "src/components/Gallery/clean1 (20).jpeg",
      alt: "Car washing process",
    },
    {
      id: 4,
      src: "src/components/Gallery/clean1 (21).jpeg",
      alt: "Professional car detailing",
    },
    {
      id: 5,
      src: "src/components/Gallery/clean1 (30).jpeg",
      alt: "Car interior detailing",
    },
    {
      id: 6,
      src: "src/components/Gallery/clean1 (31).jpeg",
      alt: "Car exterior shine",
    },
    {
      id: 7,
      src: "src/components/Gallery/clean1 (32).jpeg",
      alt: "Detailed car cleaning",
    },
    {
      id: 8,
      src: "src/components/Gallery/clean1 (33).jpeg",
      alt: "Premium car care",
    },
    {
      id: 9,
      src: "src/components/Gallery/clean1 (34).jpeg",
      alt: "Car detailing excellence",
    },
    {
      id: 10,
      src: "src/components/Gallery/clean1 (35).jpeg",
      alt: "Professional car wash",
    },
    {
      id: 11,
      src: "src/components/Gallery/clean1 (36).jpeg",
      alt: "Interior cleaning service",
    },
    {
      id: 12,
      src: "src/components/Gallery/clean1 (37).jpeg",
      alt: "Exterior detailing work",
    },
    {
      id: 13,
      src: "src/components/Gallery/clean1 (38).jpeg",
      alt: "Car care services",
    },
    {
      id: 14,
      src: "src/components/Gallery/clean1 (39).jpeg",
      alt: "Professional detailing",
    },
    {
      id: 15,
      src: "src/components/Gallery/clean1 (40).jpeg",
      alt: "Quality car cleaning",
    },
    {
      id: 16,
      src: "src/components/Gallery/clean1 (41).jpeg",
      alt: "Premium car detailing",
    }
  ];

  const [visibleImages, setVisibleImages] = React.useState(10);

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, galleryImages.length));
  };

  const displayedImages = galleryImages.slice(0, visibleImages);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformation and quality of our professional detailing services
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium mb-1">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < galleryImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreImages}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Load More Images</span>
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see your car featured in our gallery?
          </p>
          <button
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ApvcefZDRDsUmhc4cDheXVG6-Hw1RVPHwcoyG146fEKgzjyLslJu7lls-78SpD-EPA4u-T2vT', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Your Detail Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;