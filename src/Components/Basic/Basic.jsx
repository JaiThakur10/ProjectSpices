import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
function Basic() {
  const info = [
    { image1: "images/haldi_2.jpeg", image2: 'images/haldi_back_2.png', name: "Turmeric Powder", s1: '50gm |100gm |200gm |500 gm |1kg', content: "Harness the vibrant color and earthy flavor of YPGold's Turmeric Powder in your cooking. Sourced from the finest turmeric roots, our Turmeric Powder adds a warm and aromatic touch to your dishes. Whether used as a seasoning, a natural dye, or for its health benefits, YPGold's Turmeric Powder brings depth and richness to your culinary creations. With its versatile nature and distinctive flavor, YPGold's Turmeric Powder is a staple in every kitchen, promising to elevate both taste and wellness in your meals." },
    { image1: "images/coriander_front.png", image2: 'images/coriander_back.jpeg', name: "Coriander Powder", s1: '50gm |100gm |200gm |500 gm |1kg', content: "Enhance the flavors of your dishes with the aromatic richness of YPGold's Coriander Powder. Carefully ground from premium coriander seeds, our Coriander Powder adds a mild and citrusy flavor to your culinary creations. Whether sprinkled over curries, soups, or grilled meats, YPGold's Coriander Powder brings depth and complexity to every bite. With its versatile nature and distinctive aroma, YPGold's Coriander Powder is a must-have ingredient in any kitchen, promising to elevate the taste of your dishes to new heights." },
    { image1: "images/chilligold_1.png", image2: 'images/chilligold_back.jpeg', name: "Mirch Powder Gold", s1: '100gm |200gm |500 gm |1kg', content: "Spice up your dishes with the fiery heat and vibrant color of YPGold's Mirch Powder Gold. Made from premium-quality red chilies, our Mirch Powder Gold adds a bold and intense flavor to your culinary creations. Whether used sparingly for a hint of heat or generously for a fiery kick, YPGold's Mirch Powder Gold promises to elevate the taste of your dishes to new heights. With its rich color and robust flavor, YPGold's Mirch Powder Gold is the perfect choice for adding depth and warmth to your favorite recipes." },
    { image1: "images/redchilli.jpeg", image2: 'images/chilligold_back.jpeg', name: "Mirch Powder/PR", s1: '50gm |100gm |200gm |500 gm', content: "Experience the perfect balance of heat and flavor with YPGold's Mirch Powder/PR. Carefully selected and ground from premium-quality chilies, our Mirch Powder/PR adds a bold and distinctive taste to your dishes. Whether you're cooking curries, marinades, or spicy snacks, YPGold's Mirch Powder/PR delivers the right amount of spice to tantalize your taste buds. Elevate your culinary creations with the intense flavor and vibrant color of YPGold's Mirch Powder/PR, and let your dishes stand out with every savory bite." },
    { image1: "images/jwala_3.jpg", image2: 'images/jwala_back_2.png', name: "Mirch Powder Jwala", s1: '100gm |200gm |500 gm |1kg', content: "Intensify the heat in your dishes with YPGold's Mirch Powder Jwala. Ground from the fiery Jwala chilies, our Mirch Powder Jwala adds a bold and pungent flavor to your culinary creations. Whether you're cooking spicy curries, marinades, or sauces, YPGold's Mirch Powder Jwala provides the perfect level of heat to excite your taste buds. Elevate your dishes with the intense and aromatic punch of YPGold's Mirch Powder Jwala, and bring a fiery kick to every meal." },

  ];

  return (
    <>
      <div className="mx-auto grid w-full items-center  ">
        {info.map((info, i) => (
          <div key={i} className={`w-full h-[550px] max-[450px]:h-[900px] ${i % 2 === 0 ? 'bg-[#F0F0F0] ' : 'bg-[white]'}  `}>
            <div key={i} className={` relative w-full flex max-[450px]:flex max-[450px]:flex-col-reverse max-[450px]: justify-center gap-12 ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} `}>
              <div className="justify-start w-1/3 mt-[6.5rem] max-[450px]:w-full max-[450px]:mt-[-2rem] max-[450px]:py-[-2rem]">
                <div className="text-3xl"><h1 className="max-[450px]:text-black-900 text-black-900">{info.name}</h1></div>
                <div className="mt-3 "><p className="max-[450px]:text-black-900 text-black-900">{info.content}</p></div>
                <div className="flex max-[450px]:flex-col max-[450px]:mt-0 mt-3">
                  <div className="mt-2.5 flex-col  space-x-2 min-[320px]:w-70">
                    <h3 className="text-bold text-black-900 max-[450px]:text-black-900">Available Sizes</h3>
                    <h4 className="text-bold max-[450px]:text-black-900 text-black-900">{info.s1}</h4>
                  </div>

                  <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative max-[450px]:mt-2">
                    <Button class="flex items-center text-[#0097CC]  rounded-full border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2 w-auto">
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

              {/* carousel */}
                <div className="w-64 h-1/2 mt-8 carousel rounded-box">
                  <div  className="carousel-item w-full">
                    <img src={info.image1} className="w-full mix-blend-multiply" alt="Tailwind CSS Carousel component" />
                  </div>
                  <div  className="carousel-item w-full">
                    <img src={info.image2} className="w-full mix-blend-normal" alt="Tailwind CSS Carousel component" />
                  </div>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Basic;
