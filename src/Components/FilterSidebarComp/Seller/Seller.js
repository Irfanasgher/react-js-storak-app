import { Select, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./Seller.scss";

function Seller() {
  const { Option } = Select;
  return (
    <div className="brand-section">
      <div className="filter-brand">
        <Select
          showSearch
          placeholder="Search Seller"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Noon">Noon</Option>
          <Option value="Alibaba">Alibaba</Option>
          <Option value="Fatah">Al Fatah</Option>
          <Option value="J&J">J&J</Option>
        </Select>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Noon</div>
          <div className="brand-count">(32)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Alibaba</div>
          <div className="brand-count">(122)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Al Fatah</div>
          <div className="brand-count">(22)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">J&j</div>
          <div className="brand-count">(02)</div>
        </Checkbox>
      </div>
      <Link to="#">See All</Link>
    </div>
  );
}
export default Seller;
