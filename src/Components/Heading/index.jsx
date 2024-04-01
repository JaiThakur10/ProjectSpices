import React from "react";

const sizes = {
  xl: "text-[40px]  leading-[60px]",
  s: "text-2xl font-bold",
  md: "text-[32px] font-bold",
  xs: "text-xl font-semibold",
  lg: "text-4xl font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`900 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
