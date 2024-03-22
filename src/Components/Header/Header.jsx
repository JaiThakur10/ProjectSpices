import React, { useState } from "react";
import { Text } from "../Text";
import { Img } from "../Img";
import { NavLink } from "react-router-dom";

export default function Header({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header {...props} >
      <div className="flex flex-row   items-center w-full mx-auto max-w-[1290px] ">
        <div className="flex items-center">
          <div className="flex-shrink-0 max-[450px]:hidden">
            <Img src="images/ypgold.png" alt="image" className="h-[150px]" />
          </div>
          <div className="hidden md:block justify-right">
            <div className="ml-10 flex items-baseline space-x-4 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                  }  font-rubik text-4xl    hover:text-orange-700 `
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                  }  font-rubik text-4xl   hover:text-orange-700 `
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                  }  font-rubik text-4xl    hover:text-orange-700 `
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                  }  font-rubik text-4xl  hover:text-orange-700 `
                }
              >
                Contact
              </NavLink>

              <div className="dropdown dropdown-hover py-2 pr-4 pl-3   ">
                <div className="tabIndex={0} block py-2 pr-4 duration-200 font-rubik text-4xl cursor-pointer hover:text-orange-700 "
                >Buy</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow   rounded-box w-52 bg-orange-50">
                  <li><NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img className="w-30 h-14" src="images/flipkartlogo.png" alt="" /></NavLink></li>
                  <li><NavLink to={"https://blinkit.com/"}><img className="w-30 h-14" src="images/blinkit.svg" alt="" /></NavLink></li>
                  <li><a><img className="w-30 h-14" src="images/meesho.svg" alt="" /></a></li>
                </ul>
              </div>

              <div>
              <NavLink
                to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
                className={({ isActive }) =>
                  `block py-0 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                  }  font-rubik text-4xl   hover:text-orange-700 `
                }
              >
                
                <Img
                  src="./images/Distribution.png"
                  alt="list_one"
                  className="w-14 h-16 "
                />
                
              </NavLink>
              </div>
              <NavLink
                to="/B2B"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                  }  font-rubik text-4xl   hover:text-orange-700 `
                }
              >

                B2B

              </NavLink>

            </div>
          </div>
        </div>


        {/* button ki div */}
        <div className="  md:hidden items-center">
        <div>
          {isOpen ? null : (
         <img
          src="images/ypgold.png" 
          alt="Company Logo"
          className="h-10 w-auto ml-2 " 
          />
          )}
          </div>
          <div className="">
          <button onClick={toggleNavbar} type="button" className="bg-black-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          </div>
          
        </div>
    </div>

 {/* function for responsive design  */}
      {isOpen && (
        <div className=" md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
           <div className="flex flex-col max-[450px]:flex-row">
           <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                }  font-rubik text-4xl    hover:text-orange-700 `
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                }  font-rubik text-4xl   hover:text-orange-700 `
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                }  font-rubik text-4xl    hover:text-orange-700 `
              }
            >
              About
            </NavLink>
           </div>
           <div className="flex flex-col max-[450px]:flex-row">
           <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                }  font-rubik text-4xl  hover:text-orange-700 `
              }
            >
              Contact
            </NavLink>


            <div className="dropdown dropdown-hover  ">
              <div className="tabIndex={0} block py-2 pr-4 duration-200 font-rubik text-4xl cursor-pointer hover:text-orange-700 "
              >Buy</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow   rounded-box w-52">
                <li><NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img className="w-30 h-14" src="images/flipkartlogo.png" alt="" /></NavLink></li>
                <li><NavLink to={"https://blinkit.com/"}><img className="w-30 h-14" src="images/blinkit.svg" alt="" /></NavLink></li>
                <li><a><img className="w-30 h-14" src="images/meesho.svg" alt="" /></a></li>
              </ul>

            </div>
            <NavLink
              to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
              className={({ isActive }) =>
                `block py-0 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                }  font-rubik text-4xl   hover:text-orange-700 `
              }
            >
              <Img
                src="./images/Distribution.png"
                alt="list_one"
                className="w-14 h-16 "
              />
            </NavLink>
            <NavLink
              to="/B2B"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black-900"
                }  font-rubik text-4xl   hover:text-orange-700 `
              }
            >

              B2B

            </NavLink>
           </div>
          </div>
        </div>
      )}
    </header>
  );
}
