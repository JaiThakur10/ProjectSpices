import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    yellow_100: "bg-yellow-100 text-blue_gray-900_01",
    gray_100: "bg-gray-100 text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    gray_50_01: "bg-gray-50_01",
  },
  outline: {
    gray_50: "border-gray-50 border-2 border-solid text-gray-50",
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-500",
    blue_gray_900_01: "border-blue_gray-900_01 border-2 border-solid text-blue_gray-900_01",
    gray_500: "border-gray-500 border border-solid text-gray-500",
    black_900: "border-black-900 border border-solid text-black-900",
  },
};
const sizes = {
  "5xl": "h-[46px] px-[30px] text-sm",
  xl: "h-[38px] px-5 text-base",
  xs: "h-6",
  md: "h-[35px] px-[7px]",
  "3xl": "h-[43px] px-3",
  sm: "h-[31px] px-3 text-base",
  "8xl": "h-[51px] px-[35px] text-lg",
  "9xl": "h-[60px] px-[35px] text-xl",
  "6xl": "h-[49px] px-[35px] text-sm",
  "7xl": "h-[50px] px-[15px]",
  "10xl": "h-[69px] px-[35px] text-lg",
  "4xl": "h-[45px] px-[25px] text-lg",
  lg: "h-[35px] px-[15px] text-sm",
  "2xl": "h-10 px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  variant = "fill",
  size = "2xl",
  color = "blue_gray_900_01",
  ...restProps
}) => {
  return (
    <button class="flex items-center bg-[#B8A064] text-[white] rounded-full border-solid border-2  hover:bg-[#0097CC] hover:text-white-A700 p-2 w-auto">
                    Online order{" "}
                    <img src="images/img_arrow_down.svg" alt="" class="ml-2 " />
                  </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle", "square"]),
  size: PropTypes.oneOf(["5xl", "xl", "xs", "md", "3xl", "sm", "8xl", "9xl", "6xl", "7xl", "10xl", "4xl", "lg", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "yellow_100",
    "gray_100",
    "blue_gray_100",
    "black_900",
    "blue_gray_900_01",
    "gray_50_01",
    "gray_50",
    "gray_500",
  ]),
};

export { Button };
