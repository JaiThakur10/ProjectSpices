import React, { useState, useEffect } from 'react';

const images = [
  'https://static.vecteezy.com/system/resources/thumbnails/024/692/064/small_2x/ai-generated-ai-generative-set-of-different-indian-spices-for-meny-food-tasty-graphic-art-photo.jpg',
  'https://img.freepik.com/free-photo/top-view-various-indian-spices-seasonings-table_181624-58725.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1711497600&semt=ais',
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
    <div className="w-full h-[500px] overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0">
            <img src={imageUrl} alt={`Slide ${index}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;