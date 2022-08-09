import { Select, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./Brand.scss";

function Brand() {
  const { Option } = Select;
  return (
    <div className="brand-section">
      <div className="filter-brand">
        <Select
          showSearch
          placeholder="Search Product"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Apple">Apple</Option>
          <Option value="Del">Del</Option>
          <Option value="HP">HP</Option>
          <Option value="Lenovo">Lenovo</Option>
          <Option value="Acer">Acer</Option>
        </Select>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Sony</div>
          <div className="brand-count">(32)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Boss</div>
          <div className="brand-count">(122)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Samsung</div>
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
export default Brand;
