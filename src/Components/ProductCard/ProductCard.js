import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Routes/apiRoutes";

import "./ProductCard.scss";

function ProductCard(props) {
  // const number =
  //   100 -
  //   (props?.data?.first_variant.sale_price /
  //     props?.data?.first_variant.retail_price) *
  //     100;
  // const percentage = Math.round(number * 10) / 10;
  return (
    <div className="product-widget">
      <div className="product-image">
        <img
          src={`${baseUrl}admin/images/products/primary/sm/${props?.data?.primary_image}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/default-image.jpg";
          }}
          alt="Product Image"
        />
        <div className="add-cart">
          <Tooltip placement="right" title="Add to Cart">
            <Link to="#">
              <i className="fas fa-shopping-bag"></i>
            </Link>
          </Tooltip>
        </div>
        <div className="wishlist">
          <Tooltip placement="right" title="Wish List">
            <Link to="#">
              <i className="fas fa-heart"></i>
            </Link>
          </Tooltip>
        </div>
        <div className="view-detail-cart">
          <Link to="#">View Detail</Link>
        </div>
      </div>
      <div className="product-detail">
        {/* <div className="category">Sony</div> */}

        <div className="product-price">
          <div className="new-price">
            QAR {props?.data?.first_variant?.sale_price}
          </div>
          {/* <div className="new-price">QAR 22000</div> */}
          <div className="discount-widget">
            <div className="old-price">
              QAR {props?.data?.first_variant?.retail_price}
              {/* QAR 20000 */}
            </div>
            {/* <div className="percentage">{percentage}%</div> */}
          </div>
        </div>

        <div className="product-title">
          <h2>{props?.data?.name}</h2>
        </div>
        <div className="star-portion">
          <div className="express">express</div>
          <div className="star-ratting">
            <ul>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
            </ul>
            <span>(12)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
