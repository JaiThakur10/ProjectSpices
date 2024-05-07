import React from 'react'
import { Heading } from "../Heading";
import { Text } from "../Text";

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
            src="images/image_slider_7.jpeg"
            alt="About Image"
            className="w-full h-[30rem] max-[450px]:h-[15rem] object-conatiner rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="md:w-full md:pl-10">
          <h2 className="text-3xl font-bold mt-4 flex justify-center mb-4 text-[#0097CD]">About Us</h2>

         

          <p className=" text-black-900 font-bold mb-4">
            Welcome to YP Gold Spices, your premier destination for premium-quality spices since 2002. As a seasoned spice manufacturing company, we take pride in offering a wide array of the finest spices available in India today.
            <br /> <br /> <span>Our journey began with a vision to deliver excellence in every aspect of spice production. From cleaning to preparation and packaging, every step of our process is meticulously executed under one roof to ensure the highest standards of quality and freshness. </span>
            <br /> <br />
            <span>At YP Gold Spices, we understand the significance of spices in culinary experiences. Hence, we source only the finest raw materials and employ advanced techniques to preserve their natural flavors and aroma. Our commitment to quality extends to every batch we produce, guaranteeing a delightful and authentic taste in every dish.</span>
            <br /> <br />
            <span>Customer satisfaction is at the core of our values. We strive to exceed your expectations by consistently delivering products that not only enhance your cooking but also elevate your dining experiences. Whether you're a professional chef or a home cook, YP Gold Spices is your trusted partner for all your seasoning needs.</span>
            <br /> <br />
            <span>Experience the essence of purity, freshness, and flavor with YP Gold Spices - where quality meets perfection in every sprinkle.</span>
          </p>


        </div>
      </div>
    </section>
  );
}