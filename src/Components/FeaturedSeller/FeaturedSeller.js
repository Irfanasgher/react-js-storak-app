import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";

import FeaturedSellerCard from "../FeaturedSellerCard/FeaturedSellerCard";

import "./FeaturedSeller.scss";
function FeaturedSeller() {
  const [featuredSellerProduct, setFeaturedSellerProduct] = useState("");
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  useEffect(() => {
    FeaturedSellerProductList();
  }, []);

  const FeaturedSellerProductList = async (e) => {
    try {
      await axios.get("/sellers/featured").then((response) => {
        const featuredSellerProductData = response.data.featured_sellers;
        setFeaturedSellerProduct(featuredSellerProductData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="recent-product">
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="section-heading">
              <h2>Featured Sellers</h2>
            </div>
          </Col>
        </Row>
        <div className="recent-product-main recent-product-slider">
          <Slider {...settings}>
            {featuredSellerProduct?.length > 0 &&
              featuredSellerProduct?.map((data, id) => {
                return <FeaturedSellerCard data={data} key={id} />;
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default FeaturedSeller;
