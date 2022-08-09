import { Fragment, useState } from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { UnorderedListOutlined, TableOutlined } from "@ant-design/icons";

import "./Blog.scss";

function Blog() {
  const settings = {
    dots: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [isGrid, layoutToggle] = useState({
    value: true,
  });
  return (
    <div className="blog-page">
      <div className="blog-page-inner">
        <Fragment>
          <div className="top-news">
            <div className="container">
              <Slider {...settings}>
                <div className="top-news-widget">
                  <img src="/images//post_1.jpg" alt="" />
                  <div className="top-news-content">
                    <h2>Project</h2>
                    <Link to="#">Elegant Origami</Link>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem. Veritatis obcaecati tenetur iure
                      eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                      quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                      quas aliquid. Reprehenderit, quia. Quo neque error
                      repudiandae fuga? Ipsa laudantium molestias eos sapiente
                      officiis modi at sunt excepturi expedita sint?
                    </p>
                  </div>
                </div>
                <div className="top-news-widget">
                  <img src="/images//post_1.jpg" alt="" />
                  <div className="top-news-content">
                    <h2>Branding</h2>
                    <Link to="#">Brouchure Print Design</Link>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem. Veritatis obcaecati tenetur iure
                      eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                      quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                      quas aliquid. Reprehenderit, quia. Quo neque error
                      repudiandae fuga? Ipsa laudantium molestias eos sapiente
                      officiis modi at sunt excepturi expedita sint?
                    </p>
                  </div>
                </div>
                <div className="top-news-widget">
                  <img src="/images//post_1.jpg" alt="" />
                  <div className="top-news-content">
                    <h2>Design</h2>
                    <Link to="#">Polugonal Heart</Link>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem. Veritatis obcaecati tenetur iure
                      eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                      quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                      quas aliquid. Reprehenderit, quia. Quo neque error
                      repudiandae fuga? Ipsa laudantium molestias eos sapiente
                      officiis modi at sunt excepturi expedita sint?
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="news-content-area">
            <div className="container">
              <Row gutter={24}>
                <Col md={16}>
                  <div className="news-widget">
                    <img src="/images//post_1.jpg" alt="" />
                    <h2>Project</h2>
                    <h3>Elegant Origami</h3>
                    <span>June 10, 2021</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem. Veritatis obcaecati tenetur iure
                      eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                      quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                      quas aliquid. Reprehenderit, quia. Quo neque error
                      repudiandae fuga? Ipsa laudantium molestias eos sapiente
                      officiis modi at sunt excepturi expedita sint?
                    </p>
                    <Link to="#">Read More</Link>
                  </div>
                  <div className="blog-content-layout">
                    <div className="blog-layout-selection">
                      <Row>
                        <Col md={12}>Sort Layout</Col>
                        <Col md={12}>
                          <div className="list">
                            <UnorderedListOutlined
                              className={isGrid["value"] ? "" : "active"}
                              onClick={() => layoutToggle({ value: false })}
                            />
                            <TableOutlined
                              className={isGrid["value"] ? "active" : ""}
                              onClick={() => layoutToggle({ value: true })}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div
                      className={
                        isGrid["value"] ? "layout-grid" : "layout-list"
                      }
                    >
                      <div className="blog-grid-layout">
                        <div className="blog-image">
                          <img src="/images//post_1.jpg" alt="" />
                        </div>
                        <div className="blog-content">
                          <h2>Project</h2>
                          <h3>Elegant Origami</h3>
                          <span>June 10, 2021</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique accusantium nemo autem.
                            Veritatis obcaecati tenetur iure eius earum ut
                            molestias architecto voluptate aliquam nihil,
                            eveniet aliquid culpa officia aut! Impedit sit sunt
                            quaerat, odit, tenetur error, harum nesciunt ipsum
                            debitis quas aliquid. Reprehenderit, quia. Quo neque
                            error repudiandae fuga? Ipsa laudantium molestias
                            eos sapiente officiis modi at sunt excepturi
                            expedita sint?
                          </p>
                          <Link to="#">Read More</Link>
                        </div>
                      </div>
                      <div className="blog-grid-layout">
                        <div className="blog-image">
                          <img src="/images//post_1.jpg" alt="" />
                        </div>
                        <div className="blog-content">
                          <h2>Project</h2>
                          <h3>Elegant Origami</h3>
                          <span>June 10, 2021</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique accusantium nemo autem.
                            Veritatis obcaecati tenetur iure eius earum ut
                            molestias architecto voluptate aliquam nihil,
                            eveniet aliquid culpa officia aut! Impedit sit sunt
                            quaerat, odit, tenetur error, harum nesciunt ipsum
                            debitis quas aliquid. Reprehenderit, quia. Quo neque
                            error repudiandae fuga? Ipsa laudantium molestias
                            eos sapiente officiis modi at sunt excepturi
                            expedita sint?
                          </p>
                          <Link to="#">Read More</Link>
                        </div>
                      </div>
                      <div className="blog-grid-layout">
                        <div className="blog-image">
                          <img src="/images//post_1.jpg" alt="" />
                        </div>
                        <div className="blog-content">
                          <h2>Project</h2>
                          <h3>Elegant Origami</h3>
                          <span>June 10, 2021</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique accusantium nemo autem.
                            Veritatis obcaecati tenetur iure eius earum ut
                            molestias architecto voluptate aliquam nihil,
                            eveniet aliquid culpa officia aut! Impedit sit sunt
                            quaerat, odit, tenetur error, harum nesciunt ipsum
                            debitis quas aliquid. Reprehenderit, quia. Quo neque
                            error repudiandae fuga? Ipsa laudantium molestias
                            eos sapiente officiis modi at sunt excepturi
                            expedita sint?
                          </p>
                          <Link to="#">Read More</Link>
                        </div>
                      </div>
                      <div className="blog-grid-layout">
                        <div className="blog-image">
                          <img src="/images//post_1.jpg" alt="" />
                        </div>
                        <div className="blog-content">
                          <h2>Project</h2>
                          <h3>Elegant Origami</h3>
                          <span>June 10, 2021</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique accusantium nemo autem.
                            Veritatis obcaecati tenetur iure eius earum ut
                            molestias architecto voluptate aliquam nihil,
                            eveniet aliquid culpa officia aut! Impedit sit sunt
                            quaerat, odit, tenetur error, harum nesciunt ipsum
                            debitis quas aliquid. Reprehenderit, quia. Quo neque
                            error repudiandae fuga? Ipsa laudantium molestias
                            eos sapiente officiis modi at sunt excepturi
                            expedita sint?
                          </p>
                          <Link to="#">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="sidebar-news">
                    <div className="news-heading">
                      <h2>About Us</h2>
                      <p>
                        Sed pellentesque nibh enim, quis euismod enim lacinia
                        nec. Phasellus quam diam, semper in erat eu. Consectetur
                        adipiscing elit. Sed pellentesque nibh enim, quis
                        euismod enim lacinia nec.
                      </p>
                      <div className="social-nav">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-youtube"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-google-plus-g"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="latest-post">
                      <h2>Latest Posts</h2>
                      <div className="latest-post-widget">
                        <Row gutter={24}>
                          <Col md={10}>
                            <div className="latest-post-image">
                              <img src="/images//post_1.jpg" alt="" />
                            </div>
                          </Col>
                          <Col md={14}>
                            <div className="latest-post-desc">
                              <Link to="/">Elegant Origami</Link>
                              <span>June 10, 2021</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="latest-post-widget">
                        <Row gutter={24}>
                          <Col md={10}>
                            <div className="latest-post-image">
                              <img src="/images//post_1.jpg" alt="" />
                            </div>
                          </Col>
                          <Col md={14}>
                            <div className="latest-post-desc">
                              <Link to="/">Elegant Origami</Link>
                              <span>June 10, 2021</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="latest-post-widget">
                        <Row gutter={24}>
                          <Col md={10}>
                            <div className="latest-post-image">
                              <img src="/images//post_1.jpg" alt="" />
                            </div>
                          </Col>
                          <Col md={14}>
                            <div className="latest-post-desc">
                              <Link to="/">Elegant Origami</Link>
                              <span>June 10, 2021</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="latest-post-widget">
                        <Row gutter={24}>
                          <Col md={10}>
                            <div className="latest-post-image">
                              <img src="/images//post_1.jpg" alt="" />
                            </div>
                          </Col>
                          <Col md={14}>
                            <div className="latest-post-desc">
                              <Link to="/">Elegant Origami</Link>
                              <span>June 10, 2021</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="latest-post-widget">
                        <Row gutter={24}>
                          <Col md={10}>
                            <div className="latest-post-image">
                              <img src="/images//post_1.jpg" alt="" />
                            </div>
                          </Col>
                          <Col md={14}>
                            <div className="latest-post-desc">
                              <Link to="/">Elegant Origami</Link>
                              <span>June 10, 2021</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
}
export default Blog;
