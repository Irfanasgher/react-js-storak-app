import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Select, Slider, Radio, Collapse } from "antd";
import Fulfillment from "../FilterSidebarComp/Fulfillment/Fulfillment";
import Category from "../FilterSidebarComp/Category/Category";
import Brand from "../FilterSidebarComp/Brand/Brand";
import PriceRange from "../FilterSidebarComp/PriceRange/PriceRange";
import ProductRating from "../FilterSidebarComp/ProductRating/ProductRating";
import NewArrivals from "../FilterSidebarComp/NewArrivals/NewArrivals";
import Seller from "../FilterSidebarComp/Seller/Seller";
import Color from "../FilterSidebarComp/Color/Color";

import "./FilterSidebar.scss";

function FilterSidebar() {
  const { Option } = Select;
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }
  const [categories, setCategories] = useState("");
  useEffect(() => {
    categoriesList();
  }, []);
  const categoriesList = async (e) => {
    await axios
      .get("/categories-with-subcategories")
      .then((response) => {
        const cat = response.data.categories;
        setCategories(cat);
      })

      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="product-sidebar">
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Fulfillment" key="1">
          <Fulfillment />
        </Panel>
        <Panel header="Category" key="2">
          <div>
            <Category category={categories} />
          </div>
        </Panel>
        <Panel header="Band" key="3">
          <Brand />
        </Panel>
        <Panel header="Price Range (QR)" key="4">
          <PriceRange />
        </Panel>
        <Panel header="Product Rating" key="5">
          <ProductRating />
        </Panel>
        <Panel header="New Arrivals" key="6">
          <NewArrivals />
        </Panel>
        <Panel header="Colors" key="7">
          <Color />
        </Panel>
        <Panel header="Seller" key="8">
          <Seller />
        </Panel>
      </Collapse>
    </div>
  );
}
export default FilterSidebar;
