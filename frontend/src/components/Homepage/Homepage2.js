// ImageSlider.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations

const ImageSlider = () => {
  const images = ['/iitglogo.png', '/img2.png', '/img3.png', '/img4.png']; // Image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Set image to clicked thumbnail
  };

  return (
    <div className="w-full mx-auto p-4 sm:p-8 lg:p-16">
      {/* Thumbnails Section */}
      <div className="flex justify-center sm:justify-end space-x-2 sm:space-x-4 mb-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer rounded-md overflow-hidden border-2 ${
              currentIndex === index ? 'border-orange-500' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 sm:w-24 sm:h-24 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Image Section */}
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence mode="wait"> {/* Use mode="wait" for smooth transitions */}
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 sm:h-96 lg:h-screen object-cover rounded-lg"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageSlider;
