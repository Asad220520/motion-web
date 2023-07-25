import React from "react";
import Question from "./Question";
import Zoning from "./Zoning";

const Club = () => {
  return (
    <div id="club">
      <div className="club">
        <Question />
        <Zoning/>
      </div>
    </div>
  );
};

export default Club;
