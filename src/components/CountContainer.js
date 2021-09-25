import React from "react";

const CountContainer = ({ children }) => {
  return (
    <>
      <div className="countWrapper" style={{ background: "white" }}>
        {children}
      </div>
      <button className="btn">Change Theme</button>
    </>
  );
};
export default CountContainer;
