import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { GiCarKey } from "react-icons/gi";

const features = (props) => {
  return (
    <div className="col-md-4">
      <div className={`feature-box-2 box-hover ${props.className}`}>
        <div className="icon">
          {props.icon === "light-car" ? (
            <AiOutlineCar />
          ) : props.icon === "heavy-car" ? (
            <FiTruck />
          ) : (
            <GiCarKey />
          )}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default features;
