import React from "react";

export default function Product(props) {
  return (
    <div className="shadow-md max-w-xs  text-center font-sans gap-10 flex justify-between items-center">
      <img className=" w-full h-[16rem] object-cover" src={props.url} alt="product image" />
      
    </div>
  );
}
