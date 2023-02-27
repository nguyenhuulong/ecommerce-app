import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Helmet from "../components/Helmet";

import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCardItemsDetail(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCardItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart__title">
        <i className="bx bx-cart"></i>
        GIỎ HÀNG
      </div>
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block" animate={true} icon="bx bx-cart">đặt hàng</Button>
            <Link to="/catalog">
              <Button size="block" backgroundColor="white" secondary={true} animate={true} icon="bx bx-right-arrow-alt">tiêp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {
            cartProducts.length !== 0 ? cartProducts.map((item, index) => (
              <CartItem key={index} item={item} />
            )) : <p className="cart__list__alert">Giỏ hàng trống</p>
          }
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
