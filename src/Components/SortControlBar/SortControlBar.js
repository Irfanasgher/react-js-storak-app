import { useState } from "react";
import { Row, Col, Select } from "antd";
import { UnorderedListOutlined, TableOutlined } from "@ant-design/icons";
import "./SortControlBar.scss";
const { Option } = Select;
function SortControlBar(props) {
  const [isGrid, layoutToggle] = useState({
    value: true,
  });
  const handleChange = (sortValue) => {
    props?.setStatus(sortValue);
  };

  return (
    <div className="search-top-bar">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={10}>
          <div className="result-value">
            <p>
              Displaying <span>{props?.data?.products?.per_page}</span> of
              <span>{props?.data?.products?.total}</span> results for
              <span>"{props?.data?.category?.title}"</span>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14}>
          <div className="top-bar-right">
            <div className="search-selection">
              <label>Sort By</label>

              <Select
                defaultValue="recommended"
                onChange={(value) => handleChange(value)}
              >
                <Option value="1">Recommended</Option>
                <Option value="2">Price High to Low</Option>
                <Option value="3">Price Low to High</Option>
                <Option value="4">New Arrivals</Option>
              </Select>
            </div>
            <div className="search-selection">
              <label>Display</label>
              <Select defaultValue="50">
                <Option value="50">50 Per Page</Option>
                <Option value="100">100 Per Page</Option>
                <Option value="150">150 Per Page</Option>
              </Select>
            </div>
            <div className="search-selection">
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
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SortControlBar;
