import React from "react";
import { Text } from "../Text";
import { Img } from "../Img";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { NavLink } from "react-router-dom";

export default function Footer({ ...props }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: '' // This enables smooth scrolling
    });
  };

  return (
    <footer {...props}>
      <div className="flex flex-row justify-end w-full mt-[100px] p-14 bg-[white] border-t-2 border-solid ">
        <div className="flex flex-col items-center justify-start w-full gap-[148px] mx-auto max-w-[1301px]">
          <div className="flex flex-col md:flex-row justify-center items-start w-full gap-12">
            <div className="flex flex-col items-start justify-start w-full md:w-[28%] gap-2 md:mr-10">
              <div className="!text-[#0097CD] tracking-[-0.50px] border-b-2 border-[#E5E5E5] w-1/2 ">ABOUT US</div>
              <NavLink onClick={scrollToTop} to="/about" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>About YP GOLD</NavLink>
              <NavLink onClick={scrollToTop} to="/blog" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>Our Promise</NavLink>
              <NavLink onClick={scrollToTop} to="/about" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>Contact Us</NavLink>
              <NavLink onClick={scrollToTop} to="/" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}><img className="h-20 w-20" src="images/ypgold.png" alt="" /></NavLink>
            </div>
            <div className="flex flex-col items-start justify-start w-full md:w-[17%] gap-2 md:mr-20">
              <div className="!text-[#0097CD] tracking-[-0.50px] border-b-2 border-[[#E5E5E5] w-full mr-20 ">PRODUCT RANGE</div>
              <div className="flex flex-col items-start justify-start">
                <NavLink onClick={scrollToTop} to="/blend" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>Blend/Straight Spices</NavLink>
                <NavLink onClick={scrollToTop} to="/mixed" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>Mixed Spices</NavLink>
                <NavLink onClick={scrollToTop} to="/whole" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>Whole Spices</NavLink>
                <NavLink onClick={scrollToTop} to="/salts" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>Salts</NavLink>
                <NavLink onClick={scrollToTop} to="/other" className={({ isActive }) => `block duration-200 text-black-900 font-rubik text-xl hover:text-[#0097CC] transform hover:translate-x-2`}>Others</NavLink>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full md:w-[17%] gap-2 md:ml-20">
              <div className="!text-[#0097CD] tracking-[-0.50px] border-b-2 border-[[#E5E5E5] w-full ">MEDIA</div>
              <div className="flex flex-row items-start justify-start gap-6">
                <a className="inline-block transition-transform transform hover:scale-110" href="https://www.instagram.com/"><Img src="images/instagram.png" /></a>
                <a className="inline-block transition-transform transform hover:scale-110" href="https://www.facebook.com/"><Img src="images/facebook.png" /></a>
                <a className="inline-block transition-transform transform hover:scale-110" href="https://twitter.com/?lang=en"><Img src="images/twitter.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full mt-[50px] p-6 border-t-2 border-solid bg-[#0097CD] "></div>
    </footer>
  );
}
