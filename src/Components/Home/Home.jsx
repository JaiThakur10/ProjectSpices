import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../Text";

import { Heading } from "../Heading";
import HomepageCardblog from "../HomepageCardblog/HomepageCardblog";
import { Button } from "../Button"
import ImageSlider from "../ImageSlider/ImageSlider";
import { NavLink } from "react-router-dom";
import VideoSlider from "../VideoSlider/VideoSlider";

const info = [
  {
    image:
      "https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png",
    name: "Blend",
    link: "/Blend",
  },
  {
    image:
      "https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png",
    name: "Basic",
    link: "/Basic",
  },
  {
    image:
      "https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png",
    name: "Mixed",
    link: "/Mixed",
  },
  {
    image:
      "https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png",
    name: "Others",
    link: "/Blend",
  },
];

const videoPaths = [
  'images/video_1.mp4',
  'images/video_2.mp4',

];


export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>YP GOLD</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-[#FFFFFF]">
        {/* carousel */}

        <ImageSlider />

        {/* carousel end */}




        {/* philosophy */}
        <div className="text-[#0097CD] text-4xl flex flex-col items-center mt-[-5rem]">
          <span>
            We believe spices are the backbone of Indian kitchens and to
            preserve this, we are satisfied
          </span>
          <span>with nothing but perfect ingredients only.</span>
        </div>

        <div className="carousel w-full h-[550px] bg-[#F0F0F0]">
          <div
            id="slide1"
            className="carousel-item relative w-full flex justify-center gap-8"
          >
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
              <a href="#slide4" className="bg-[#0097CC] btn btn-circle ">
                ❮
              </a>
              <a href="#slide2" className=" bg-[#0097CC] btn btn-circle ">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full flex justify-center gap-8"
          >
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
                  to="/Mixed"

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
              <a href="#slide1" className="bg-[#0097CC] btn btn-circle ">
                ❮
              </a>
              <a href="#slide3" className=" bg-[#0097CC] btn btn-circle ">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full flex justify-center gap-8"
          >
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
              <a href="#slide2" className="bg-[#0097CC] btn btn-circle ">
                ❮
              </a>
              <a href="#slide4" className=" bg-[#0097CC] btn btn-circle ">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full flex justify-center gap-8"
          >
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
              <a href="#slide3" className="bg-[#0097CC] btn btn-circle ">
                ❮
              </a>
              <a href="#slide1" className=" bg-[#0097CC] btn btn-circle ">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* video slider */}

        {/* <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Video Carousel</h1>
         <VideoSlider videoPaths={videoPaths} />
        </div> */}
        <VideoSlider/>
        {/* video slider closed */}


        <div className="flex flex-row justify-center w-full ">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading
                size="xl"
                as="h2"
                className="tracking-[-0.50px] text-center "
              >
                Our Videos
              </Heading>
              <Text
                size=""
                as="p"
                className="text-[#0097CC] text-2xl tracking-[-0.50px] text-center"
              >
                We write various things related to spices, from tips and what
                things I need to pay attention to when choosing right spices
              </Text>
            </div>
            <div className="flex flex-row w-full gap-5">
              <HomepageCardblog
                imagesrc="https://www.youtube.com/embed/Kg82_C5xfEQ?si=a0sirxA65p-gWsQH"
                className="flex flex-col items-center justify-start w-[33%] gap-6"
              />
              <HomepageCardblog
                imagesrc="https://www.youtube.com/embed/08R-wR2LHCc?si=SuuHbsm9d-Z8pjM2"
                className="flex flex-col items-center justify-start w-[33%] gap-6"
              />
              <HomepageCardblog
                imagesrc="https://www.youtube.com/embed/pIdJYnVkU0c?si=eNN7lINT9o50PuOk"
                className="flex flex-col items-center justify-start w-[31%] gap-6 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
