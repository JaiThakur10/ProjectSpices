import React, { useState, useEffect, useRef } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const slides = [
  {
    url: "https://picsum.photos/id/10/960/540"
  },
  {
    url: "https://picsum.photos/id/11/960/540"
  },
  {
    url: "https://picsum.photos/id/12/960/540"
  }
];

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < images.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleScroll = (event) => {
    const sliderWidth = sliderRef.current.offsetWidth;
    const scrollPosition = sliderRef.current.scrollLeft;
    const maxScrollPosition = sliderRef.current.scrollWidth - sliderWidth;
    const percentage = (scrollPosition * 100) / maxScrollPosition;

    const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

    const indicatorRef = sliderRef.current.querySelector(".slider-indicator");
    const indicatorWidth = indicatorWidthPercent * images.length;
    const indicatorLeft = percentage * (sliderWidth / indicatorWidth);

    indicatorRef.style.width = `${indicatorWidthPercent}%`;
    indicatorRef.style.transform = `translateX(${indicatorLeft}px)`;
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div
          className="relative w-full overflow-hidden"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          <TECarousel ride="carousel">
            <div className="relative w-full overflow-hidden">
              {images.map((slide, index) => (
                <TECarouselItem key={slide.url} className="w-full">
                  <div
                    className={`${
                      index === currentSlide ? "block" : "hidden"
                    } w-full h-60`}
                  >
                    <img src={slide.url} alt={`Slide ${index + 1}`} />
                  </div>
                </TECarouselItem>
              ))}
            </div>
          </TECarousel>
        </div>
        <div className="w-full h-1 relative bg-gray-300">
          <div
            className="h-1 absolute top-0 left-0 bg-gray-500 slider-indicator"
            style={{ width: `${indicatorWidthPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-2xl">
        <ImageSlider images={slides} />
      </div>
    </div>
  );
}

export default App;

