import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import "./RecommendedProduct.scss";
import Slider from "react-slick";

import ProductCard from "../ProductCard/ProductCard";

function DealDay() {
  const [recommendedProduct, setrecommendedProduct] = useState("");

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
    RecommendedProductList();
  }, []);
  const RecommendedProductList = async (e) => {
    try {
      await axios.get("/products/recommended").then((response) => {
        const recommendedProductData = response.data.recommended_products;
        setrecommendedProduct(recommendedProductData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="deal-day-section">
      <div className="container">
        <Row gutter={12}>
          <Col span={24}>
            <div className="section-heading">
              <h2>Recommended For You</h2>
            </div>
          </Col>
        </Row>
        <div className="inner-deal-day">
          <div className="deal-day-slider">
            <Slider {...settings}>
              {recommendedProduct.length > 0 &&
                recommendedProduct?.slice(0, 10).map((data, id) => {
                  return <ProductCard data={data} key={id} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealDay;
