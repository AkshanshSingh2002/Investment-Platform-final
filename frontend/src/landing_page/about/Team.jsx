import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h2 className="text-center">People</h2>
      </div>
      <div
        className="row p-5 mt-5 text-muted fs-5"
        style={{ lineHeight: "1.8" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/image/nithinKamath.jpg"
            alt="Founder"
            style={{ borderRadius: "100%", width:"60%"}}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h5 className="mt-4">Founder & CEO</h5>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen. Connect on <a href="#">Homepage</a> /{" "}
            <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
