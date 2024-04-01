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
    <div key={1}>slide 1</div>,
    <div key={2}>slide 2</div>,
    <div key={3}></div>,
    <div key={4}></div>,
  ];
  return (
    <div>
      <div className="carousel w-full h-[550px] bg-[#F0F0F0]">
          <div key={1}
            className="carousel-item relative w-full flex justify-center gap-8"
          >{slides[currentSlide]}
            <div className="justify-start w-1/3 mt-[6.5rem]">
              <div className="text-3xl">
                <h1>Blend Spices</h1>
              </div>
              <div className="mt-3 ">
                <p>
                  Catch Whole spices give you the best of taste, flavour and
                  aroma as they are sourced from the prime spice growing
                  regions. Whole spices do not go through the grounding process
                  and retain most of their original qualities, they are cleaned
                  using stringent processes to make them free from impurities.
                  With this, we ensure that you receive only the best quality
                  spices in India, guaranteed not only to be pure but also to
                  delight your palate with their taste and aroma.
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
                <NavLink
                  to="/Blend"

                >
                  <button className=" mt-2 mb-2 text-[#0097CC] rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2">
                    Get Details
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="mt-[6.5rem]">
              <img className="h-72 w-72" src="images/blend.png" alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="bg-[#0097CC] btn btn-circle " onClick={prevSlide}>Previous</button>
                ❮
                <button className="bg-[#0097CC] btn btn-circle " onClick={nextSlide}>Next</button>
            </div>
          </div>


          <div
            key={2}
            className="carousel-item relative w-full flex justify-center gap-8"
          >{slides[currentSlide]}
            <div className="justify-start w-1/3 mt-[6.5rem]">
              <div className="text-3xl">
                <h1>Mixed Spices</h1>
              </div>
              <div className="mt-3 ">
                <p>
                  Whole spices give you the best of taste, flavour and
                  aroma as they are sourced from the prime spice growing
                  regions. Whole spices do not go through the grounding process
                  and retain most of their original qualities, they are cleaned
                  using stringent processes to make them free from impurities.
                  With this, we ensure that you receive only the best quality
                  spices in India, guaranteed not only to be pure but also to
                  delight your palate with their taste and aroma.
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
                <NavLink
                  to="/Blend"

                >
                  <button className=" mt-2 mb-2 text-[#0097CC] rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2">
                    Get Details
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="mt-[6.5rem]">
              <img className="h-72 w-72" src="images/blend.png" alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="bg-[#0097CC] btn btn-circle " onClick={prevSlide}>Previous</button>
                ❮
                <button className="bg-[#0097CC] btn btn-circle " onClick={nextSlide}>Next</button>
            </div>
          </div>


          <div
           key={3}
            className="carousel-item relative w-full flex justify-center gap-8"
          >{slides[currentSlide]}
            <div className="justify-start w-1/3 mt-[6.5rem]">
              <div className="text-3xl">
                <h1>Others Spices</h1>
              </div>
              <div className="mt-3 ">
                <p>
                  Catch Whole spices give you the best of taste, flavour and
                  aroma as they are sourced from the prime spice growing
                  regions. Whole spices do not go through the grounding process
                  and retain most of their original qualities, they are cleaned
                  using stringent processes to make them free from impurities.
                  With this, we ensure that you receive only the best quality
                  spices in India, guaranteed not only to be pure but also to
                  delight your palate with their taste and aroma.
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
                <NavLink
                  to="/Blend"

                >
                  <button className=" mt-2 mb-2 text-[#0097CC] rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2">
                    Get Details
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="mt-[6.5rem]">
              <img className="h-72 w-72" src="images/blend.png" alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="bg-[#0097CC] btn btn-circle " onClick={prevSlide}>Previous</button>
                ❮
                <button className="bg-[#0097CC] btn btn-circle " onClick={nextSlide}>Next</button>
            </div>
          </div>


          <div
            className="carousel-item relative w-full flex justify-center gap-8"
          >{slides[currentSlide]}
            <div className="justify-start w-1/3 mt-[6.5rem]">
              <div className="text-3xl">
                <h1>Basic Spices</h1>
              </div>
              <div className="mt-3 ">
                <p>
                  Catch Whole spices give you the best of taste, flavour and
                  aroma as they are sourced from the prime spice growing
                  regions. Whole spices do not go through the grounding process
                  and retain most of their original qualities, they are cleaned
                  using stringent processes to make them free from impurities.
                  With this, we ensure that you receive only the best quality
                  spices in India, guaranteed not only to be pure but also to
                  delight your palate with their taste and aroma.
                </p>
              </div>
              <div className="flex mt-3">
                <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative ">
                  <Button/>

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
                <NavLink
                  to="/Basic"

                >
                  <button className=" mt-2 mb-2 text-[#0097CC] rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2">
                    Get Details
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="mt-[6.5rem]">
              <img className="h-72 w-72" src="images/blend.png" alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="bg-[#0097CC] btn btn-circle " onClick={prevSlide}>Previous</button>
                ❮
                <button className="bg-[#0097CC] btn btn-circle " onClick={nextSlide}>Next</button>
              
            </div>
          </div>
        </div>

    </div>
  )
}

export default Category
