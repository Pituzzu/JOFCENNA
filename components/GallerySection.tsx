import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // 6 images to form a 2x3 grid (on large screens)
  const totalPages = Math.ceil(GALLERY_IMAGES.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentImages = GALLERY_IMAGES.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    // Removed 'bg-black' to let the fixed video from Hero show through (Parallax)
    <section id="gallery" className="relative z-20 py-20 text-white group">
       {/* Decorative diagonal line */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-juve-gold to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4 text-white drop-shadow-md">
              Black and white moments
            </h2>
            <div className="w-20 h-1 bg-juve-gold mx-auto shadow-lg"></div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 p-2 text-juve-gold hover:text-white transition-colors cursor-pointer drop-shadow-lg"
                aria-label="Previous images"
            >
                <ChevronLeft size={48} />
            </button>

            {/* Grid Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
                {currentImages.map((src, index) => (
                    <div key={`${currentPage}-${index}`} className="overflow-hidden h-64 md:h-80 w-full border border-gray-900 bg-gray-900/80 animate-[fadeIn_0.5s_ease-in-out] shadow-xl">
                        <img 
                            src={src} 
                            alt={`Moment ${index + 1}`} 
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform" 
                        />
                    </div>
                ))}
            </div>

            {/* Right Navigation Arrow */}
            <button 
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 p-2 text-juve-gold hover:text-white transition-colors cursor-pointer drop-shadow-lg"
                aria-label="Next images"
            >
                <ChevronRight size={48} />
            </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-1 transition-all duration-300 shadow-md ${
                        currentPage === idx ? 'w-8 bg-juve-gold' : 'w-4 bg-gray-400 hover:bg-white'
                    }`}
                    aria-label={`Go to page ${idx + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection;