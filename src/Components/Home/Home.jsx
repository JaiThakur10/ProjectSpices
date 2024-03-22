import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../Text";
import { Img } from "../Img";
import { Button } from "../Button";
import { Heading } from "../Heading";
import HomepageCardblog from "../HomepageCardblog/HomepageCardblog";
import HomepageCardproduct from "../HomepageCardproduct/HomepageCardproduct";
import { Link } from "react-router-dom";

const info =[
  {image :'images/blend.png',
   name : "amchoor"},
  {image : "https://pikwizard.com/pw/small/88cc56cd5b3d622adf44f50881d83d0d.jpg",
   name : "day"},
   {image : 'images/blend.png',
    name : "yes"},
    {image : 'images/blend.png',
    name : "yes"},
]

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>YP GOLD</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-yellow-50">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full  bg-orange-50">
            <div className="flex flex-col lg:flex-row  justify-between items-center w-full px-4 lg:px-0 max-w-[1290px]">
              <div className="lg:w-[48%] max-w-lg mx-auto lg:mr-4 mb-8 lg:mb-0">
                <div className="mb-8">
                  <Text
                    size="xl"
                    as="p"
                    className="!text-black-900 tracking-[-0.50px] max-[450px]:text-xl"
                  >
                    Our Philosphy
                  </Text>
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-black-900 tracking-[-0.50px] !font-pollerone max-[450px]:text-lg"
                  >
                    <span className="text-black-900 font-raleway font-bold">
                      We{" "}
                    </span>
                    <span className="text-blue_gray-900_01 font-raleway font-bold">
                      believe spices are the{" "}
                    </span>
                    <span className="text-black-900 font-raleway font-bold">
                      backbone of Indian kitchens and to presere this,we are
                      satisfied with nothing but perfect ingredients only.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="carousel carousel-center max-w-2xl p-4 space-x-7 bg-organe-50 ">
                <div className="carousel-item">
                  <img
                    src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    className="rounded-box "
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                    className="rounded-box"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-11 p-[41px] bg-black-900 ">
          <Text
            size="2xl"
            as="p"
            className="!text-gray-50_01 tracking-[-0.50px] text-center"
          >
            Variety of Spices From every culture
          </Text>
        </div>
        <div className="flex flex-row w-full gap-5 max-w-[1290px]">
          <div className="flex flex-row justify-between items-center w-1/2 p-6 bg-gradient">
            <div className="flex flex-col items-start justify-start w-[55%] ml-1.5 gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-7">
                <Text
                  size="md"
                  as="p"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  Degi Mirich
                </Text>
                <Heading
                  size="lg"
                  as="h1"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  Degi mirich ka tadka aang aang bhadka!!
                </Heading>
              </div>
              <Button
                color="gray_50"
                size="6xl"
                variant="outline"
                className="tracking-[-0.50px] font-medium min-w-[155px]"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="https://tiimg.tistatic.com/fp/1/007/181/dried-strong-kashmiri-degi-mirch-red-chilli-powder-581.jpg"
              alt="image"
              className="w-[31%] mr-1.5 object-cover"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-1/2 p-[30px] bg-gradient">
            <div className="flex flex-col items-start justify-start w-[54%] gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-7">
                <Text
                  size="md"
                  as="p"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  Haldi
                </Text>
                <Heading
                  size="lg"
                  as="h2"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  Haldi Ram se bhi bhaiter haldi
                </Heading>
              </div>
              <Button
                color="gray_50"
                size="6xl"
                variant="outline"
                className="tracking-[-0.50px] font-medium min-w-[155px]"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="https://www.forestessentialsindia.com/blog/wp-content/uploads/2020/02/Turmeric.png"
              alt="phildesforges"
              className="w-[34%] my-[22px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[45px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-center w-full gap-[21px]">
              <Heading
                size="xl"
                as="h2"
                className="tracking-[-0.50px] text-center"
              >
                <span className="text-black-900">Our </span>
                <span className="text-black-900">Story</span>
              </Heading>
              <Text
                size="md"
                as="p"
                className="mb-1 !text-gray-500 tracking-[-0.50px] text-center"
              >
                Our journey starts from Ghaziabad around 18 years ago. Coming
                from a small town named Hapur, we starting with selling turmeric
                and chilli. But with all the hard word, we have expanded our
                boundries over different states now and have a brand name, well
                established.
              </Text>
            </div>
            <div className="flex flex-col gap-[50px] mx-auto">
              <div className="flex flex-row justify-start w-full gap-[19px]">
                <Link to="/blend">
                <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
      {info.map((info, i) => (
        <div
          key={i}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] hover:bg-red-300 transition-colors duration-300"
        >
          <img
            src={info.image}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />

          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-blue-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <p className="text-green-100  text-4xl translate-y-4 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100 w-full h-full flex flex-col items-center justify-center cursor-pointer ">{info.name}</p>
            
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
                </Link>
                

                
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="h-[535px] w-full relative">
          <div className="flex flex-col items-center justify-start h-full w-[535px] right-0 bottom-0 top-0 m-auto absolute">
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF410kQvsCOa_mcMdZAbGwjkoBXKhe5xTVkg&usqp=CAU"
              alt="insideweather"
              className="w-[535px] object-cover"
            />
          </div>
          <div className="flex flex-row justify-start w-full bottom-0 right-0 left-0 p-[13px] m-auto bg-yellow-100 absolute">
            <div className="flex flex-col items-start justify-start w-[38%] mb-[95px] ml-[61px] gap-[30px]">
              <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                <Text
                  size="xl"
                  as="p"
                  className="!text-blue_gray-900_01 tracking-[-0.50px]"
                >
                  WELL KNOWN CUSTOMER BASE
                </Text>
                <Heading size="lg" as="h2" className="tracking-[-0.50px]">
                  Kutkut <br />
                  Kurkure <br />
                  Sendha Namak
                </Heading>
              </div>
              <Button
                size="9xl"
                variant="outline"
                className="tracking-[-0.50px] font-medium min-w-[218px]"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[67px] max-w-[1290px]"></div>
        </div>
        <div>
          <Heading
            size="xl"
            as="h2"
            className="tracking-[-0.50px] text-center !font-semibold"
          >
            Instagram Posts
          </Heading>
        </div>

        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading
                size="xl"
                as="h2"
                className="tracking-[-0.50px] text-center !font-semibold"
              >
                Our Videos
              </Heading>
              <Text
                size="md"
                as="p"
                className="!text-gray-500 tracking-[-0.50px] text-center"
              >
                We write various things related to spices, from tips and what
                things I need to pay attention to when choosing right spices
              </Text>
            </div>
            <div className="flex flex-row w-full gap-5">
              <HomepageCardblog
                imagesrc="https://www.youtube.com/embed/Kg82_C5xfEQ?si=a0sirxA65p-gWsQH"
                className="flex flex-col items-center justify-start w-[33%] gap-6"
              />
              <HomepageCardblog
                imagesrc="https://www.youtube.com/embed/08R-wR2LHCc?si=SuuHbsm9d-Z8pjM2"
                className="flex flex-col items-center justify-start w-[33%] gap-6"
              />
              <HomepageCardblog
                imagesrc="https://www.youtube.com/embed/pIdJYnVkU0c?si=eNN7lINT9o50PuOk"
                className="flex flex-col items-center justify-start w-[31%] gap-6 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}