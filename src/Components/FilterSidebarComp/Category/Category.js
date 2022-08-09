import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Category.scss";

function Category(props) {
  //const baseUrl = "https://api.storak.qa";
  const baseUrl = "http://192.168.18.12:9000";

  return (
    <div className="category">
      <div className="category-list">
        <div className="main-category">
          <ul>
            {props.category.length > 0 &&
              props?.category.map(function (cat, id) {
                return (
                  <li key={id}>
                    <Link to="#">
                      {cat.title} <span>({cat.subcategories.length})</span>
                    </Link>
                    <div className="sub-category">
                      <ul>
                        {cat.subcategories.length > 0 &&
                          cat.subcategories.map((subcat, id) => {
                            return (
                              <li key={id}>
                                <Link to="#">
                                  {subcat.title}{" "}
                                  <span>({subcat.childcategories.length})</span>
                                </Link>
                                <div className="child-category">
                                  <ul>
                                    {subcat.childcategories.length > 0 &&
                                      subcat.childcategories.map(
                                        (childcat, id) => {
                                          return (
                                            <li key={id}>
                                              <Link to="#">
                                                {childcat.title}
                                              </Link>
                                            </li>
                                          );
                                        }
                                      )}
                                  </ul>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Category;
