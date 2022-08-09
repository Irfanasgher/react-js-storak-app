import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./AppAdvertisement.scss";

function AppAdvertisement() {
  return (
    <section className="app-advertisement-section">
      <div className="inner-container">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={18}>
            <div className="mobile-adv-content">
              <h2>
                Download to <br /> flawlessly completing <br /> your need
              </h2>
              <Row gutter={16}>
                <Col xs={12} sm={12} md={12}>
                  <div className="app-link">
                    <Link to="#">
                      <img src="/images/apple-icon.svg" alt="apple-icon" />
                    </Link>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <div className="app-link">
                    <Link to="">
                      <img src="/images/andriod-icon.svg" alt="andriod-icon" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <div className="app-image">
              <img src="/images/mobile-cell.png" alt="mobile-cell" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default AppAdvertisement;
