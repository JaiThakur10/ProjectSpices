import React from "react";
import HomepageCardproduct from "../HomepageCardproduct/HomepageCardproduct";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
function Others() {
  const info = [
    { image: "images/amchoor_2.jpeg", name: "Amchoor Powder",s1: '100gm |200gm |500 gm |1kg',content:"Add a tangy twist to your dishes with YPGold's Amchoor Powder. Made from dried and ground green mangoes, our Amchoor Powder brings a refreshing sourness to your culinary creations. Whether sprinkled over salads, chaats, or marinades, YPGold's Amchoor Powder adds a zesty kick that tantalizes your taste buds. Elevate the flavor profile of your dishes with the unique tanginess of YPGold's Amchoor Powder and bring a burst of freshness to every meal." },
    { image: "images/sauf.jpg", name: "Saunf Powder", s1: '100gm |500 gm',content:"Enhance the aroma and flavor of your dishes with YPGold's Saunf Powder. Ground from premium fennel seeds, our Saunf Powder adds a subtle sweetness and a hint of licorice to your culinary creations. Whether used in savory dishes, baked goods, or beverages, YPGold's Saunf Powder brings a unique depth of flavor that elevates your cooking. Sprinkle it over salads, mix it into marinades, or brew it into tea to experience the delightful taste of YPGold's Saunf Powder in every bite." },
    { image: "images/pilimirch.jpeg", name: "Mirchi Pili Powder", s1: '100gm |200gm |500 gm',content:"Add a vibrant kick to your dishes with YPGold's Mirchi Pili Powder. Ground from premium yellow chilies, our Mirchi Pili Powder adds a bold and tangy flavor to your culinary creations. Whether used in curries, marinades, or as a seasoning for snacks, YPGold's Mirchi Pili Powder brings a burst of color and heat to every dish. Elevate your cooking with the intense and aromatic flavor of YPGold's Mirchi Pili Powder, and let your dishes stand out with its vibrant taste."},
    { image: "images/jeera.jpg", name: "Jeera Powder", s1: '50gm |100gm |500 gm' ,content:"Enhance the savory essence of your dishes with YPGold's Jeera Powder. Ground from premium cumin seeds, our Jeera Powder adds a warm and earthy flavor to your culinary creations. Whether used in curries, soups, or as a seasoning for roasted vegetables, YPGold's Jeera Powder brings depth and richness to every bite. Elevate your cooking with the distinctive aroma and taste of YPGold's Jeera Powder, and let its bold flavor elevate your dishes to new heights."},
    { image: "images/saunth.jpg", name: "Saunth Powder", s1: '50gm |100gm |500 gm',content:"Add a touch of warmth and sweetness to your dishes with YPGold's Saunth Powder. Ground from premium dried ginger, our Saunth Powder brings a unique flavor profile to your culinary creations. Whether used in curries, marinades, or desserts, YPGold's Saunth Powder adds depth and complexity to every dish. Elevate your cooking with the aromatic essence of YPGold's Saunth Powder, and let its rich flavor enhance the taste of your favorite recipes."},
    { image: "images/dalia.jpeg", name: "Dalia",s1: '120gm |300 gm',content:"Enjoy the wholesome goodness of YPGold's Dalia. Made from finely ground wheat, our Dalia is a versatile ingredient that can be used in a variety of dishes. Whether you're making savory porridge, nutritious soups, or flavorful desserts, YPGold's Dalia adds texture and nutrition to your meals. Packed with fiber and essential nutrients, YPGold's Dalia is a healthy and delicious choice for any meal of the day. Incorporate it into your diet and experience the goodness of YPGold's Dalia in every bite."},
    { image: "images/kasoori.jpeg", name: "Kasoori Methi",s1: '20gm |50gm |500 gm',content:"Enhance the aroma and flavor of your dishes with YPGold's Kasoori Methi. Made from dried fenugreek leaves, our Kasoori Methi adds a unique and savory taste to your culinary creations. Whether used in curries, sauces, or as a garnish for dishes like paneer tikka or butter chicken, YPGold's Kasoori Methi brings a delightful depth of flavor to every bite. Elevate your cooking with the rich and aromatic essence of YPGold's Kasoori Methi, and let its distinctive taste take your dishes to the next level." },
    { image: "images/pudina.jpeg", name: "Pudina Chutney",s1: '1kg' ,content:"Elevate your dishes with YPGold's Pudina Chutney. Made with fresh mint leaves, our chutney adds a burst of refreshing flavor to snacks, sandwiches, and Indian dishes. Experience the vibrant taste of YPGold's Pudina Chutney, perfect for enhancing your culinary creations."},
    { image: "images/chat.jpg", name: "Chat Masala",s1: '500gm |200 gm |1kg',content:"Elevate your snacks with YPGold's Chat Masala. Bursting with tangy and savory flavors, it adds zest to chaat, fruit salads, and more. Crafted with premium spices, including dried mango powder and cumin, YPGold's Chat Masala brings the vibrant taste of Indian street food to your table." },
    { image: "images/soyachunks_2.jpeg", name: "SoyaChunks ",s1: 'Rs 10/-',content:"Enjoy the hearty goodness of YPGold's Soya Chunks Moti. Packed with protein and nutrients, our Soya Chunks Moti is a versatile ingredient perfect for curries, stir-fries, and salads. With its tender texture and rich flavor, YPGold's Soya Chunks Moti adds wholesome goodness to your meals." },
    { image: "images/mini_soya_3.jpeg", name: "Mini SoyaChunks",s1: 'Rs 10/-',content:"Discover the versatility of YPGold's Soya Chunks Mini. Packed with protein and nutrients, our Soya Chunks Mini are perfect for curries, stir-fries, and snacks. With their small size and tender texture, YPGold's Soya Chunks Mini add wholesome goodness to every dish." },
   
  
  ];

  return (
    <>
   <div className="mx-auto grid w-full items-center  ">
        {info.map((info, i) => (
          <div key={i} className={`w-full h-[550px] max-[450px]:h-[700px] ${i % 2 === 0 ? 'bg-[#F0F0F0] ' : 'bg-[white]'}  `}>
            <div key={i} className={` relative w-full flex max-[450px]:flex max-[450px]:flex-col-reverse max-[450px]: justify-center gap-12 ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="justify-start w-1/3 mt-[6.5rem] max-[450px]:w-full max-[450px]:mt-[-2rem] max-[450px]:py-[-2rem]">
                <div className="text-3xl"><h1 className="max-[450px]:text-black-900">{info.name}</h1></div>
                <div className="mt-3 "><p className="max-[450px]:text-black-900">{info.content}</p></div>
                <div className="flex max-[450px]:flex-col max-[450px]:mt-0 mt-3">
                <div className="mt-2.5 flex-col  space-x-2 min-[320px]:w-70">
                      <h3 className="text-bold text-black-900 max-[450px]:text-black-900">Available Sizes</h3>
                      <h4 className="text-bold max-[450px]:text-black-900">{info.s1}</h4>
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
    </>
  );
}

export default Others;
