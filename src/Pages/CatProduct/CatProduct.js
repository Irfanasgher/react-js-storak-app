import axios from "axios";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Pagination } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { baseUrl } from "../../Routes/apiRoutes";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SortControlBar from "../../Components/SortControlBar/SortControlBar";
import "./CatProduct.scss";
function CatProduct(props) {
  const Id = props.match.params.id;
  const [categoryProduct, setCategoryProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingStatus, setSortingStatus] = useState("1");
  const [priceData, setPriceData] = useState();

  const sortByPriceAsc = () => {
    setPriceData((prevState) => {
      categoryProduct?.products?.data?.sort(
        (a, b) => a.first_variant.sale_price - b.first_variant.sale_price
      );
    });
    console.log("pricetest", priceData);
  };

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return (
        <div>
          <CaretLeftOutlined />
        </div>
      );
    }
    if (type === "next") {
      return (
        <div>
          <CaretRightOutlined />
        </div>
      );
    }
    return originalElement;
  }

  useEffect(() => {
    CategoryrProductList();
  }, [Id, currentPage, sortingStatus]);

  const CategoryrProductList = async (e) => {
    try {
      await axios
        .get(`/category/${Id}/products?page=${currentPage}`)
        .then((response) => {
          const categoryProductData = response.data;
          console.log(categoryProductData);
          setCategoryProduct(categoryProductData);
          if (sortingStatus == "1") {
            setPriceData(categoryProductData?.products?.data);
          } else if (sortingStatus == "2") {
            const setPriceData1 = categoryProduct?.products?.data?.sort(
              (a, b) => b.first_variant.sale_price - a.first_variant.sale_price
            );
            setPriceData(setPriceData1);

            console.log("pricetest", priceData);
          } else if (sortingStatus == "3") {
            const setPriceData1 = categoryProduct?.products?.data?.sort(
              (a, b) => a.first_variant.sale_price - b.first_variant.sale_price
            );
            setPriceData(setPriceData1);

            console.log("pricetest", priceData);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log("sorting", sortingStatus);
  console.log("priceData", priceData);
  // console.log("catCount", categoryProduct?.products?.per_page);
  return (
    <div className="Product" id="cat-product">
      <div className="product-page">
        <div className="container">
          <div className="page-wrapper-inner">
            <div className="sidebar-area">
              <FilterSidebar />
            </div>
            <div className="rightbar-area">
              <div className="product-banner">
                {/* <img
                  src={`${baseUrl}admin/images/categories/banner/org/${categoryProduct?.category?.banner_image}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default-category-cover.jpg";
                  }}
                  alt="Category-Banner"
                /> */}
                <img
                  src="/images/product-list-adv.jpg"
                  alt="advertisement Banner"
                />
              </div>
              <SortControlBar
                data={categoryProduct}
                setStatus={setSortingStatus}
              />
              <div className="product-list-wrapper">
                {/* {priceData?.length > 0 && */}
                {priceData?.map((data, id) => {
                  return <ProductCard data={data} key={id} />;
                })}
              </div>
              <div className="custom-pagination">
                {/* <Pagination
                  defaultCurrent={1}
                  total={categoryProduct?.products?.length}
                  defaultPageSize={numEachPage}
                  onChange={handleChange}
                  itemRender={itemRender}
                /> */}
                {categoryProduct?.products?.data?.length > 0 && (
                  <Pagination
                    current={currentPage}
                    total={categoryProduct?.products?.total}
                    defaultPageSize={categoryProduct?.products?.per_page}
                    onChange={(current, size) => {
                      // console.log("current", current);
                      // console.log("size", size);
                      setCurrentPage(current);
                    }}
                    itemRender={itemRender}
                    hideOnSinglePage={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(CatProduct);
