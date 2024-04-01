import React from "react";
import { Text } from "../Text";
import { Img } from "../Img";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { NavLink } from "react-router-dom";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      
      <div className="flex flex-row justify-end w-full mt-[100px]  p-14 bg-[white]  border-solid border-2">
        <div className="flex flex-col items-center justify-start w-full gap-[148px] mx-auto max-w-[1301px]">
          <div className="flex flex-row justify-center items-start w-full gap-12">
            <div className="flex flex-col items-start justify-start w-[28%] gap-2 mr-10  ">
            <div className="!text-[#0097CD] tracking-[-0.50px] border-b-2 border-[#E5E5E5] w-1/2 ">ABOUT US</div>
            <NavLink
                to="/"
                className={({ isActive }) =>
                  `block  duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl    hover:text-[#0097CC] `
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block  duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl   hover:text-[#0097CC]`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl    hover:text-[#0097CC] `
                }
              >
                About
              </NavLink>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%]  gap-2 mr-20">
            <div className="!text-[#0097CD] tracking-[-0.50px] border-b-2 border-[[#E5E5E5]  w-full mr-20 ">PRODUCT RANGE</div>
              <div className="flex flex-col items-start justify-start">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl    hover:text-[#0097CC] `
                }
              >
                About
              </NavLink>
                
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] gap-2 ml-20">
            <div className="!text-[#0097CD] tracking-[-0.50px] border-b-2 border-[[#E5E5E5]  w-1/2 ">MEDIA</div>
              <div className="flex flex-col items-start justify-start gap-6">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl    hover:text-[#0097CC] `
                }
              >
                About
              </NavLink>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
    </footer>
  );
}