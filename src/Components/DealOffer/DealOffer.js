import { Row, Col } from "antd";
// import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DealOffer.scss";
import screenBackground from "./../../images/offer-background.jpg";
// import { baseUrl } from "../../Routes/apiRoutes";
function DealOffer() {
  // const [saleProduct, setSaleProduct] = useState("");
  // useEffect(() => {
  //   SaleProductList();
  // }, []);
  // const SaleProductList = async (e) => {
  //   try {
  //     await axios.get("/products/sale-of-day").then((response) => {
  //       const saleProductData = response.data.sod_products;
  //       setSaleProduct(saleProductData);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <section
        className="deal-offer-section"
        style={{ backgroundImage: `url(${screenBackground})` }}
      >
        <div className="container">
          <div className="deal-inner">
            <h2>SALE OF THE DAY</h2>
            <Row gutter={12}>
              {/* {saleProduct.length > 0 &&
                saleProduct?.slice(0, 6).map((data, id) => {
                  return (
                    <Col xs={12} sm={8} md={8} lg={4} key={id}>
                      <div className="deal-offer-image">
                        <Link to="#">
                          <img
                            src={`${baseUrl}admin/images/products/primary/sm/${data.primary_image}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/images/default-image.jpg";
                            }}
                            alt="Product Image"
                          />
                        </Link>
                      </div>
                    </Col>
                  );
                })} */}
              <Col xs={12} sm={8} md={8} lg={4}>
                <div className="deal-offer-image">
                  <Link to="#">
                    <img src="/images/sale-1.jpg" alt="offer-product" />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={4}>
                <div className="deal-offer-image">
                  <Link to="#">
                    <img src="/images/sale-2.jpg" alt="offer-product" />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={4}>
                <div className="deal-offer-image">
                  <Link to="#">
                    <img src="/images/sale-3.jpg" alt="offer-product" />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={4}>
                <div className="deal-offer-image">
                  <Link to="#">
                    <img src="/images/sale-4.jpg" alt="offer-product" />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={4}>
                <div className="deal-offer-image">
                  <Link to="#">
                    <img src="/images/sale-5.jpg" alt="offer-product" />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={4}>
                <div className="deal-offer-image">
                  <Link to="#">
                    <img src="/images/sale-6.jpg" alt="offer-product" />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="adv-banners">
        <img src="images/web-banner-1.jpg" alt="web-banner" />
      </section>
    </div>
  );
}
export default DealOffer;
