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
            src="images/image_slider_4.jpeg"
            alt="About Image"
            className="w-full h-[30rem] object-conatiner  shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className='w-full h-full  flex py-20'>
          <div className='flex flex-col-2 max-[700px]:!flex-col md:w-[75%] max-h-[300px] max-[700px]:max-h-[650px] m-auto shadow-lg px-5 py-3 '>
            <div className='w-1/2 md:w-1/2 max-[700px]:border-b-2 md:m-6 border-r-2 max-[700px]:border-r-0 '> 
              <h2 className='font-bold text-xl font-serif max-[450px]:text-black-900'>YP GOLD</h2>
              <p className='mt-2 font-serif font-bold max-[450px]:text-black-900'>Radhika International </p>
             <p className='mt-2 font-serif max-[450px]:text-black-900'> 18/1/4 South Side Industrial Area, G.T Road, Ghaziabad</p>
              <h4 className='text-[#0097CD] mt-4 font-serif'>Office</h4>
              <p className='font-serif max-[450px]:text-black-900'>+91 9599261209 / 0120-2801554</p>
              <h4 className='text-[#0097CD] mt-4 font-serif'>Email</h4>
              <p className='font-serif max-[450px]:text-black-900'>radhikainternationalgzb@gmail.com</p>
            </div>
            <div className='w-1/2 m-6 mt-2  md:w-1/2 max-[700px]:m-0  max-[700px]:mt-2 flex flex-col justify-center items-center'> 
              <h4 className='text-[#0097CD] '>Consumer Care Helpline Number</h4>
              <p className='mt-2 max-[450px]:text-black-900'>+91 9599261209 / 0120-2801554</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






