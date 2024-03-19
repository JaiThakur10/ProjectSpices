import React from "react";
import { Text } from "../Text";
import { Img } from "../Img";
import { Button } from "../Button";
import { Heading } from "../Heading";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      
      <div className="flex flex-row justify-end w-full mt-[100px]  p-12 bg-black-900">
        <div className="flex flex-col items-center justify-start w-full gap-[148px] mx-auto max-w-[1301px]">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col items-start justify-start w-[28%] gap-4">
              <Heading size="md" as="h2" className="!text-gray-50_01 tracking-[-0.50px]">
                YP GOLD.
              </Heading>
              <Text size="s" as="p" className="tracking-[-0.50px] opacity-0.81 leading-[35px]">
                Address: <br />
                Radhika International 8/1/4 South Side Industrial Area, G.T Road, Ghaziabad
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] pt-[5px] gap-6">
              <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
                Customer
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Order Status
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Collections
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Our Story
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Affiliates
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Security
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] gap-6">
              <Heading as="h5" className="mt-[5px] !text-gray-50_01 tracking-[-0.50px]">
                Information
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Customer Service
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  Careers
                </Text>
                <Text as="p" className="tracking-[-0.50px] opacity-0.81">
                  FAQ
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] pt-[5px] gap-[25px]">
              <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
                Follow Us
              </Heading>
              <div className="flex flex-row justify-between w-full">
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_instagram.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_facebook.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_twitter.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-10">
                  <Img src="images/img_bxl_tiktok.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <Text size="s" as="p" className="tracking-[-0.50px] opacity-0.81">
              © Copyright 2024. All Rights Reserved. Made by Sinsters...
            </Text>
            <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
              <Text size="s" as="p" className="mb-px tracking-[-0.50px] opacity-0.81">
                Terms of condition
              </Text>
              <Text size="s" as="p" className="tracking-[-0.50px] opacity-0.81">
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}