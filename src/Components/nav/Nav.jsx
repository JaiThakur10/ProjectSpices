import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Img } from "../Img";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#0097CC] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* Your logo or brand */}
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        <div className="flex lg:flex-row items-center justify-end">
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_instagram.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_facebook.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_twitter.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_tiktok.svg" />
                </Button>
              </div>
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              ORDER ONLINE
            </button>
          
          <div className="mt-4 lg:inline-block lg:mt-0 justify-end">
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

