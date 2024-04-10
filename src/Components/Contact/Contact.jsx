import React from 'react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <section className="">
      <Helmet>
        <title>About</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="  md:flex-row items-center">
        {/* Image Section */}
        <div className=" md:w-full mb-6 md:mb-0">
          <img
            src="images/image_slider_1.jpeg"
            alt="About Image"
            className="w-full h-[30rem] object-conatiner  shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className='w-full h-full  flex py-20'>
          <div className='flex flex-col-2 max-[700px]:!flex-col md:w-[75%] max-h-[300px] max-[700px]:max-h-[650px] m-auto shadow-lg px-5 py-3 '>
            <div className='w-1/2 md:w-1/2 max-[700px]:border-b-2 md:m-6 border-r-2 max-[700px]:border-r-0 '> 
              <h2 className='font-bold text-xl font-serif'>YP GOLD</h2>
              <p className='mt-2 font-serif font-bold'>Radhika International </p>
             <p className='mt-2 font-serif'> 18/1/4 South Side Industrial Area, G.T Road, Ghaziabad</p>
              <h4 className='text-[#0097CD] mt-4 font-serif'>Office</h4>
              <p className='font-serif'>+91 9599261209 / 0120-2801554</p>
              <h4 className='text-[#0097CD] mt-4 font-serif'>Email</h4>
              <p className='font-serif'>radhikainternationalgzb@gmail.com</p>
            </div>
            <div className='w-1/2 m-6 mt-2  md:w-1/2 max-[700px]:m-0  max-[700px]:mt-2'> 
              <h4 className='text-[#0097CD] '>Consumer Care Helpline Number</h4>
              <p className='mt-2'>+91 9599261209 / 0120-2801554</p>
              <button onClick={() => { window.open('http://wa.me/9599261209?text=Hello!%20I%20want%20to%20buy%20Masala in Bulk!!!!', '_blank'); }} className="mt-10 m-auto text-[#0097CC] border-solid border-2 border-[#0097CC] hover:bg-[#6D6D6D] hover:border-[#6D6D6D] hover:text-white-A700 p-2">
                Bulk Buy &rarr;
              </button>
              <h4 className='mt-4'> * Bulk order is equivalent to 10kg or more</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






