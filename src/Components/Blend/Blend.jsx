import React from 'react'
import HomepageCardproduct from '../HomepageCardproduct/HomepageCardproduct'

function Blend() {
  return (
    <>
    <div className="flex flex-col w-full gap-[47px] mt-20 mb-20 bg-yellow-50">
              <div className="flex flex-row justify-start w-full gap-[19px]">
                <HomepageCardproduct
                  status="New"
                  imageOne="images/sauf.jpg"
                  category="Fennel Powder"
                  teakwoodchair="Saunf Powder"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
                <HomepageCardproduct
                  imageOne="images/anardana.jpg"
                  status="New"
                  category="Anardana Powder"
                  teakwoodchair="Anardana Powder"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
                <HomepageCardproduct
                  imageOne="images/garam.jpg"
                  status="New"
                  teakwoodchair="Garam Masala Powder"
                  category="Garam Masala"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
                <HomepageCardproduct
                  imageOne="images/chat.jpg"
                  status="New"
                  teakwoodchair="Chat Masala Powder"
                  category="Chat Masala"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
              </div>
              <div className="flex flex-row w-full gap-[19px]">
                <HomepageCardproduct
                  imageOne="images/chicken.jpg"
                  status="New"
                  teakwoodchair="Chicken Masala Powder"
                  category="Chicken Masala"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
                <HomepageCardproduct
                  imageOne="images/saunth.jpg"
                  status="New"
                  teakwoodchair="Saunth Powder"
                  category="Dry Ginger Powder"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
                <HomepageCardproduct
                  imageOne="images/blackpeper.jpg"
                  status="New"
                  teakwoodchair="Kaali Mirch Powder"
                  category="Black Pepper Powder"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
                <HomepageCardproduct
                  imageOne="images/jaljeera.jpg"
                  status="New"
                  teakwoodchair="Jaljeera Powder"
                  category="Jaljeera Masala"
                  className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-4 hover:bg-red-300 transition-colors duration-300"
                />
              </div>
            </div>
    </>
  )
}

export default Blend
