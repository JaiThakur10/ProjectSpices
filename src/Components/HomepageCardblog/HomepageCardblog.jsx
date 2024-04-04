import React from "react";
import { Text } from "../Text";

import { Button } from "../Button";
import { Heading } from "../Heading";

export default function HomepageCardblog({
  imagesrc,
  category,
  status,
  centretext,
  bxheartoneOne,
  bxcarttwoOne,
  teakwoodchair,
  twentyfour,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">

        <div className="h-[400px] w-full relative">

          <div className="iframe-container">
            <iframe
              src={imagesrc}
              className="iframe"
              style={{
                width: '100%',
                height: '300px',
                border: 'none',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                transform: 'rotateX(0) rotateY(0) translateZ(0)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'rotateX(10deg) rotateY(10deg) translateZ(5px)';
                e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            />
          </div>
          <p className="text-green-100  text-4xl translate-y-4 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100 w-full h-full flex flex-col items-center justify-center ">{centretext}</p>

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