import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
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
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"90px"}}>Learn More</a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src="media/image/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media\image\appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
