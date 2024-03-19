import React from 'react'
import HomepageCardproduct from '../HomepageCardproduct/HomepageCardproduct'

function Blend() {

  
  const info =[
    {image :'images/blend.png',
     name : "amchoor"},
    {image : "https://pikwizard.com/pw/small/88cc56cd5b3d622adf44f50881d83d0d.jpg",
     name : "day"}
  ]
  

  
  return (
    <>
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {info.map((info, i) => (
        <div key={i} className="rounded-md border h-500px ">
          
          <img 
            src={info.image}
            alt="Laptop"
            className="w-full aspect-auto  md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{info.name}</h1>
           
            
            
            <div className="mt-5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Size : </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                50gm : MRP 20 
              </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                100gm : MRP 40
              </span>
              
              
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

    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {info.map((info, i) => (
        <div
          key={i}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src={info.image}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{info.name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
    
    </>
  )

}

export default Blend







