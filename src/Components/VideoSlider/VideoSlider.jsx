import React, { useState, useEffect } from 'react';

const downloadedVideos = [
  'images/video_1.mp4',
  'images/video_2.mp4',
  
  // Add more video file paths as needed
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === downloadedVideos.length - 1 ? 0 : prevIndex + 1));
//     }, 5000); // Change video every 5 seconds (adjust interval as needed)

//     return () => clearInterval(interval);
//   }, []);

const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === downloadedVideos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? downloadedVideos.length - 1 : prevIndex - 1));
  };


  return (
    <div className="w-full h-[46rem] max-[450px]:h-[200px] overflow-hidden relative mt-[-8rem]"> 
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {downloadedVideos.map((videoPath, index) => (
          <div key={index} className="w-full h-[46rem] flex-shrink-0">
            <video controls className="object-cover w-full h-full max-[450px]:h-[200px] ">
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      <button className=" bg-[#0097CC] btn btn-circle absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}> ❮</button>
      <button className=" bg-[#0097CC] btn btn-circle absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>❯ </button>
    </div>
  );
};

export default VideoSlider;
