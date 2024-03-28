import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../Text";
import { Img } from "../Img";
import { Button } from "../Button";
import { Heading } from "../Heading";
import HomepageCardblog from "../HomepageCardblog/HomepageCardblog";
import HomepageCardproduct from "../HomepageCardproduct/HomepageCardproduct";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";


const info = [
  {
    image: 'https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png',
    name: "Blend",
    link: "/Blend"
  },
  {
    image: "https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png",
    name: "Basic",
    link: "/Basic"
  },
  {
    image: 'https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png',
    name: "Mixed",
    link: "/Blend"
  },
  {
    image: 'https://www.freeiconspng.com/thumbs/spices-png/spices-png-photo-3.png',
    name: "Others",
    link: "/Blend"
  },
]

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
        <div className="text-[#1D7DA3] text-4xl flex flex-col items-center mt-[-5rem]">
          <span>We believe spices are the backbone of Indian kitchens and to preserve this, we are satisfied</span>
          <span >with nothing but perfect ingredients only.</span>
        </div>

        <div className="flex flex-col gap-[50px] mx-auto">
          <div className="flex flex-row justify-start w-full gap-[19px]">

            <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
              {info.map((info, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] hover:bg-red-300 transition-colors duration-300"
                >
                  <Link to={info.link}>
                    <img
                      src={info.image}
                      alt="info.image"
                      className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-t from-blue-900 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 text-left">
                      <p className="text-green-100  text-4xl translate-y-4 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100 w-full h-full flex flex-col items-center justify-center cursor-pointer ">{info.name}</p>

                      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        Shop Now &rarr;
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>





          </div>
        </div>


        <div className="flex flex-row justify-center w-full border-t border-gray-300 pt-8">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading
                size="xl"
                as="h2"
                className="tracking-[-0.50px] text-center !font-semibold"
              >
                Our Videos
              </Heading>
              <Text
                size=""
                as="p"
                className="text-[black]  text-2xl tracking-[-0.50px] text-center"
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