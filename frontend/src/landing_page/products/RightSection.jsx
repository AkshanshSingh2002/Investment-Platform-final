import React from "react";

function RightSection({
  imageURL,
  productName,
  productDiscription,
  learnMore,
  
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 mt-5">
          <h1>{productName}</h1>
          <p>{productDiscription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "90px" }}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
