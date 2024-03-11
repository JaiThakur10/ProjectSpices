import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../Text";
import { Img } from "../Img";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Slider } from "../Slider";
import HomepageCardblog from "../HomepageCardblog/HomepageCardblog";
import HomepageCardproduct from "../HomepageCardproduct/HomepageCardproduct";
import { Link } from "react-router-dom";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

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
          <div className="flex flex-row justify-center w-full px-14 py-[75px] bg-orange-50">
            <div className="flex flex-row justify-between items-center w-full my-[5px] max-w-[1290px]">
              <div className="flex flex-col items-start justify-start w-[48%] gap-[30px]">
                <div className="flex flex-col items-start justify-start w-full gap-[26px]">
                  <Text
                    size="lg"
                    as="p"
                    className="!text-black-900 tracking-[-0.50px]"
                  >
                    Our Philosphy
                  </Text>
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-black-900 tracking-[-0.50px] !font-pollerone"
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
              <Img
                src="https://nurserylive.com/cdn/shop/articles/indian-spices-602199.jpg?v=1679748509"
                alt="nathanoakleyo"
                className="w-[48%] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-11 p-[41px] bg-black-900">
          <Text
            size="lg"
            as="p"
            className="!text-gray-50_01 tracking-[-0.50px] text-center"
          >
            Variety of Spices From every culture
          </Text>
          <div className="flex flex-row justify-start w-full gap-[50px] max-w-[1094px]">
            <Img
              src="images/img_search_gray_50_01.svg"
              alt="search_three"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109.svg"
              alt="companylogo_one"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01.svg"
              alt="companylogo"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x141.svg"
              alt="companylogo"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x134.svg"
              alt="companylogo"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x132.svg"
              alt="companylogo"
              className="h-12"
            />
          </div>
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
                        <HomepageCardproduct
                          status="Main"
                          imageOne="images/blend.png"
                          category="Blended"
                          centretext="Blended"
                          bxheartoneOne=""
                          className="flex flex-col items-center justify-start w-80 gap-[15px]  p-4 hover:bg-red-300 transition-colors duration-300 "
                        />
                      </Link>
                      <Link to="/blend">
                        <HomepageCardproduct
                          status="Main"
                          imageOne="images/blend.png"
                          category="Blended"
                          centretext="Blended"
                          bxheartoneOne=""
                          className="flex flex-col items-center justify-start w-80 gap-[15px]  p-4 hover:bg-red-300 transition-colors duration-300 "
                        />
                      </Link>

                      <Link to="/blend">
                        <HomepageCardproduct
                          status="Main"
                          imageOne="images/blend.png"
                          category="Blended"
                          centretext="Blended"
                          bxheartoneOne=""
                          className="flex flex-col items-center justify-start w-80 gap-[15px]  p-4 hover:bg-red-300 transition-colors duration-300 "
                        />
                      </Link>
                      <Link to="/blend">
                        <HomepageCardproduct
                          status="Main"
                          imageOne="images/blend.png"
                          category="Blended"
                          centretext="Blended"
                          bxheartoneOne=""
                          className="flex flex-col items-center justify-start w-80 gap-[15px]  p-4 hover:bg-red-300 transition-colors duration-300 "
                        />
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
                imagesrc="https://www.youtube.com/embed/c-YUMFFeUkc?si=l3Gy935OKF0VoBQt"
                className="flex flex-col items-center justify-start w-[33%] gap-6"
              />
              <HomepageCardblog
                imagesrc="https://www.youtube.com/embed/EGGLqXw8bfM?si=Y4ZgbJ4uvfnY2glk"
                className="flex flex-col items-center justify-start w-[31%] gap-6 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
