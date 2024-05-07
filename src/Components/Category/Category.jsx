import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Category() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };
  const slides = [
    { name: "Basic Spices", bg_image: "images/basic_cat.jpeg", link: "/Basic", content: "Spices are the culinary superheroes that add depth, flavor, and aroma to our dishes. From the warmth of cinnamon to the fiery kick of chili powder, each spice brings its unique character to the table. Pepper, with its versatile heat, is a staple in most kitchens, while cumin lends a smoky earthiness to savory dishes. Turmeric not only paints dishes a vibrant hue but also offers anti-inflammatory benefits. Paprika adds a mild sweetness, while ginger introduces a zesty punch. Together, these basic spices transform ordinary meals into extraordinary culinary experiences, delighting our taste buds and igniting our senses.", img: "images/basic.jpeg" },
    { name: "Straight/Blend spices", bg_image: "images/blend_cat.jpeg", link: "/Blend", content: "Blended spices are culinary magic, combining a mix of spices to create complex flavors. From garam masala's warmth to Cajun seasoning's zest, they elevate dishes with ease. With just a sprinkle, they transform meals into culinary delights, saving time and adding depth to every bite.", img: "images/blend_1.jpeg" },
    { name: "Mixed Spices", bg_image: "images/mixed_cat.jpeg", link: "/Mixed", content: "Mixed spices, often called spice blends or seasoning mixes, are culinary shortcuts to flavor paradise. These blends blend a variety of spices in precise proportions to create well-balanced and complex flavor profiles. Whether it's the tangy zest of Italian seasoning or the aromatic charm of Chinese five-spice powder, mixed spices offer a quick and convenient way to add depth and character to dishes. From marinades to sauces and rubs, they infuse every bite with a symphony of tastes that awaken the palate and make cooking an artful adventure.", img: "images/mixed_2.jpeg" },
    { name: "Salts", bg_image: "images/salt_cat.jpeg", link: "/Salts", content: "Salt is the unsung hero of the kitchen, enhancing flavors and bringing balance to dishes with its magical touch. From humble sea salt to exotic Himalayan pink salt, each variety adds its unique texture and subtle nuances to culinary creations. Whether used during cooking or as a finishing touch, salt elevates the taste of ingredients, unlocking their full potential. A pinch of flaky salt can transform a simple salad, while coarse salt can enhance the crust of a perfectly seared steak. With its ability to heighten flavors and create harmony on the palate, salt is an essential ingredient that makes every dish sing.", img: "images/salts.jpeg" },
    { name: "Others", bg_image: "images/blend_cat.jpeg", link: "/Others", content: "YP Gold spices give you the best of taste, flavour and aroma as they are sourced from the prime spice growing regions. We do not go through the grounding process and retain most of their original qualities, they are cleaned using stringent processes to make them free from impurities. With this, we ensure that you receive only the best quality spices in India, guaranteed not only to be pure but also to delight your palate with their taste and aroma.", img: "images/others.jpeg" },
    { name: "Pooja Samagri", bg_image: "", link: "/Pooja", content: "Pooja samagri refers to the essential items and materials used in Hindu rituals and prayers. These items vary depending on the specific puja or worship being performed but commonly include incense sticks (agarbatti), camphor (kapur), flowers, fruits, sweets (prasadam), holy water (jal), sacred threads (moli), lamps (diya), and sacred ash (vibhuti). Each element holds symbolic significance and is used to invoke blessings, purify the environment, and create a spiritually uplifting atmosphere during religious ceremonies. Pooja samagri is an integral part of Hindu traditions, fostering devotion and reverence in the worshipper's heart.", img: "images/pooja.jpeg" },
    { name: "Hing (asafoetida)", bg_image: "", link: "/Hing", content: "Hing, also known as asafoetida, is a pungent spice with a distinct aroma and flavor. It is commonly used in Indian cuisine to enhance savory dishes, especially in vegetarian cooking where it acts as a substitute for onion and garlic. Hing is derived from the resin of the Ferula plant and is often used in its powdered form. When cooked, it releases a strong umami-like scent, adding depth and complexity to curries, dals, and vegetable stir-fries. Despite its strong smell in its raw form, hing transforms into a mellow and savory flavor when heated, making it a versatile and indispensable spice in Indian kitchens.", img: "images/hing_2.jpeg" },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: '' // This enables smooth scrolling
    });
  };


  return (
    <div className='w-full h-[650px]  bg-[#F0F0F0] max-[450px]:h-[700px]'>
      <div className=" h-full overflow-hidden relative bg-center bg-cover mix-blend-multiply " style={{ backgroundImage: `url(${slides[currentSlide].bg_image})`, backgroundSize: 'cover', mixblendmode: 'multiply', transition: 'background-image 1s' }}>
        <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

          {slides.map((slides, index) => (
            <div key={index} className=" carousel-item relative w-full flex justify-center gap-8 flex-col md:flex-row max-[450px]:gap-0 " >
              <div className="max-[450px]:w-full w-1/3 lg:mt-[4rem]   order-2 md:order-1 md:w-1/2 lg:w-1/3 md:mt-[0] p-4">
                <div className="text-3xl font-bold max-[450px]:ml-20 ">
                  <h1 className='max-[450px]:text-black-900 text-black-900'>{slides.name}</h1>
                </div>
                <div className="mt-3 max-[450px]:mt-5 max-[450px]:w-full">
                  <p className=' max-[450px]:text-xs max-[450px]:text-black-900 text-black-900'>
                    {slides.content}
                  </p>
                </div>
                <div className="flex items-center mt-3  ">
                  <div className="dropdown dropdown-hover py-2 pr-4 pl-3 relative max-[450px]:dropup">
                    <button class="flex items-center bg-yellow-500 h-[60px] text-[white]  max-[450px]:pr-6  max-[450px]:border-solid border-solid max-[450px]:p-2 border-2  hover:bg-[#0097CC] hover:text-white-A700 p-2 w-auto">
                      Online order{" "}
                      <img src="images/img_arrow_down.svg" alt="" class="ml-2 " />
                    </button>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] max-[450px]:z-[1] menu shadow h-[8rem] max-[450px]:w-[18rem] max-[450px]:h-[4rem] w-[32rem] bg-white-A700 grid grid-cols-3 gap-10 p-4 max-[450px]:shadow-none "
                    >
                      <li className="w-28 h-[6rem] max-[450px]:w-18 max-[450px]:h-[2.5rem] max-[450px]:border  border border-solid bg-white-A700 border-gray-500 hover:bg-[#0097CC] max-[450px]:border-none">
                        <NavLink to="https://www.flipkart.com/search?q=ypgold%20masala&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off">
                          <img
                            className=" max-[450px]:h-[2rem]"
                            src="images/flipkartlogo.png"
                            alt=""
                          />
                        </NavLink>
                      </li>
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC] max-[450px]:border-none">
                        <NavLink to={"https://blinkit.com/"}>
                          <img className=" max-[450px]:h-[2rem]" src="images/blinkit.svg" alt="" />
                        </NavLink>
                      </li>
                      <li className="w-28 h-[6rem] border border-solid border-gray-500 hover:bg-[#0097CC] max-[450px]:border-none">
                        <NavLink to={"https://www.meesho.com/"}>
                          <img
                            className="w-60 h-[4rem] max-[450px]:h-[2rem] max-[450px]:w-[2rem]"
                            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png"
                            alt=""
                          />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <NavLink onClick={scrollToTop}
                    to={slides.link}

                  >
                    <button className=" mt-2 mb-2 text-[#0097CC] h-[60px]    max-[450px]:border-solid  border-solid border-2 border-[#0097CC] hover:bg-[#0097CC] hover:text-white-A700 p-2">
                      Get Details
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className={`mt-[-1.5rem]  order-1 md:order-2 md:w-1/2 lg:w-1/3 p-4 `}>
                <img className={`h-[450px] w-[500px] mix-blend-multiply  max-[450px]:h-[300px] `} src={slides.img} alt="" />
              </div>
            </div>

          ))}
        </div>

        <button className=" hover:bg-[#0097CC] bg-[#F0F0F0] btn btn-circle absolute top-1/2 left-0 transform -translate-y-1/2 max-[450px]:hover:bg-[#0097CD] " onClick={prevSlide}> ❮</button>
        <button className=" hover:bg-[#0097CC] btn btn-circle absolute top-1/2 right-0 transform -translate-y-1/2 max-[450px]:hover:bg-[#0097CD] max-[450px]:bg-[#F0F0F0]" onClick={nextSlide}>❯ </button>
      </div>
    </div>

  );
}

export default Category


















