import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CVideos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust number of slides to show
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 600, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings} >
        {data.map((d) => (
          <div key={d.id} className="h-[250px]">
            <div className="flex justify-center items-center">
              <img src={d.imageurl} alt="" className="h-60 w-64" loading="lazy"/>
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
          "images/img_anardana.jpeg",
       
      },
      {
        id: 2,
        imageurl:
        "images/img_biryani.jpeg",
        
      },
      {
        id: 3,
        imageurl:
        "images/img_chaat.jpeg",
     
      },
      {
        id: 4,
        imageurl:
        "images/img_chana.jpeg",
        
      },
      {
        id: 5,
        imageurl:
        "images/img_chicken.jpeg",
        
      },
      {
        id: 6,
        imageurl:
        "images/img_dalia.jpeg",
        
      },
      {
        id: 7,
        imageurl:
        "images/img_golgappe.jpeg",
       
      },
      {
        id: 8,
        imageurl:
        "images/img_jwala.jpeg",
        
      },
      {
        id: 9,
        imageurl:
        "images/img_kitchen.jpeg",
        
      },
      
      
      {
        id: 10,
        imageurl:
        "images/img_methi.jpeg",
        
      },
      {
        id: 11,
        imageurl:
        "images/img_peeli_mirch.jpeg",
        
      },
      {
        id: 12,
        imageurl:
        "images/img_pavBhaji.jpeg",
        
      },
      {
        id: 13,
        imageurl:
        "images/img_sabji.jpeg",
        
      },
      
  
];

export default CVideos;