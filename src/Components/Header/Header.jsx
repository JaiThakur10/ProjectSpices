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
            <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" >Buy</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow   rounded-box w-52">
    <li><NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img className="w-30 h-14" src="images/flipkartlogo.png" alt="" /></NavLink></li>
    <li><NavLink to={"https://blinkit.com/"}><img className="w-30 h-14" src="images/blinkit.svg" alt="" /></NavLink></li>
    <li><a><img className="w-30 h-14" src="images/meesho.svg" alt="" /></a></li>
  </ul>
</div>
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
            to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "fill-orange-700" : "fill-black-900"
              }  font-rubik    lg:hover:bg-transparent lg:border-0 hover:fill-orange-700 lg:p-0`
            }
          >
            
              <svg className="fill-current text-orange-700" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            
          </NavLink>
        </div>
      </div>
    </header>
  );
}
