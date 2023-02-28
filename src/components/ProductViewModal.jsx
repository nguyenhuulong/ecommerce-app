import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/product-modal/productModalSlice";
import ProductView from "./ProductView";

import productData from "../assets/fake-data/products";
import Button from "./Button";

function ProductViewModal() {
  const productSlug = useSelector((state) => state.productModal.value);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(remove());
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [dispatch]);


//   useEffect(() => {
//     const handleScrollOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         document.body.style.overflow = "hidden";
//       }
//     };
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = "unset");
//   }, []);

  return (
    <div>
      <div
        className={`product-view__modal ${
          product === undefined ? "" : "active"
        }`}
      >
        <div className="product-view__modal__content" ref={modalRef}>
          <ProductView product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductViewModal;
