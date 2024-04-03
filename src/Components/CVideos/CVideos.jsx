import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CVideos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000 
  };
  return (
    <div className='w-full'>
      <div className="">
      <Slider {...settings} style={{ padding: 0, margin: 0 }}>
        {data.map((d) => (
          <div key={d.id} className=" h-[250px] gap-10  ">
            <div className=' flex justify-center items-center'>
              <img src={d.imageurl} alt="" className="h-60 w-64"/>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
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