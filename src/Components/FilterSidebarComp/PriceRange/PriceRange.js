import { InputNumber, Row, Col, Button } from "antd";
import { RetweetOutlined } from "@ant-design/icons";
import "./PriceRange.scss";

function PriceRange() {
  return (
    <div className="price-range">
      <Row gutter={12}>
        <Col md={8}>
          <div className="range-input">
            <InputNumber min={1} defaultValue={1} />
          </div>
        </Col>
        <Col md={4}>
          <div className="range-icon">
            <RetweetOutlined />
          </div>
        </Col>
        <Col md={8}>
          <div className="range-input">
            <InputNumber min={1} defaultValue={999} />
          </div>
        </Col>
        <Col md={4}>
          <div className="range-button">
            <Button type="link">Go</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default PriceRange;
