import { Rate } from "antd";

import "./ProductRating.scss";

function ProductRating() {
  return (
    <div className="product-rating">
      <div className="rating">
        <Rate allowHalf defaultValue={2.5} />
      </div>
      <div className="rating-number">(10)</div>
    </div>
  );
}
export default ProductRating;
