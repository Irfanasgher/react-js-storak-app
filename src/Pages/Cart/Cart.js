import { Link } from "react-router-dom";

import { Select, Row, Col, Form, InputNumber, Input, Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import "./Cart.scss";
const { Option } = Select;

function Cart() {
  return (
    <div className="cart-page" id="cart-page">
      <div className="cart-page-inner">
        <div className="container">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={24} lg={16}>
              <div className="cart-heading">
                <div className="cart-item">
                  <h2>Cart</h2>
                  <span>(1 items)</span>
                </div>
                <div className="deliver-to">
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Deliver to Country"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Qatar">Qatar</Option>
                    <Option value="Dubai">Dubai</Option>
                    <Option value="SaudiArabia">Saudi Arabia</Option>
                    <Option value="America">America</Option>
                    <Option value="Pakistan">Pakistan</Option>
                    <Option value="China">China</Option>
                  </Select>
                </div>
              </div>
              <div className="cart-box">
                <img src="/images/shoes.jpg" alt="shoes" />

                <div className="cart-detail">
                  <div className="cart-detail-left">
                    <h2>SKECHERS</h2>
                    <h3>GOrun Pulse Sport Shoes Charcoal Lime 43.5 EU</h3>
                    <p>
                      Sold by <strong>Storak</strong>
                    </p>
                    <div className="remove-cart">
                      <DeleteTwoTone twoToneColor="#eb2f96" />
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="cart-detail-right">
                    <div className="price">
                      <span>QAR</span>
                      <p>265</p>
                    </div>

                    <InputNumber value="1" />
                  </div>
                </div>
              </div>
              <div className="cart-box">
                <img src="/images/fashion.png" alt="fashion" />

                <div className="cart-detail">
                  <div className="cart-detail-left">
                    <h2>SKECHERS</h2>
                    <h3>Gorun Pulse Sport Shoes Charcoal Lime 43.5 EU</h3>
                    <p>
                      Sold by <strong>Storak</strong>
                    </p>
                    <div className="remove-cart">
                      <DeleteTwoTone twoToneColor="#eb2f96" />
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="cart-detail-right">
                    <div className="price">
                      <span>QAR</span>
                      <p>265</p>
                    </div>

                    <InputNumber value="1" />
                  </div>
                </div>
              </div>
              <div className="cart-box">
                <img src="/images/shoes.jpg" alt="shoes" />

                <div className="cart-detail">
                  <div className="cart-detail-left">
                    <h2>SKECHERS</h2>
                    <h3>GOrun Pulse Sport Shoes Charcoal Lime 43.5 EU</h3>
                    <p>
                      Sold by <strong>Storak</strong>
                    </p>
                    <div className="remove-cart">
                      <DeleteTwoTone twoToneColor="#eb2f96" />
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="cart-detail-right">
                    <div className="price">
                      <span>QAR</span>
                      <p>265</p>
                    </div>

                    <InputNumber value="1" />
                  </div>
                </div>
              </div>
              <div className="continue-shoping">
                <Link to="#">Continue Shopping</Link>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8}>
              <div className="order-cart">
                <h2>Order Summary</h2>
                <div className="coupon-form">
                  <Form>
                    <Input placeholder="Apply Coupon Code or Gift Card" />
                    <Button type="primary" htmlType="submit">
                      Apply
                    </Button>
                  </Form>
                </div>
                <div className="cart-price-list">
                  <ul>
                    <li>
                      <span>Subtotal (1 item)</span>
                      <p>QAR 265.00</p>
                    </li>
                    <li>
                      <span>Shipping</span>
                      <p className="free">Free</p>
                    </li>
                  </ul>
                </div>
                <div className="cart-price-list-total">
                  <ul>
                    <li>
                      <div className="total-desc">
                        Total <span>(inclusive of VAT)</span>
                      </div>
                      <div className="total-price">
                        <h2>QAR 265.00</h2>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="checkout-btn">
                  <Link to="/thankyou">
                    <Button type="primary" htmlType="submit" block>
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Cart;
