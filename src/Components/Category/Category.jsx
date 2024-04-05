import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';

function Category() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };
  const slides = [
    { name: "Blend spices",bg_image:"", link:"/Blend", content: "YP Gold spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. We do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.", img: "images/blend.png" },
    { name: "Mixed Spices",bg_image:"",link:"/Mixed", content: "YP Gold spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. We do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.", img: "images/mixed.jpeg" },
    { name: "Basic Spices",bg_image:"",link:"/Basic", content: "YP Gold spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. We do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.", img: "images/basic.jpeg" },
    { name: "Salts", bg_image:"",link:"/Salts",content: "YP Gold spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. We do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.", img: "images/salts.jpeg" },
    { name: "Others",bg_image:"",link:"/Others", content: "YP Gold spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. We do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.", img: "images/others.jpeg" },
    { name: "Pooja Samagri",bg_image:"",link:"/Pooja", content: "YP Gold spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. We do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.", img: "images/hawan.jpeg" },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: '' // This enables smooth scrolling
    });
  };

  return (
    <div className='w-full h-[550px] bg-[#F0F0F0]'>
      <div className=" h-[32rem] overflow-hidden relative" style={{ backgroundImage: `url(${slides[currentSlide].bg_image})`, backgroundSize: 'cover', backgroundRepeat: '', mixblendmode:'multiply'}}>
        <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slides, index) => (
            <div
              key={index} className="carousel-item relative w-full flex justify-center gap-8 "
            >
              <div className="justify-start w-1/3 mt-[4rem]">
                <div className="text-3xl font-bold">
                  <h1>{slides.name}</h1>
                </div>
                <div className="mt-3 ">
                  <p>
                    {slides.content}
                  </p>
                </div>
                <div className="flex mt-3">
                  <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative ">
                    <button class="flex items-center bg-[#B8A064] text-[white] rounded-full border-solid border-2  hover:bg-[#0097CC] hover:text-white-A700 p-2 w-auto">
                      Online order{" "}
                      <img src="images/img_arrow_down.svg" alt="" class="ml-2 " />
                    </button>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu shadow h-[8rem] w-[32rem] bg-white-A700 grid grid-cols-3 gap-10 p-4 "
                    >
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]">
                        <NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off">
                          <img
                            className=""
                            src="images/flipkartlogo.png"
                            alt=""
                          />
                        </NavLink>
                      </li>
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]">
                        <NavLink to={"https://blinkit.com/"}>
                          <img className="" src="images/blinkit.svg" alt="" />
                        </NavLink>
                      </li>
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]">
                        <NavLink to={"https://www.meesho.com/"}>
                          <img
                            className="w-60 h-[4rem]"
                            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png"
                            alt=""
                          />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <NavLink onClick={scrollToTop}
                    to={slides.link}

                  >
                    <button className=" mt-2 mb-2 text-[#0097CC] rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2">
                      Get Details
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className=" mt-[-1.5rem] bg-[#F0F0F0]">
                <img className="h-[500px] w-[500px] mix-blend-multiply" src={slides.img} alt="" />
              </div>
            </div>
       
        ))}
      </div>
      <button className=" hover:bg-[#0097CC] bg-[#F0F0F0] btn btn-circle absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}> ❮</button>
      <button className=" hover:bg-[#0097CC] btn btn-circle absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>❯ </button>
    </div>
    </div>

  );
}

export default Category





