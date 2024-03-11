import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    gray_50_01: "bg-gray-50_01 text-black-900_3f",
    white_A700: "bg-white-A700 text-gray-500",
  },
  outline: {
    gray_500: "border-gray-500 border border-solid text-gray-500",
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-500",
  },
};
const sizes = {
  sm: "h-[45px] pl-[17px] pr-[35px] text-sm",
  md: "h-[49px] pl-4 pr-[35px] text-sm",
  xs: "h-[38px] pl-2 pr-[35px] text-lg",
  lg: "h-[55px] pl-[22px] pr-[35px] text-sm",
  xl: "h-[59px] pl-[18px] pr-[35px] text-sm",
  "2xl": "h-[69px] pl-5 pr-[35px] text-lg",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "square",
      variant = "fill",
      size = "2xl",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-gray-500 tracking-[-0.50px] text-lg bg-white-A700 ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "md", "xs", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_50_01", "white_A700", "gray_500", "blue_gray_100"]),
};

export { Input };
