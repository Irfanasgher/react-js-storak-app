import { useState } from "react";

import axios from "axios";

import {
  Modal,
  Form,
  Input,
  Button,
  Select,
  Rate,
  Progress,
  Row,
  Col,
} from "antd";

import "./ReviewSystemList.scss";
function ReviewSystem(props) {
  const userObject = JSON.parse(localStorage && localStorage.getItem("user"));
  const { Option } = Select;
  const userId = userObject.id; // we will remove in future
  const Id = props.id;
  const [isModelVisbile, setIsModelVisbile] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const showModel = () => {
    setIsModelVisbile(true);
    console.log("showmodel");
  };
  const handleCancel = () => {
    setIsModelVisbile(false);
  };
  // const handleChangeReview = (value) => {
  //   setRating({ value });
  // };
  const handleOk = async (e) => {
    setIsModelVisbile(false);
    await axios
      .post(`/products/${Id}/reviews`, {
        review,
        userId, // we will remove in future
        rating,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        console.log(userId);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
    console.log("submit rev");
    setReview("");
  };

  return (
    <div className="review-system review-list-main">
      <Row gutter={24}>
        <Col md={12}>
          <div className="review-wdiget-top">
            <h2>Rating Snapshot</h2>

            <h2>Select a row below to filter review</h2>
            <div className="progress-review-widget">
              <p>
                5 <i className="fas fa-star"></i>
              </p>
              <Progress percent={90} size="small" strokeColor="#13548D" />
            </div>
            <div className="progress-review-widget">
              <p>
                4 <i className="fas fa-star"></i>
              </p>
              <Progress percent={50} size="small" strokeColor="#13548D" />
            </div>
            <div className="progress-review-widget">
              <p>
                3 <i className="fas fa-star"></i>
              </p>
              <Progress percent={20} size="small" strokeColor="#13548D" />
            </div>
            <div className="progress-review-widget">
              <p>
                2 <i className="fas fa-star"></i>
              </p>
              <Progress percent={10} size="small" strokeColor="#13548D" />
            </div>
            <div className="progress-review-widget">
              <p>
                1 <i className="fas fa-star"></i>
              </p>
              <Progress percent={5} size="small" strokeColor="#13548D" />
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className="review-widget-top-main">
            <div className="review-wdiget-top">
              <h2>Average Customer Ratting</h2>
              <div className="rating-show">
                <Rate allowHalf disabled defaultValue={4.5} />
                <h3>4.5</h3>
              </div>
            </div>
            <div className="add-review">
              <Button type="primary" onClick={showModel}>
                Write a Review
              </Button>
              <Modal
                title="Write a Review"
                visible={isModelVisbile}
                onCancel={handleCancel}
                onOk={handleOk}
              >
                <Form>
                  <div className="write-review-star">
                    <Rate
                      onChange={(value) => {
                        setRating(value);
                      }}
                      value={rating}
                    />
                  </div>

                  <Form.Item name={["user", "review"]} label="Review">
                    <Input.TextArea
                      onChange={(e) => setReview(e.target.value)}
                    />
                  </Form.Item>
                </Form>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
      <div className="review-list-top">
        <div className="review-total-info">
          <p>1-8 of 28 Reviews</p>
        </div>
        <div className="review-sorting">
          <Select defaultValue="relevent">
            <Option value="relevent">Sort by Most Relevent</Option>
            <Option value="top">Sort by Top</Option>
            <Option value="bottom">Sort by Bottom</Option>
          </Select>
        </div>
      </div>
      <div className="review-widget-listing">
        <div className="user-review">
          <div className="user-stars">
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
                <i className="far fa-star"></i>
              </li>
            </ul>
            <p>4 out of 4 stars</p>
          </div>
          <div className="user-rating-detail">
            <h2>User Name - April 20, 2020</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="review-widget-listing">
        <div className="user-review">
          <div className="user-stars">
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
            <p>5 out of 5 stars</p>
          </div>
          <div className="user-rating-detail">
            <h2>User Name - April 20, 2020</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewSystem;
