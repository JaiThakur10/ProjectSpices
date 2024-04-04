import React from "react";
import { Text } from "../Text";

import { Button } from "../Button";
import { Heading } from "../Heading";


export default function HomepageCardproduct({
  imageOne ,
  category ,
  status,
  centretext,
  bxheartoneOne,
  bxcarttwoOne,
  teakwoodchair,
  twentyfour ,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        
        <div className="h-[400px] w-full relative">
          <Img
            src={imageOne}
            alt="image_one"
            className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <p className="text-green-100  text-4xl translate-y-4 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100 w-full h-full flex flex-col items-center justify-center cursor-pointer ">{centretext}</p>
         
          <div className="flex flex-col items-center justify-start w-[14%] gap-[106px] right-[5%] top-[4%] m-auto absolute">
            {!!status ? (
              <Text
                as="p"
                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
              >
                {status}
              </Text>
            ) : null}
            <div className="flex flex-col items-center justify-start w-[96%] gap-5">
              {!!bxheartoneOne ? (
                <Button color="black_900" shape="circle" className="w-10 shadow-xs">
                  <Img src="images/img_bx_heart_1.svg" />
                </Button>
              ) : null}
              {!!bxcarttwoOne ? (
                <Button color="yellow_100" shape="circle" className="w-10 shadow-xs">
                  <Img src="images/img_bx_cart_2.svg" />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Heading as="h1" className="tracking-[-0.50px]">
          {teakwoodchair}
        </Heading>
        <Text size="md" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
          {twentyfour}
        </Text>
      </div>
    </div>
  );
}