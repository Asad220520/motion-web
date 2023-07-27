import React from "react";
import NewCart from "./NewCart";
import "./index.scss";
const NewInteres = () => {
  const sum = 6;
  return (
    <div id="newInteres">
      <div className="container">
        <div className="block">
          <h1 className="h1">Больше интересных новостей</h1>
          <div className="newInteres">
            {Array.from({ length: sum }).map((_, index) => (
              <NewCart key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInteres;
