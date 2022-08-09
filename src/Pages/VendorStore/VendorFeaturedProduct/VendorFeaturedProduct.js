import { Fragment } from "react";
import { Row, Col } from "antd";
import VendorProductCard from "../../../Components/VendorProductCard/VendorProductCard";

import "./VendorFeaturedProduct.scss";

function VendorFeaturedProduct() {
  return (
    <div className="vendor-featured-product">
      <Fragment>
        <div className="vendor-featured-banner">
          <div className="store-heading">
            <h2>Featured Product</h2>
          </div>
        </div>
        <div className="container">
          <Row gutter={12}>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
            <Col xs={12} sm={12} md={8} lg={4}>
              <VendorProductCard />
            </Col>
          </Row>
        </div>
      </Fragment>
    </div>
  );
}
export default VendorFeaturedProduct;
