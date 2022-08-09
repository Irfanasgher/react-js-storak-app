import { Select, Pagination } from "antd";

import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import SortControlBar from "../../Components/SortControlBar/SortControlBar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./SearchProduct.scss";
const { Option } = Select;
function SearchProduct() {
  return (
    <div className="vendor-landing">
      <div className="search-page">
        <div className="container">
          <div className="page-wrapper-inner">
            <div className="sidebar-area">
              <FilterSidebar />
            </div>
            <div className="rightbar-area">
              <SortControlBar />
              <div className="product-list-wrapper">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              <Pagination defaultCurrent={1} total={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchProduct;
