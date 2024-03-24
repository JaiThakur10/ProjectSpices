import React from "react";
import HomepageCardproduct from "../HomepageCardproduct/HomepageCardproduct";

function Basic() {
  const info = [
    { image: "images/chat.jpg", name: "Channa Masala", price1: 40, price2: 80 },
    { image: "images/chat.jpg", name: "Chat Masala", price1: 35, price2: 70 },
    { image: "images/garam.jpg", name: "Garma Masala", price1: 50, price2: 100 },
    { image: "images/jaljeera.jpg", name: "Jaljeera", price1: 35, price2: 70 },
    { image: "images/chat.jpg", name: "Kashmiri Mirch", price1: 50, price2: 100 },
    { image: "images/kitchen.jpg", name: "Kitchen King", price1: "-", price2: 80 },
    { image: "images/chicken.jpg", name: "Meat Masala", price1: 50, price2: 100 },
  
  ];

  return (
    <>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-3 md:gap-6 md:space-y-0 lg:grid-cols-4 min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:space-y-0">
        {info.map((info, i) => (
          <div key={i} className="rounded-md border">
            <img
              src={info.image}
              alt="Laptop"
              className="w-full aspect-auto md:aspect-auto md:h-[300px] lg:h-[320px] "
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {info.name}
              </h1>

              <div className="mt-5 flex items-center space-x-2 min-[320px]:w-50">
                <div className="block text-sm font-semibold">Size : </div>
                <div className="block cursor-pointer rounded-md border border-black-400 p-1 px-2 text-xs font-medium min-[320px]:text-xxs">
                  50gm : MRP {info.price1}
                </div>
                <div className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium min-[320px]:text-xxs">
                  100gm : MRP {info.price2}
                </div>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-black-900 text-white-A700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Basic;
