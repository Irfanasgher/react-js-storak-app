import { Select, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./NewArrivals.scss";

function NewArrivals() {
  const { Option } = Select;
  return (
    <div className="new-arrival">
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Last 3 Days</div>
          <div className="brand-count">(32)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Last 7 Days</div>
          <div className="brand-count">(122)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Last 15 Days</div>
          <div className="brand-count">(22)</div>
        </Checkbox>
      </div>
      <div className="brand-list">
        <Checkbox>
          <div className="brand-check">Last 30 Days</div>
          <div className="brand-count">(02)</div>
        </Checkbox>
      </div>
    </div>
  );
}
export default NewArrivals;
