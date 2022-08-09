import { Row, Col } from "antd";
import "./MegaDeal.scss";
import screenBackground from "./../../images/mega-deal-background.jpg";
function MegaDeal() {
  return (
    <div>
      <section
        className="mega-deal-section"
        style={{ backgroundImage: `url(${screenBackground})` }}
      >
        <div className="container">
          <div className="deal-inner">
            <h2>Mega Deals</h2>
            <div className="meg-deal-container">
              <Row gutter={18}>
                <Col md={17}>
                  <Row gutter={24}>
                    <Col xs={12} md={8} lg={8}>
                      <div className="mega-deal-image">
                        <img src="/images/mega-1.png" alt="mega-deal-product" />
                      </div>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <div className="mega-deal-image">
                        <img src="/images/mega-2.png" alt="mega-deal-product" />
                      </div>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <div className="mega-deal-image">
                        <img src="/images/mega-3.png" alt="mega-deal-product" />
                      </div>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <div className="mega-deal-image">
                        <img src="/images/mega-4.png" alt="mega-deal-product" />
                      </div>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <div className="mega-deal-image">
                        <img src="/images/mega-5.png" alt="mega-deal-product" />
                      </div>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                      <div className="mega-deal-image">
                        <img src="/images/mega-6.png" alt="mega-deal-product" />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} md={7} lg={7}>
                  <div className="mega-deal-image-large">
                    <img
                      src="/images/mega-deal-main.png"
                      alt="mega-deal-product"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MegaDeal;
