import React, { useState, useEffect } from 'react';

const images = [
'images/image_slider_1.jpeg',
  'images/image_slider_2.jpeg',
  'https://www.thespruceeats.com/thmb/z8rLylqdabmmDenfbunW0ntEvEg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spices-2500-56a20ee15f9b58b7d0c61d97.jpg',
  // Add more image URLs as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds (adjust interval as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[30rem] overflow-hidden"> 
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <div key={index} className="w-full h-[30rem] flex-shrink-0">
            <img src={imageUrl} alt={`Slide ${index}`} className="object-container w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;