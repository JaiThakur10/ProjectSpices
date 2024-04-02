import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

function OurVideos() {
  const product = productData.map((item) => (
    <Product
      url={item.imageurl}
     
    />
  ));
  return (
    <>
      <div className="max-w-screen-xl text-center">
        <h1>hey</h1>
        <Carousel
  showDots={true}
  
  autoPlaySpeed={1000}
  responsive={responsive}
  
>
  {product}
</Carousel>
      </div>
    </>
  );
}

export default OurVideos;
