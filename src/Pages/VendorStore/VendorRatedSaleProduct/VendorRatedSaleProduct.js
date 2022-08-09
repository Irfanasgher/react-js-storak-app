import { Fragment } from "react";
import { Row, Col } from "antd";
import VendorRatedProductCard from "../../../Components/VendorRatedProductCard/VendorRatedProductCard";

import "./VendorRatedSaleProduct.scss";

function VendorRatedSaleProduct() {
  return (
    <div className="vendor-featured-product">
      <Fragment>
        <div className="vendor-featured-banner">
          <div className="store-heading">
            <h2>To Rated Sale Product</h2>
          </div>
        </div>
        <div className="container">
          <Row gutter={12}>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <VendorRatedProductCard />
            </Col>
          </Row>
        </div>
      </Fragment>
    </div>
  );
}
export default VendorRatedSaleProduct;
