import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../Text";
import Category from "../Category/Category";
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

        <Category/>

        {/*blend basic slider */}

        

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
            
          </div>
        </div>
      </div>
    </>
  );
}
