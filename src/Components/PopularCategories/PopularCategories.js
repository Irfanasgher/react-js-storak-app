import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import { baseUrl } from "../../Routes/apiRoutes";
import "./PopularCategories.scss";

function PopularCategories() {
  console.log(baseUrl);
  const FeaturedSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const [category, setCategory] = useState("");

  useEffect(() => {
    categoryList();
  }, []);

  const categoryList = async (e) => {
    await axios
      .get("/categories")
      .then((response) => {
        const popCat = response.data.categories;
        setCategory(popCat);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  //const baseUrl = "https://api.storak.qa";
  // const baseUrl = "http://192.168.18.12:9000";
  return (
    <section className="explore-categories">
      <div className="container">
        <div className="section-heading">
          {/* <h2>Explore Categories</h2> */}
        </div>
        <Slider {...FeaturedSettings}>
          {category.length > 0 &&
            category.map((cat, id) => {
              return (
                <div className="home-categories" key={id}>
                  <div className="category-image">
                    <img
                      src={`${baseUrl}admin/images/categories/mobile/org/${cat.mobile_image}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/default-image.jpg";
                      }}
                      alt="category"
                    />
                  </div>
                  <div className="category-title">
                    <Link to="#">{cat.title}</Link>
                  </div>
                </div>
              );
            })}
        </Slider>
        {/* <Row gutter={12}>
          {category.length > 0 &&
            category.slice(0, 6).map((cat, id) => {
              return (
                <Col xs={12} sm={12} md={8} lg={4} key={id}>
                  <div className="explore-cat-widget">
                    <div className="cat-widget-image">
                      <img
                        src={`${baseUrl}/admin/images/categories/logo/sm/${cat.logo_image}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/default-image.jpg";
                        }}
                        alt="groceries"
                      />
                    </div>
                    <div className="cat-widget-title">
                      <Link to="#" className="link">
                        {cat.title}
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row> */}
      </div>
    </section>
  );
}

export default PopularCategories;
