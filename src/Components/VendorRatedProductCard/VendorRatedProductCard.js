import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./VendorRatedProductCard.scss";

function VendorRatedProductCard() {
  return (
    <div className="top-rated-store-widget">
      <span className="sale">Sale</span>
      <img src="/images/product1.png" alt="" />
      <div className="new">QAR 999</div>
      <div className="old">QAR 1045</div>
      <h2>Digital Camera XF-21</h2>
      <Link to="#" className="top-sale-link">
        <ShoppingCartOutlined />
        Add to Cart
      </Link>
    </div>
  );
}
export default VendorRatedProductCard;
