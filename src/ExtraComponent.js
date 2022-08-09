import React from "react";
import { useSelector } from "react-redux";

const ExtraComponent = () => {
  const data = useSelector((state) => state.dataReducer);
  return (
    <div>
      <h2>Extra component</h2>
      <p>Quote: {data.quote}</p>
    </div>
  );
};

export default ExtraComponent;
