import React from "react";
import ImageBG from "./ImageBG";

const ProductContainer = ({ h2_text, p_text, imgSrc }) => {
  return (
    <div class="container">
      <ImageBG />
      <div class="row">
        {/* <!--start heading--> */}
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div class="section-heading text-center">
            <h2>{h2_text}</h2>
            <p>{p_text}</p>
          </div>
        </div>
        {/* <!--end heading--> */}
      </div>
      <div class="row">
        {/* <!--start product single--> */}
        <div class="col-lg-3 col-md-6">
          <div class="product-single text-center">
            <img src={`assets/images/${imgSrc}.png`} class="img-fluid" alt="" />
          </div>
        </div>
        {/* <!--end product single--> */}
      </div>
    </div>
  );
};

export default ProductContainer;
