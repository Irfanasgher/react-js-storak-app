import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import ProductCard from "../ProductCard/ProductCard";
import "./TopDeal.scss";

function TopDeal() {
  const [SellingProduct, setSellingProduct] = useState("");
  const [productCount, setProductCount] = useState(12);

  useEffect(() => {
    SellingProductList();
  }, []);

  const handleProductCounter = () => {
    return setProductCount(productCount + 6);
  };

  const SellingProductList = async (e) => {
    try {
      await axios.get("/products/top-selling").then((response) => {
        const sellingProductData = response.data.top_selling_products;
        setSellingProduct(sellingProductData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="top-deals-section">
      <div className="container">
        <Row gutter={12}>
          <Col span={24}>
            <div className="section-heading">
              <h2>Top Selling Products</h2>
            </div>
          </Col>
        </Row>
        <div className="inner-top-deal">
          <Row gutter={12}>
            {SellingProduct.length > 0 &&
              SellingProduct?.slice(0, productCount).map((data, id) => {
                return (
                  <Col xs={12} sm={8} md={6} lg={6} xl={4} key={id}>
                    <ProductCard data={data} />
                  </Col>
                );
              })}
          </Row>
          {productCount >= SellingProduct.length ? (
            ""
          ) : (
            <div className="view-more-product-theme-3">
              <div className="link" onClick={handleProductCounter}>
                Load More
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default TopDeal;
