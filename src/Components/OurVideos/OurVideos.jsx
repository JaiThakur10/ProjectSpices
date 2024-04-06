import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurVideos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust number of slides to show
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: null,
    nextArrow: null,
    arrows:false,
    responsive: [
      {
        breakpoint: 450, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
        
      },
      {
        breakpoint: 1450, // Adjust breakpoint as needed
        settings: {
          
          arrows: false,
        },
      }
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings} >
        {data.map((d) => (
          <div key={d.id} className="h-[150px]">
            <div className="flex justify-center items-center ">
              <video controls className="h-54 w-64" src={d.imageurl} type="video/mp4"  loading="lazy" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


const data = [
    {
        id: 1,
        imageurl:
          "videos/video_1.mp4",
       
      },
      {
        id: 2,
        imageurl:
        "videos/video_2.mp4",
        
      },
      {
        id: 3,
        imageurl:
        "videos/video_3.mp4",
     
      },
      {
        id: 4,
        imageurl:
        "videos/video_4.mp4",
        
      },
      {
        id: 5,
        imageurl:
        "videos/video_5.mp4",
        
      },
      {
        id: 6,
        imageurl:
        "videos/video_6.mp4",
        
      },
       
  
];

export default OurVideos;
