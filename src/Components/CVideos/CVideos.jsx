import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function CVideos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust number of slides to show
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: null,
    nextArrow: null,
    arrows: false,
    responsive: [
      {
        breakpoint: 450, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,

        }
      },
      {
        breakpoint: 1450, // Adjust breakpoint as needed
        settings: {
          
          arrows: false,
        },
      }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const enlargeImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  

  return (
    <div className="w-full">
      <Slider {...settings} >
        {data.map((d) => (
          <div key={d.id} className="h-[250px]" onClick={() => enlargeImage(d.imageurl)}>
            <div className="flex justify-center items-center">
              <img src={d.imageurl} alt="" className="h-60 w-64" loading="lazy"/>
            </div>
          </div>
        ))}
      </Slider>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center bg-black bg-opacity-75 ">
          <div className="relative">
            <button className="absolute  top-2 right-2 text-white z-10" onClick={handleClose}><img className=" h-9 w-9 max-[450px]:h-9 md:w-9" src="images/cross.png" alt="" /></button>
            <img src={selectedImage} alt="" className="max-w-[600px] max-h-[600px] max-[450px]:h-[400px] max-[450px]:w-[400px]" />
          </div>
        </div>
      )}
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