import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux"
import { set } from '../redux/product-modal/productModalSlice'

import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  const dispatch = useDispatch()
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`} key={props.slug}>
        <div className="product-card__image">
          <img src={props.image01} alt="" />
          <img src={props.image02} alt="" />
        </div>
        <h3 className="product-card__title">{props.title}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price)}
          <span className="product-card__price__old">
            <del>{numberWithCommas(399000)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button size="sm" icon="bx bx-cart" animate={true} onClick={() => dispatch(set(props.slug))}>
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image01: PropTypes.string.isRequired,
  image02: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
