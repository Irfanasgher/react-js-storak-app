import { Tooltip, Row, Col } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import "./WishList.scss";

import { Link } from "react-router-dom";
function WishList() {
  const [wishList, setWishList] = useState("");
  //const baseUrl = "http://192.168.18.12:9000/";
  const baseUrl = "https://api.storak.qa/";
  useEffect(() => {
    WishListListing();
  }, []);

  const WishListListing = async (e) => {
    try {
      await axios.get("/admin/products").then((response) => {
        console.log(response);
        const wishListData = response.data.products;
        setWishList(wishListData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="wishlist-page">
        <div className="container">
          <div className="wishlist-heading">
            <h2>Wishlist</h2>
            <h3>(9 Items)</h3>
          </div>
          <div className="wishlist-inner">
            <Row gutter={20}>
              {wishList.length > 0 &&
                wishList.map((data, id) => {
                  return (
                    <Col md={8} sm={12} xs={24} key={id}>
                      <div className="wishlist-widget-product">
                        <div className="wishlist-image">
                          <img
                            src={`${baseUrl}admin/images/products/primary/sm/${data.primary_image}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/images/default-image.jpg";
                            }}
                            alt="product"
                          />
                          <div className="overlay">
                            <ul>
                              <li>
                                <Tooltip placement="top" title="Delete Item">
                                  <Link to="#">
                                    <i className="fas fa-trash-alt"></i>
                                  </Link>
                                </Tooltip>
                              </li>
                              <li>
                                <Tooltip placement="top" title="Add to Cart">
                                  <Link to="#">
                                    <i className="fas fa-share-square"></i>
                                  </Link>
                                </Tooltip>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h2 className="title">{data.name}</h2>
                        <h3 className="brand">{data.brand.name}</h3>
                        <div className="price">
                          <p className="old-price">QAR 1790</p>
                          <p className="new-price">QAR 1500</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}

              <Col md={8} sm={12} xs={24}>
                <div className="wishlist-widget-product">
                  <div className="wishlist-image">
                    <img src="images/led.jpg" alt="product" />
                    <div className="overlay">
                      <ul>
                        <li>
                          <Tooltip placement="top" title="Delete Item">
                            <Link to="#">
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </Tooltip>
                        </li>
                        <li>
                          <Tooltip placement="top" title="Add to Cart">
                            <Link to="#">
                              <i className="fas fa-share-square"></i>
                            </Link>
                          </Tooltip>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="title">
                    TCL 50-inch ClassName 4-Series 4K UHD Smart Roku LED TV -
                    50S435, 2021 Model
                  </h2>
                  <h3 className="brand">Samsung</h3>
                  <div className="price">
                    <p className="old-price">QAR 1790</p>
                    <p className="new-price">QAR 1500</p>
                  </div>
                </div>
              </Col>
              <Col md={8} sm={12} xs={24}>
                <div className="wishlist-widget-product">
                  <div className="wishlist-image">
                    <img src="images/led.jpg" alt="product" />
                    <div className="overlay">
                      <ul>
                        <li>
                          <Tooltip placement="top" title="Delete Item">
                            <Link to="#">
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </Tooltip>
                        </li>
                        <li>
                          <Tooltip placement="top" title="Add to Cart">
                            <Link to="#">
                              <i className="fas fa-share-square"></i>
                            </Link>
                          </Tooltip>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="title">
                    TCL 50-inch ClassName 4-Series 4K UHD Smart Roku LED TV -
                    50S435, 2021 Model
                  </h2>
                  <h3 className="brand">Samsung</h3>
                  <div className="price">
                    <p className="old-price">QAR 1790</p>
                    <p className="new-price">QAR 1500</p>
                  </div>
                </div>
              </Col>
              <Col md={8} sm={12} xs={24}>
                <div className="wishlist-widget-product">
                  <div className="wishlist-image">
                    <img src="images/led.jpg" alt="product" />
                    <div className="overlay">
                      <ul>
                        <li>
                          <Tooltip placement="top" title="Delete Item">
                            <Link to="#">
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </Tooltip>
                        </li>
                        <li>
                          <Tooltip placement="top" title="Add to Cart">
                            <Link to="#">
                              <i className="fas fa-share-square"></i>
                            </Link>
                          </Tooltip>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="title">
                    TCL 50-inch ClassName 4-Series 4K UHD Smart Roku LED TV -
                    50S435, 2021 Model
                  </h2>
                  <h3 className="brand">Samsung</h3>
                  <div className="price">
                    <p className="old-price">QAR 1790</p>
                    <p className="new-price">QAR 1500</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WishList;
