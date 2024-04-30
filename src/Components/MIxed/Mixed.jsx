import React from "react";
import HomepageCardproduct from "../HomepageCardproduct/HomepageCardproduct";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
function Mixed() {
    const info = [
        { image: "images/garam_3.jpg", name: "Garam Masala Special", s1: '200gm |500 gm |1kg',content:"Experience the exquisite blend of flavors with YPGold's Garam Masala Special. Carefully crafted with a unique combination of aromatic spices, our Garam Masala Special adds depth and richness to your dishes. Whether you're cooking savory curries, flavorful biryanis, or aromatic stews, YPGold's Garam Masala Special elevates your culinary creations to new heights. Enhance the taste and aroma of your meals with the distinctive flavor profile of YPGold's Garam Masala Special, and delight your senses with every bite."},
        { image: "images/samosa_2.jpeg", name: "Salad Samosa Masala", s1: '50gm | 500gm',content:"Transform your salads into culinary delights with YPGold's Salad Samosa Masala. Crafted with a blend of aromatic spices and herbs, our Salad Samosa Masala adds a burst of flavor to your salad creations. Whether you're tossing together a refreshing green salad or a hearty grain bowl, YPGold's Salad Samosa Masala brings a taste of India to every bite. Elevate your salads with the irresistible flavor of YPGold's Salad Samosa Masala and turn simple greens into a gourmet experience."},
      
      ];
  return (
    <div>
     <div className="mx-auto grid w-full items-center  ">
        {info.map((info, i) => (
          <div key={i} className={`w-full h-[550px] max-[450px]:h-[700px] ${i % 2 === 0 ? 'bg-[#F0F0F0] ' : 'bg-[white]'}  `}>
            <div key={i} className={` relative w-full flex max-[450px]:flex max-[450px]:flex-col-reverse max-[450px]: justify-center gap-12 ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="justify-start w-1/3 mt-[6.5rem] max-[450px]:w-full max-[450px]:mt-[-2rem] max-[450px]:py-[-2rem]">
                <div className="text-3xl"><h1>{info.name}</h1></div>
                <div className="mt-3 "><p>{info.content}</p></div>
                <div className="flex max-[450px]:flex-col max-[450px]:mt-0 mt-3">
                <div className="mt-2.5 flex-col  space-x-2 min-[320px]:w-70">
                      <h3 className="text-bold text-black-900">Available Sizes</h3>
                      <h4 className="text-bold">{info.s1}</h4>
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
