import React from 'react'
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Img } from "../Img";
import { Helmet } from "react-helmet";


export default function About() {
  return (
    <section className="">
      <Helmet>
        <title>About</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="  md:flex-row items-center">
        {/* Image Section */}
        <div className=" md:w-full mb-6 md:mb-0">
          <img
            src="images/image_slider_1.jpeg"
            alt="About Image"
            className="w-full h-[30rem] object-conatiner rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="md:w-full md:pl-10">
          <h2 className="text-3xl font-bold mt-4 flex justify-center mb-4 text-[#0097CD]">About Us</h2>

          <div className='flex flex-col items-center text-xl font-bold '>
            <span>YP Spices, as the name suggest, is a spice manufacturing company. Established in 2002, we provide all the major spices today in India.</span>
            <span>Our functioning includes cleaning, preparing and packaging under one roof. Providing you with best quality product.
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-4">Our Story</h2>

          <p className="text-gray-800 mb-4">
            Our journey starts from Ghaziabad around 18 years ago. Coming from a small town named Hapur, we starting with selling turmeric and chilli. But with all the hard work, we have expanded our boundries over different states now and have a brand name, well established.

          </p>


        </div>
      </div>
    </section>
  );
}