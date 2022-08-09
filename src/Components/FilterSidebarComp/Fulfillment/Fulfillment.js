import { Checkbox } from "antd";
import "./Fulfillment.scss";

function Fulfillment() {
  return (
    <div className="fulfillment">
      <div className="checkbox-list">
        <Checkbox>
          <div className="free">Free</div>
        </Checkbox>
      </div>
      <div className="checkbox-list">
        <Checkbox>
          <div className="economy">economy</div>
        </Checkbox>
      </div>
      <div className="checkbox-list">
        <Checkbox>
          <div className="standard">Standard</div>
        </Checkbox>
      </div>
      <div className="checkbox-list">
        <Checkbox>
          <div className="express">Express</div>
        </Checkbox>
      </div>
    </div>
  );
}
export default Fulfillment;
