import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addcartFunction,
  decrement,
  increment,
} from "../../../../store/cardSlice/cardslice";

const ProductsDetails = () => {
  const { productData, value, addCart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(addCart);

  let { productId } = useParams();
  return (
    <div>
      <div className="row container-fluid">
        <div className="col-md-6 col-lg-6">
          <img height={440} className="w-100" src={productData?.imgSrc} />
        </div>
        <div className="col-md-6 col-lg-6">
          <h2>{productData?.productName}</h2>
          <p>See More {productData?.compName}</p>
          <div className="d-flex">
            <h5>From ${productData?.currentPrice} </h5>{" "}
            <span className="mx-2 text-decoration-line-through">
              ${productData?.oldPrice}
            </span>
          </div>

          <div className="d-flex">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={() => {
                  dispatch(decrement());
                }}
              >
                -
              </button>
              <button type="" className="btn btn-primary px-3" disabled>
                {value}
              </button>
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={() => {
                  dispatch(increment());
                }}
              >
                +
              </button>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                class="btn btn-primary"
                type="button"
                onClick={(productData) => {
                  dispatch(addcartFunction(productData));
                }}
              >
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
