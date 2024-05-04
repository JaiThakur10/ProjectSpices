import React from 'react'
import { Helmet } from 'react-helmet';

function Distribution() {
  return (
    <section className="">
      <Helmet>
        <title>About</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="   md:flex-row items-center h-[2100px]">
        {/* Image Section */}
        <div className=" md:w-full mb-6 md:mb-0">
          <img
            src="images/image_slider_7.jpeg"
            alt="About Image"
            className="w-full h-[30rem] max-[450px]:h-[15rem] object-conatiner  shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className='w-full h-[1700px]  flex py-20'>
          <div className='flex flex-col-2 max-[700px]:!flex-col md:w-[85%] max-h-[1800px] max-[700px]:max-h-[1800px] m-auto shadow-lg px-5 py-3  mt-0 '>
            <div className='w-1/2 md:w-1/2 max-[700px]:border-b-2 md:m-6 border-r-2 max-[700px]:border-r-0 '>
              <h2 className='font-bold text-xl max-[450px]:text-black-900 font-serif'>YP GOLD</h2>
              <p className='mt-2 font-serif max-[450px]:text-black-900 font-bold'>Radhika International </p>
              <p className='mt-2 font-serif max-[450px]:text-black-900'> 18/1/4 South Side Industrial Area, G.T Road, Ghaziabad</p>
              <h4 className='text-[#0097CD] mt-4 font-serif'>Office</h4>
              <p className='font-serif max-[450px]:text-black-900'>+91 9599261209 / 0120-2801554</p>
              <h4 className='text-[#0097CD] mt-4 font-serif'>Email</h4>
              <p className='font-serif max-[450px]:text-black-900'>radhikainternationalgzb@gmail.com</p>
              <h4 className='text-[#0097CD] mt-4 font-serif '>Consumer Care Helpline Number</h4>
              <p className='font-serif max-[450px]:text-black-900'>+91  9599260899 / 0120-2801554</p>
            </div>
            <div className='w-1/2 m-6 mt-2 md:w-1/2 max-[700px]:m-0  max-[700px]:mt-2'>
              <div className=' max-[450px]:w-[290px] ' >
                <iframe
                  style={{ overflowY: "auto", scrollbarWidth: "none", borderRadius: "none" }}

                  scrolling="no"
                  src="https://docs.google.com/forms/d/e/1FAIpQLScGt_LBC9Jke9DCIGlhjogRbSIa1fF7-Y5tVhZf7PqVbzZ59w/viewform?embedded=true"
                  width="100%"
                  height="1380"
                 
                  //frameborder="5" 
                  marginheight="0"
                  marginwidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Distribution
