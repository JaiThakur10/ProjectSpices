import React from "react";
import { Text } from "../Text";
import { Img } from "../Img";
import { NavLink } from "react-router-dom";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1290px] ">
        <Img src="images/ypgold.png" alt="image" className="h-[150px]" />
        <div className="flex flex-row justify-between items-center w-[39%]">
          <div className="flex flex-row justify-start items-center gap-2.5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-black-900"
                }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </div>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-black-900"
              }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-black-900"
              }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-black-900"
              }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-black-900"
              }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Store
          </NavLink>
        </div>
        <div className="flex flex-row justify-between w-auto gap-[30px] ">
          <NavLink
            to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-black-900"
              }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            <Img
              src="images/img_list_black_900.svg"
              alt="list_one"
              className="h-6 w-6 "
            />
          </NavLink>
          <NavLink
            to="/B2B"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-black-900"
              }  font-rubik text-4xl   lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
              B2B
            
          </NavLink>
        </div>
      </div>
    </header>
  );
}
