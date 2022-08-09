import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";

import "./FeaturedProduct.scss";
function FeaturedProduct() {
  const [featuredProduct, setFeaturedProduct] = useState("");
  // const baseUrl = "http://192.168.18.12:9000/";
  //const baseUrl = "https://api.storak.qa/";
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
    FeaturedProductList();
  }, []);

  const FeaturedProductList = async (e) => {
    try {
      await axios.get("/products/featured").then((response) => {
        const featuredProductData = response.data.featured_products;
        setFeaturedProduct(featuredProductData);
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
              <h2>Featured Products</h2>
            </div>
          </Col>
        </Row>
        <div className="recent-product-main recent-product-slider">
          <Slider {...settings}>
            {featuredProduct.length > 0 &&
              featuredProduct?.slice(0, 10).map((data, id) => {
                return <ProductCard data={data} key={id} />;
              })}
            {/* {recentProduct.length > 0 &&
              recentProduct.map((data, id) => {
                return (
                  <div className="product-widget-theme-2" key={id}>
                    <div className="product-image-theme-2">
                      <img
                        src={`${baseUrl}admin/images/products/primary/sm/${data.primary_image}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/default-image.jpg";
                        }}
                        alt="product"
                      />
                    </div>
                    <div className="product-detail-theme-2">
                      <h2>
                        <Link to={"/product-detail/" + data.id}>
                          {data.name}
                        </Link>
                      </h2>
                      <h3>Sony</h3>
                    </div>
                    <div className="product-price-theme-2">
                      <div className="old-price">QAR 200.99</div>
                      <div className="new-price">QAR 149.99</div>
                    </div>
                    <div className="product-action-theme-2">
                      <Link
                        to={"/product-detail/" + data.id}
                        className="add-cart"
                      >
                        Add to cart
                      </Link>
                      <div className="wishlist-action">
                        <Link to="#">Add to WishList</Link>
                      </div>
                    </div>
                  </div>
                );
              })} */}
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProduct;
