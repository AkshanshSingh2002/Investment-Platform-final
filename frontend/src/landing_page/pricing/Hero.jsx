import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row mt-5 p-5 text-center">
        <h1>Charges</h1>
        <p className="text-muted mt-4 fs-3">List of all charges and taxes</p>
      </div>

      <div className="row p-5 mt-5">
        <div className="col-4 p-4">
          <img
            src="media/image/pricing0.svg"
            alt="Hero"
            className="img-fluid"
          />
          <h2>Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/image/intradayTrades.svg"
            alt="Hero"
            className="img-fluid"
          />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/image/pricingMF.svg"
            alt="Hero"
            className="img-fluid"
          />
          <h2>Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
