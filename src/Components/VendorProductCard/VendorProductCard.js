import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { StarFilled, ShoppingCartOutlined } from "@ant-design/icons";
import "./VendorProductCard.scss";

function VendorProductCard() {
  return (
    <div className="featured-product-widget">
      <Tooltip placement="top" title="Add to Cart">
        <Link to="#">
          <ShoppingCartOutlined />
        </Link>
      </Tooltip>
      <img src="/images/product1.png" alt="" />
      <h2>Smart Watch</h2>
      <div className="product-price">
        <div className="new">QAR 999</div>
        <div className="old">QAR 1045</div>
      </div>
      <ul>
        <li>
          <StarFilled />
        </li>
        <li>
          <StarFilled />
        </li>
        <li>
          <StarFilled />
        </li>
        <li>
          <StarFilled />
        </li>
        <li>
          <StarFilled />
        </li>
      </ul>
    </div>
  );
}
export default VendorProductCard;
