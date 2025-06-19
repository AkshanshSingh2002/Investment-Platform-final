import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5 mt-5">
          <img src="media/image/zerodhaFundhouse.png" style={{ width: "198px", height: "55px" }}/>
          <p className="small-text text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/image/sensibullLogo.svg" style={{ width: "228px", height: "40px" }}/>
          <p className="small-text text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine  data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/image/goldenpiLogo.png" style={{ width: "145px", height: "55px" }}/>
          <p className="small-text text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/image/streakLogo.png" style={{ width: "166px", height: "55px" }} />
          <p className="small-text text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/image/smallcaseLogo.png" style={{ width: "210px", height: "55px" }}/>
          <p className="small-text text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/image/dittoLogo.png" style={{ width: "143px", height: "80px" }}/>
          <p className="small-text text-muted" >
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <button
        className="d-flex p-2 btn btn-primary fs-5 mb-5 justify-content-center"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
