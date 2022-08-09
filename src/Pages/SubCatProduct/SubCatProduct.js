import { Tooltip, Row, Col } from "antd";

import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import { Link } from "react-router-dom";
import "./SubCatProduct.scss";
function SubCatProduct() {
  return (
    <div className="Product" id="sub-cat-product">
      <div className="product-page">
        <div className="container">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={6}>
              <FilterSidebar />
            </Col>
            <Col xs={24} sm={24} md={18}>
              <div className="sub-cat-heading">
                <h2>Electronics Assessories</h2>
                <i className="fas fa-hand-point-right"></i>
                <h3>Laptops</h3>
              </div>
              <div className="list-grid-product-widget">
                <Row gutter={16}>
                  <Col xs={8} sm={8} md={8}>
                    <div className="list-product-image">
                      <img src="images/laptop-pic.png" alt="product" />
                    </div>
                  </Col>
                  <Col xs={16} sm={16} md={16}>
                    <div className="list-product-detail">
                      <div className="discount">
                        <p>20%</p>
                      </div>
                      <h2>
                        Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS
                        Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4,
                        128GB SSD, Backlit Keyboard, Windows 10 in S Mode,
                        A515-43-R19L, Silver
                      </h2>
                      <div className="rating">
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
                        <span>(54)</span>
                      </div>
                      <div className="price">
                        <div className="real-price">1500 QAR</div>
                        <div className="old-price">1799 QAR</div>
                      </div>
                      <div className="product-list-bottom">
                        <div className="actions">
                          <ul>
                            <li>
                              <Tooltip placement="bottom" title="Add to Cart">
                                <Link to="#">
                                  <i className="fab fa-opencart"></i>
                                </Link>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip placement="bottom" title="Favorite">
                                <Link to="#">
                                  <i className="far fa-heart"></i>
                                </Link>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip placement="bottom" title="Compare">
                                <Link to="#">
                                  <i className="fas fa-exchange-alt"></i>
                                </Link>
                              </Tooltip>
                            </li>
                          </ul>
                        </div>
                        <div className="read-more">
                          <Link to="#">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="list-grid-product-widget">
                <Row gutter={16}>
                  <Col xs={8} sm={8} md={8}>
                    <div className="list-product-image">
                      <img src="images/laptop-pic.png" alt="product" />
                    </div>
                  </Col>
                  <Col xs={16} sm={16} md={16}>
                    <div className="list-product-detail">
                      <div className="discount">
                        <p>20%</p>
                      </div>
                      <h2>
                        Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS
                        Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4,
                        128GB SSD, Backlit Keyboard, Windows 10 in S Mode,
                        A515-43-R19L, Silver
                      </h2>
                      <div className="rating">
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
                        <span>(54)</span>
                      </div>
                      <div className="price">
                        <div className="real-price">1500 QAR</div>
                        <div className="old-price">1799 QAR</div>
                      </div>
                      <div className="product-list-bottom">
                        <div className="actions">
                          <ul>
                            <li>
                              <Tooltip placement="bottom" title="Add to Cart">
                                <Link to="#">
                                  <i className="fab fa-opencart"></i>
                                </Link>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip placement="bottom" title="Favorite">
                                <Link to="#">
                                  <i className="far fa-heart"></i>
                                </Link>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip placement="bottom" title="Compare">
                                <Link to="#">
                                  <i className="fas fa-exchange-alt"></i>
                                </Link>
                              </Tooltip>
                            </li>
                          </ul>
                        </div>
                        <div className="read-more">
                          <Link to="#">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="list-grid-product-widget">
                <Row gutter={16}>
                  <Col xs={8} sm={8} md={8}>
                    <div className="list-product-image">
                      <img src="images/laptop-pic.png" alt="product" />
                    </div>
                  </Col>
                  <Col xs={16} sm={16} md={16}>
                    <div className="list-product-detail">
                      <div className="discount">
                        <p>20%</p>
                      </div>
                      <h2>
                        Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS
                        Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4,
                        128GB SSD, Backlit Keyboard, Windows 10 in S Mode,
                        A515-43-R19L, Silver
                      </h2>
                      <div className="rating">
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
                        <span>(54)</span>
                      </div>
                      <div className="price">
                        <div className="real-price">1500 QAR</div>
                        <div className="old-price">1799 QAR</div>
                      </div>
                      <div className="product-list-bottom">
                        <div className="actions">
                          <ul>
                            <li>
                              <Tooltip placement="bottom" title="Add to Cart">
                                <Link to="#">
                                  <i className="fab fa-opencart"></i>
                                </Link>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip placement="bottom" title="Favorite">
                                <Link to="#">
                                  <i className="far fa-heart"></i>
                                </Link>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip placement="bottom" title="Compare">
                                <Link to="#">
                                  <i className="fas fa-exchange-alt"></i>
                                </Link>
                              </Tooltip>
                            </li>
                          </ul>
                        </div>
                        <div className="read-more">
                          <Link to="#">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default SubCatProduct;
