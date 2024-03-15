import React from 'react'

export default function About() {
    return (
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between w-full max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[47%] gap-[50px]">
              <Heading size="xl" as="h2" className="tracking-[-0.50px]">
                OUR STRENGTHS
              </Heading>
              <div className="justify-center w-full gap-[50px] grid-cols-2 grid min-h-[auto]">
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon.svg"
                    alt="fast_shipping"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading as="h3" className="tracking-[-0.50px]">
                      Efficient production
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      Every order placed right now is ready and dispatched in
                      less than 2 days. No waiting for you is our rule.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon_gray_50_01.svg"
                    alt="icon_one"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading as="h4" className="tracking-[-0.50px]">
                      Everything under one roof
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      From cleaning to grinding the spices to packing them,
                      everthing is done under one roof. No travelling of the
                      spices making them as pure as they can be.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon_gray_50_01_60x63.svg"
                    alt="icon_one"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Making the best
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      Chillies from Khammam, Turmeric from Nizamabad or talking
                      about Coriander from Ramganj. We get raw materials from
                      the best places in the country, making the best product.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon_60x63.svg"
                    alt="icon_one"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Location
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      You can find us in J&K, Punjab, Hayana, HP, Delhi,
                      Uttrakhand, UP, Pan India{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/blend.png"
              alt="image_one"
              className="w-[47%] object-cover"
            />
          </div>
        </div>
    );
}
