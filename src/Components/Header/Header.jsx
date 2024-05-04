import React, { useState } from "react";
import { Img } from "../Img";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { LocateIcon, Pin, Search } from "lucide-react";

export default function Header({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <header {...props}>
      <div className="flex flex-row items-center w-full max-w-[12500px] bg-[#FFFFFF]">
        <div className="flex justify-between min-[450px]:w-full h-[100px]">
          <div className="flex-shrink-0 max-[450px]:hidden ml-24">
            <NavLink to="/"> <Img src="images/ypgold.png" alt="image" className="h-[120px] w-full" /> </NavLink>
          </div>
          <div className="hidden md:flex  pb-0 py-0 items-end relative mr-24 flex-wrap">
            {/* upper div */}
            <div className="flex  justify-center  gap-2 mb-4 h-1/3 w-[75%] ml-auto  items-center">
          
            <Pin className="mt-6 h-4 w-4 ml-20"/><input  type="text"  
                placeholder="Hi , Enter your Pincode"
                className="flex items-start justify-start w-[1/4] h-10 mt-6 pl-4 border-t-0 border-b-0 border-l-0 border-2 border-r-grey-600"
                />
              <div className="dropdown dropdown-hover pr-4 pl-3 relative ">
               
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
              <a className=" mt-6" href="https://www.instagram.com/ypgold_spices/"><Img src="images/instagram.png" /></a>
              <a className=" mt-6" href="https://m.facebook.com/ypspices?mibextid=LQQJ4d"><Img src="images/facebook.png" /></a>
              <a className=" mt-6" href="https://youtube.com/@radhikainternational2594?si=2hhqSq4N7gEpfI1y"><Img src="images/youtube.png" /></a>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `block mt-8 ml-4 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl   hover:text-[#0097CC] `
                }
              >
                <button
                  type="button"
                  className="bg-yellow-500 text-white-A700 px-2 rounded-full"
                >
                  CONTACT US
                </button>
                
              </NavLink>
              <Search className="mt-6"/>
            </div>
            {/* upper div closed */}
            <div className=" flex items-baseline space-x-0 mb-0 ml-auto ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl    hover:text-[#0097CC] `
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/BLOG"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl   hover:text-[#0097CC]`
                }
              >
                BLOG
              </NavLink>
              <NavLink
                to="/ABOUT"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl    hover:text-[#0097CC] `
                }
              >
                ABOUT
              </NavLink>
              <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative " onMouseLeave={closeDropdown}>
                <div className="tabIndex={0} block py-2 pr-4 duration-200 font-rubik text-xl cursor-pointer hover:text-[#0097CC] text-black-900 " onMouseEnter={toggleDropdown}
                >PRODUCT RANGE</div>
                <ul tabIndex={0} className={`dropdown-content z-[1] menu shadow h-[28rem] w-[30rem] bg-white-A700 grid grid-cols-3 gap-10 p-4 ${isOpen ? 'block' : 'hidden'}`} onMouseLeave={closeDropdown}>
                  <p> <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Blend"}><img className="bg-[white] mix-blend-multiply" src="images/blend_1.jpeg" alt="" /></NavLink></li>Blend Spices</p>
                  <p> <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Basic"}><img className="bg-[white] mix-blend-multiply" src="images/basic.jpeg" alt="" /></NavLink></li>Basic Spices</p>
                  <p> <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Mixed"}><img className="bg-[white] mix-blend-multiply" src="images/mixed_2.jpeg" alt="" /></NavLink></li>Mixed Spices</p>
                  <p> <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Others"}><img className="bg-[white] mix-blend-multiply" src="images/others.jpeg" alt="" /></NavLink></li>Others Spices</p>
                  <p> <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Salts"}><img className="bg-[white] mix-blend-multiply" src="images/salts.jpeg" alt="" /></NavLink></li>Salts</p>
                  <p> <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Pooja"}><img className="bg-[white] mix-blend-multiply h-[4rem]" src="images/pooja.jpeg" alt="" /></NavLink></li>Pooja Samagri</p>
                  <p> <li className="w-28 h-[6rem] border border-solid text-[white] border-gray-500 "><NavLink to={"/Hing"}><img className="bg-[white] mix-blend-multiply h-[4rem]" src="images/hing_2.jpeg" alt="" /></NavLink></li>Hing (asafoetida)</p>
                </ul>
              </div>
              <div>
                <NavLink
                  to="/Distribution"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                    }  font-rubik text-xl   hover:text-[#0097CC] `
                  }
                >
                  <button
                    type="button"
                    className="bg-[#0097CC] text-white-A700 px-2 rounded-full"
                  >
                    Get Distributorship?
                  </button>
                </NavLink>
              </div>
              <NavLink
                to="/B2B"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0097CC]" : "text-black-900"
                  }  font-rubik text-xl   hover:text-[#0097CC] `
                }
              >
               <button
                    type="button"
                    className="bg-[#0097CC] text-white-A700 px-2 rounded-full"
                  >
                    B2B
                  </button>
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
            <button onClick={toggleNavbar} type="button" className="bg-[#0097CD] mt-3 inline-flex items-center justify-center p-2 rounded-md text-white-A700 hover:text-white hover:bg-[#0097CD] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-900 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6  bg-[#0098CD]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* function for responsive design  */}
      {isOpen && (
        <div className="md:hidden top-0 right-0 bottom-0 left-0  flex justify-center items-center bg-white-A700">
          <div className="  p-4 w-full">
            <div className="flex flex-row m-auto justify-center items-center">
              <div className="flex flex-col space-y-4 border-r-2 px-4 border-solid border-[#0097CD]">
                <NavLink
                  to="/"
                  className="text-black-900 font-rubik text-xl hover:text-[#0097CD] duration-200"
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/BLOG"
                  className="text-black-900 font-rubik text-xl hover:text-[#0097CD] duration-200"
                >
                  BLOG
                </NavLink>
                <NavLink
                  to="/ABOUT"
                  className="text-black-900 font-rubik text-xl hover:text-[#0097CD] duration-200"
                >
                  ABOUT
                </NavLink>

                <NavLink
                  to="/Distribution"
                  className="text-black-900 font-rubik text-xl hover:text-[#0097CD] duration-200"
                >
                  <button
                    type="button"
                    className=" text-black-900  sm:py-0 sm:px-0 md:py-0 md:px-0 text-1xl"
                  >
                    Distributorship
                  </button>
                </NavLink>
                <NavLink
                  to="/B2B"
                  className="text-black-900 font-rubik text-xl hover:text-[#0097CD] duration-200"
                >
                  B2B
                </NavLink>

                <NavLink
                  to="/Contact"
                  className="text-black-900 font-rubik text-xl hover:text-[#0097CD] duration-200"
                >
                  Contact Us
                </NavLink>
              </div>
              {/* PRODUCT RANGE */}
              <div className="flex flex-col space-y-4 ml-9">

                <p className="text-xl text-[#0097CD] font-rubik ">PRODUCT RANGE</p>
                <div className="mt-[0px] flex flex-col py-0 p-2 m-auto">
                  <NavLink to="/Blend" className="text-black-900 mb-1 font-rubik  hover:text-[#0097CD] duration-200 text-2xl" >Blended</NavLink>
                  <NavLink to="/Basic" className="text-black-900 mb-1 font-rubik text-xl hover:text-[#0097CD] duration-200" >Basic</NavLink>
                  <NavLink to="/Mixed" className="text-black-900 mb-1 font-rubik text-xl hover:text-[#0097CD] duration-200" >Mixed</NavLink>
                  <NavLink to="/Salts" className="text-black-900 mb-1 font-rubik text-xl hover:text-[#0097CD] duration-200" >Salts</NavLink>
                  <NavLink to="/Pooja" className="text-black-900 mb-1 font-rubik text-xl hover:text-[#0097CD] duration-200" >Pooja Samagri</NavLink>
                  <NavLink to="/Others" className="text-black-900 mb-1  font-rubik text-xl hover:text-[#0097CD] duration-200" >Others</NavLink>
                  <NavLink to="/Hing" className="text-black-900 mb-1 font-rubik text-xl hover:text-[#0097CD] duration-200" >Hing(asafoetida)</NavLink>
                </div>


              </div>

            </div>
          </div>
        </div>
      )}


    </header>
  );
}