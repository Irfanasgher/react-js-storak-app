import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDataAction } from "./Redux/Actions/getData";

const NewComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataReducer);
  return (
    <div>
      <Link to="/">NewComponent</Link>
      <Link to="/extracomponent">NewComponent</Link>

      <br />
      <button
        onClick={() => {
          dispatch(getDataAction());
        }}
      >
        Get data
      </button>
      <h2>New Component</h2>
      <p>Quote:{data.quote} </p>
    </div>
  );
};

export default NewComponent;
