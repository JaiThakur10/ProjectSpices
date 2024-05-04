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
import OurVideos from "../OurVideos/OurVideos";
import CVideos from "../CVideos/CVideos";


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
        <div className="text-[#0097CD] w-full  max-[450px]: mx-auto max-[450px]:w-1/2 text-4xl flex flex-col mt-[-5rem] max-[450px]:flex  bg-white-A700">
          <div className=" min-[450px]:flex min-[450px]:text-3xl min-[450px]:justify-center ">We believe spices are the backbone of Indian kitchens and to preserve </div>
          <div className="min-[450px]:flex min-[450px]:text-3xl min-[450px]:justify-center ">this, we are satisfied with nothing but perfect ingredients only.</div>

        </div>

        <Category />

        {/*blend basic slider */}



        {/* video slider */}

        {/* <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Video Carousel</h1>
         <VideoSlider videoPaths={videoPaths} />
        </div> */}
        <VideoSlider />
        {/* video slider closed */}


        <div className="flex flex-row justify-center  w-screen ">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading
                size="xl"
                as="h2"
                className="tracking-[-0.50px] text-center max-[450px]:text-black-900 "
              >
                Sneek Peek into the world of Spices
              </Heading>
              <div className=" w-screen ">
                <OurVideos />


              </div>


            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center  w-screen ">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading
                size="xl"
                as="h2"
                className="tracking-[-0.50px] text-center max-[450px]:text-black-900"
              >
                Join Us on Instagram
              </Heading>

              <div className=" w-screen ">
                <CVideos />


              </div>


            </div>
          </div>
        </div>


      </div>
    </>
  );
}
