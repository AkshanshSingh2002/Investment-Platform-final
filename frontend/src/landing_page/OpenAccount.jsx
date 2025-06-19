import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <h1 className="mt-5 d-flex justify-content-center">
        Open a Zerodha account
      </h1>
      <p className="d-flex justify-content-center">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button
        className="d-flex p-2 btn btn-primary fs-5 mb-5 justify-content-center"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;
