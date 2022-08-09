import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ReviewSystemList from "../../Components/ReviewSystemList/ReviewSystemList";

import SliderImage from "react-zoom-slider";

import {
  Button,
  Breadcrumb,
  Tabs,
  Row,
  Col,
  InputNumber,
  Modal,
  Form,
  Input,
} from "antd";
import "./ProductDetail.scss";

function ProductDetail(props) {
  const Id = props.match.params.id;
  const { TabPane } = Tabs;
  const [product, setProduct] = useState("");
  const [question, setQuestion] = useState("");
  const [items, setItems] = useState("");
  const [isModelVisbile, setIsModelVisbile] = useState(false);
  const showModel = () => {
    setIsModelVisbile(true);
    console.log("showmodel");
  };
  const handleCancel = () => {
    setIsModelVisbile(false);
  };
  const handleOk = async (e) => {
    setIsModelVisbile(false);
    await axios
      .post(`/products/${Id}/questions`, {
        question,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
    console.log("submit question");
    setQuestion("");
  };
  const slidesData = [
    {
      id: 1,
      image: "/images/product-detail.jpg",
    },
    {
      id: 2,
      image: "/images/product-detail.jpg",
    },
    {
      id: 3,
      image: "/images/product-detail.jpg",
    },
    {
      id: 4,
      image: "/images/product-detail.jpg",
    },
    {
      id: 5,
      image: "/images/product-detail.jpg",
    },
    {
      id: 6,
      image: "/images/product-detail.jpg",
    },
  ];

  useEffect(() => {
    ProductDetailList();
  }, []);

  const ProductDetailList = async (e) => {
    try {
      await axios.get(`/admin/products/${Id}/variants`).then((response) => {
        console.log(response);
        const productData = response.data;
        setProduct(productData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (item) => {
    setItems([...items, item]);
    console.log(items);
    console.log("yes");
  };

  const descData = product?.product?.detailed_description;

  return (
    <div id="prduct-detail-page">
      {items.length > 0 &&
        items.map((data, id) => {
          <div key={id}>{data.product}</div>;
        })}
      <div className="product-detail-page">
        <div className="container">
          <Row gutter={24}>
            <Col md={8}>
              <div className="product-main-image">
                <div className="product-breadcrumb">
                  <Breadcrumb separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                      Computer Assessories
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Laptop</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <SliderImage
                  data={slidesData}
                  showDescription={true}
                  direction="right"
                />
              </div>
            </Col>
            <Col md={10}>
              <div className="product-desc-widget">
                <div className="product-desc-top">
                  <h2 className="title">{product?.product?.name}</h2>
                  <div className="brand">
                    <p>
                      Brand:
                      <Link to="/store">
                        <span>Rain Design</span>
                      </Link>
                    </p>
                  </div>
                  <div className="rating-system">
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
                    <span>8,890 ratings </span>
                  </div>
                  <div className="price-widget">
                    <div className="old-price">122.89 QAR</div>
                    <div className="new-price">122.89 QAR</div>
                  </div>
                  <div className="save-widget">
                    <div className="save-notice">You Save:</div>
                    <div className="save-price">36.65 QAR</div>
                    <div className="save-percentage">30% OFF</div>
                  </div>
                  <div className="fast-delivery">
                    <p>Fast Delivery</p>
                    <ul>
                      <li>
                        <Button
                          className="primary"
                          onClick={() => addItem(product)}
                        >
                          Wishlist
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="add-cart-widget">
                  <div className="quantity-product">
                    <label htmlFor="quantity">Quantity</label>
                    <InputNumber min={1} max={10} defaultValue={3} />
                  </div>
                  <Row gutter={12}>
                    <Col xs={12}>
                      <div className="buy-now-product">
                        <Link to="#">Buy Now</Link>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="add-cart-product">
                        <Link to="/cart">Add to Shopping Bag</Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="product-points">
                  <Row gutter={12}>
                    <Col sm={12}>
                      <div className="product-point-widget">
                        <img src="/images/garentee.svg" alt="garentee" />
                        <p>100% Genuine Brands</p>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="product-point-widget">
                        <img src="/images/cash.svg" alt="cash" />
                        <p>Cash On Delivery</p>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="product-point-widget">
                        <img src="/images/exchange.svg" alt="exchange" />
                        <p>Free Exchanges</p>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="product-point-widget">
                        <img
                          src="/images/free-delievery.svg"
                          alt="free-delievery"
                        />
                        <p>Free Delivery</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="shiping-widget">
                <h2>Delivery Options</h2>
                <div className="shiping-widget-list">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Sindh, Karachi - Gulshan-e-Iqbal, Block 15</p>
                  <div className="change-address">
                    <Link to="#">Change</Link>
                  </div>
                </div>
                <div className="shiping-widget-list delivery">
                  <i className="fas fa-truck"></i>
                  <p>
                    Home Delivery <span>3-4 Days</span>
                  </p>
                  <div className="delivery-price">29 QAR</div>
                </div>
                <div className="shiping-widget-list">
                  <i className="fas fa-money-bill-wave"></i>
                  <p>Cash on Delivery Available</p>
                </div>
                <div className="return-policy">
                  <h2>Return & Warranty</h2>
                  <div className="shiping-widget-list">
                    <i className="fas fa-check-square"></i>
                    <p>100% Authentic</p>
                  </div>
                  <div className="shiping-widget-list">
                    <i className="fas fa-check-square"></i>
                    <p>
                      14 days easy return
                      <span>Change of mind is not applicable</span>
                    </p>
                  </div>
                  <div className="shiping-widget-list">
                    <i className="fas fa-shield-alt"></i>
                    <p>1 Year Brand Warranty</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="product-detail-bottom">
            <Tabs defaultActiveKey="1" type="card">
              <TabPane tab="Description" key="1">
                <div className="description">
                  <div dangerouslySetInnerHTML={{ __html: descData }} />
                </div>
              </TabPane>
              <TabPane tab="Review System" key="2">
                <div className="review-system">
                  <ReviewSystemList id={props?.match?.params?.id} />
                </div>
              </TabPane>
              <TabPane tab="Questions about this product" key="3">
                <div className="question-answer">
                  <div className="question-title">
                    <h2>
                      Questions about this product
                      <span>(21)</span>
                    </h2>

                    <Button type="primary" onClick={showModel}>
                      Ask About Product
                    </Button>
                    <Modal
                      title="Ask About Product"
                      visible={isModelVisbile}
                      onCancel={handleCancel}
                      onOk={handleOk}
                      okText="Submit"
                    >
                      <Form>
                        <Form.Item label="Ask Question">
                          <Input
                            placeholder="Ask Question"
                            onChange={(e) => setQuestion(e.target.value)}
                          />
                        </Form.Item>
                      </Form>
                    </Modal>
                  </div>

                  <div className="question-widget">
                    <div className="question">
                      <h3>Q</h3>
                      <div className="question-detail">
                        <p>
                          iphone 12 pro max 256gb confirm face time enabled and
                          dual sim nano and e-sim ?
                        </p>
                        <span>Vinod K. - 15 Dec 2020</span>
                      </div>
                    </div>
                    <div className="answer">
                      <h3>A</h3>
                      <div className="question-detail">
                        <p>
                          please check the colour size price availablity and
                          more in the variation section on the product page
                        </p>
                        <span>Bin Saeed Communication (Khanewal) weeks</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-widget">
                    <div className="question">
                      <h3>Q</h3>
                      <div className="question-detail">
                        <p>
                          iphone 12 pro max 256gb confirm face time enabled and
                          dual sim nano and e-sim ?
                        </p>
                        <span>Vinod K. - 15 Dec 2020</span>
                      </div>
                    </div>
                    <div className="answer">
                      <h3>A</h3>
                      <div className="question-detail">
                        <p>
                          please check the colour size price availablity and
                          more in the variation section on the product page
                        </p>
                        <span>Bin Saeed Communication (Khanewal) weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(ProductDetail);
