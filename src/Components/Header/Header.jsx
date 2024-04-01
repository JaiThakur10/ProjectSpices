import React, { useState } from "react";
import { Img } from "../Img";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";

export default function Header({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header {...props}>
      <div className="flex flex-row items-center w-full mx-auto max-w-[12500px] bg-[#FFFFFF]">
        <div className="flex justify-between min-[450px]:w-full">
          <div className="flex-shrink-0 max-[450px]:hidden m-auto">
            <Img src="images/ypgold.png" alt="image" className="h-[150px]" />
          </div>
          <div className="hidden md:flex pb-0 py-0 items-end relative flex-wrap">
            {/* upper div */}
            <div className="flex justify-end gap-2 w-1/2 m-auto  items-center">
              <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative items-baseline">
              <button class="flex items-center text-[#0097CC] rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-1 w-auto mt-8">
                    Online order{" "}
                    <img src="images/img_arrow_down.svg" alt="" class="ml-2 " />
                  </button>
                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow h-[10rem] w-[32rem] bg-white-A700 grid grid-cols-3 gap-10 p-4  ">
                  <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]"><NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img className="" src="images/flipkartlogo.png" alt="" /></NavLink></li>
                  <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]"><NavLink to={"https://blinkit.com/"}><img className="" src="images/blinkit.svg" alt="" /></NavLink></li>
                  <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]"><NavLink to={"https://www.meesho.com/"}><img className="w-60 h-[4rem]" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png" alt="" /></NavLink></li>
                </ul>
              </div >
              <a className=" mt-6" href="https://www.instagram.com/"><Img  src="images/instagram.png" /></a>
              <a className=" mt-6" href="https://www.facebook.com/"><Img src="images/facebook.png" /></a>
              <a className=" mt-6" href="https://twitter.com/?lang=en"><Img src="images/twitter.png" /></a>
            </div>
            {/* upper div closed */}
            <div className=" flex items-baseline space-x-4 mb-0 m-auto ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl    hover:text-[#0097CC] `
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl   hover:text-[#0097CC]`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl    hover:text-[#0097CC] `
                }
              >
                About
              </NavLink>
              <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative ">
                <div className="tabIndex={0} block py-2 pr-4 duration-200 font-rubik text-2xl cursor-pointer hover:text-[#0097CC] "
                >Buy</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow h-[18rem] w-[22rem] bg-white-A700 grid grid-cols-2 gap-10 p-4 ">
                  <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Blend"}><img className="" src="images/img_turmeric.jpeg" alt="" /></NavLink></li>
                  <li className="w-28 h-[6rem] border border-solid border-gray-500 "><NavLink to={"/"}><img className="" src="images/blinkit.svg" alt="" /></NavLink></li>
                  <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]"><NavLink to={"/Blend"}><img className="w-60 h-[4rem]" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png" alt="" /></NavLink></li>
                </ul>
              </div>
              <div>
                <NavLink
                  to="/B2B"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                    }  font-rubik text-2xl   hover:text-[#0097CC] `
                  }
                >
                  <button
                    type="button"
                    className="bg-[#0097CC] text-white-A700 px-2 rounded-full"
                  >
                    Get Distribution?
                  </button>
                </NavLink>
              </div>
              <NavLink
                to="/B2B"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl   hover:text-[#0097CC] `
                }
              >
                B2B
              </NavLink>
            </div>
          </div>
        </div>
        {/* button ki div */}
        <div className="md:hidden items-centre w-full flex justify-between">
          <div>
            {isOpen ? null : (
              <img
                src="images/ypgold.png"
                alt="Company Logo"
                className="h-20 w-auto ml-2 "
              />
            )}
          </div>
          <div className="mr-2 mt-2">
            <button onClick={toggleNavbar} type="button" className="bg-black-900 inline-flex items-center justify-center p-2 rounded-md text-white-A700 hover:text-white hover:bg-black-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-900 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <div className="flex flex-col max-[450px]:flex-row">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl   hover:text-[#0097CC]`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl   hover:text-[#0097CC] `
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl    hover:text-[#0097CC] `
                }
              >
                About
              </NavLink>
            </div>
            <div className="flex flex-col max-[450px]:flex-row">

              <div className="relative">
                <div className="block py-2 pr-4 duration-200 font-rubik text-2xl cursor-pointer hover:text-[#0097CC]">Buy</div>
                {isOpen && (
                  <ul className="absolute dropdown-content z-10 top-full left-0 w-52 bg-white border border-gray-300 shadow rounded-box p-2">
                    <li><a href="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img className="w-30 h-14" src="images/flipkartlogo.png" alt="" /></a></li>
                    <li><a href="https://blinkit.com/"><img className="w-30 h-14" src="images/blinkit.svg" alt="" /></a></li>
                    <li><a href="https://www.meesho.com/"><img className="w-30 h-14" src="images/meesho.svg" alt="" /></a></li>
                  </ul>
                )}
              </div>
              <NavLink
                to="/B2B"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl   hover:text-[#0097CC] `
                }
              >
                <button
                  type="button"
                  className="bg-[#0097CC] text-white-A700 px-2 rounded-full sm:py-0 sm:px-0 md:py-0 md:px-0 text-1xl"
                >
                  Get Distribution?
                </button>
              </NavLink>
              <NavLink
                to="/B2B"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-2xl   hover:text-[#0097CC]`
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

