import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import Slider from "react-slick";
import { baseUrl } from "../../Routes/apiRoutes";
import "./Partners.scss";

function Partners() {
  const [partners, setPartners] = useState("");
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
    PartnersList();
  }, []);
  const PartnersList = async (e) => {
    try {
      await axios.get("/partners").then((response) => {
        const partnerData = response.data.partners;
        setPartners(partnerData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="clients-section">
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="client-heading">
              <h2>our partners</h2>
            </div>
          </Col>
        </Row>
        <div className="client-logo">
          <Slider {...settings}>
            {partners.length > 0 &&
              partners.map((data, id) => {
                return (
                  <div className="client-widget" key={id}>
                    <img
                      src={`${baseUrl}admin/images/partners/org/${data.image}`}
                      alt="client"
                    />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default Partners;
