import React from "react";
import HomepageCardproduct from "../HomepageCardproduct/HomepageCardproduct";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
function Mixed() {
    const info = [
        { image: "images/garam.jpg", name: "Garam Powder Special", price1: 70, price2: 160,size1:200,size2:500},
        { image: "images/Meat Masala.jpg", name: "Meat Masala", price1: 45, price2: 90,size1:100,size2:200 },
        { image: "images/chicken.jpg", name: "Chicken Masala", price1: 50, price2: 200,size1:100,size2:500 },
        { image: "images/kitchen.jpg", name: "Kitchen King", price1: 90, price2: 400,size1:100,size2:500 },
        { image: "images/sabji.jpg", name: "Sabzi Masala", price1: 70, price2: 320,size1:100,size2:500 },
        { image: "images/chat.jpg", name: "Chat Masala", price1: 12, price2: 24 ,size1:120,size2:300},
        { image: "images/mixed.jpeg", name: "Chhole Masala", price1: 55, price2: 400 ,size1:50,size2:500},
        { image: "images/Chana Masala.jpg", name: "Chana Masala", price1: 40, price2: 90 ,size1:200,size2:500},
        { image: "images/Shahi paneer.jpg", name: "Shahi Paneer Masala", price1: 180, price2: "" ,size1:1000,size2:""},
      
      ];
  return (
    <div>
     <div className="mx-auto grid w-full items-center  ">
        {info.map((info, i) => (
          <div key={i} className={`w-full h-[550px] max-[450px]:h-[700px] ${i % 2 === 0 ? 'bg-[#F0F0F0] ' : 'bg-[white]'}  `}>
            <div key={i} className={` relative w-full flex max-[450px]:flex max-[450px]:flex-col-reverse max-[450px]: justify-center gap-12 ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="justify-start w-1/3 mt-[6.5rem] max-[450px]:w-full max-[450px]:mt-[-2rem] max-[450px]:py-[-2rem]">
                <div className="text-3xl"><h1>{info.name}</h1></div>
                <div className="mt-3 "><p>YP Gold Mixed spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. Mixed spices do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.</p></div>
                <div className="flex max-[450px]:flex-col max-[450px]:mt-0 mt-3">
                  <div className="mt-2.5 flex  space-x-2 min-[320px]:w-70">
                    <div className="  flex cursor-pointer justify-center items-center text-center rounded-md border-solid border-2 border-[#0097CC] mx-2 h-10 px-3 text-xs font-medium min-[320px]:text-xxs">
                      <h3>{info.size1}gm </h3>
                    </div>
                    <div className="flex items-center cursor-pointer rounded-md border-solid border-2 border-[#0097CC]  px-3 h-10 text-xs font-medium min-[320px]:text-xxs">
                      {info.size2}gm
                    </div>
                  </div>

                  <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative max-[450px]:mt-2">
                    <Button class="flex items-center text-[#0097CC] rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2 w-auto">
                      Online order <img src="images/img_arrow_down.svg" alt="" class="ml-2 " />
                    </Button>

                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow h-[8rem] max-[450px]:w-[25rem] w-[32rem] bg-white-A700 grid grid-cols-3 gap-10 p-4 ">
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]"><NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img className="" src="images/flipkartlogo.png" alt="" /></NavLink></li>
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]"><NavLink to={"https://blinkit.com/"}><img className="" src="images/blinkit.svg" alt="" /></NavLink></li>
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC]"><NavLink to={"https://www.meesho.com/"}><img className="w-60 h-[4rem]" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png" alt="" /></NavLink></li>
                    </ul>

                  </div>

                </div>
              </div>
              <div className="mt-[6.5rem] max-[450px]:mt-3"><img className="h-72 w-72 mix-blend-multiply" src={info.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mixed
