import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container p-5 mb-5">
      <div className="row mt-5 p-5">
        <h2 className="mb-5 text-muted">To create a ticket, select a relevant topic</h2>
        <div className="col-4 p-5 mt-2 mb-2">
          <h3><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h3>
          <a href="#" style={{lineHeight:"2.5"}}>Resident individual</a><br />
          <a href="#" style={{lineHeight:"2.5"}}>Minor</a><br />
          <a href="#" style={{lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br />
          <a href="#" style={{lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a><br />
          <a href="#" style={{lineHeight:"2.5"}}>Glossary</a><br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
            <h3><i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</h3>
            <a href="#" style={{lineHeight:"2.5"}}>Your Profile</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Account modification</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Nomination</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Transfer and conversion of securities</a><br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
            <h3> Kite</h3>
            <a href="#" style={{lineHeight:"2.5"}}>IPO</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Trading FAQs</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Charts and orders</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Alerts and Nudges</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>General</a><br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h3><i class="fa fa-money" aria-hidden="true"></i> Funds</h3>
          <a href="#" style={{lineHeight:"2.5"}}>Add money</a><br />
          <a href="#" style={{lineHeight:"2.5"}}>Withdraw money</a><br />
          <a href="#" style={{lineHeight:"2.5"}}>Add bank accounts</a><br />
          <a href="#" style={{lineHeight:"2.5"}}>eMandates</a><br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
            <h3><i class="fa fa-terminal" aria-hidden="true"></i>  Console</h3>
            <a href="#" style={{lineHeight:"2.5"}}>Portfolio</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Corporate actions</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Funds statement</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Reports</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Profile</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Segments</a><br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
            <h3><i class="fa fa-usd" aria-hidden="true"></i> Coin</h3>
            <a href="#" style={{lineHeight:"2.5"}}>Mutual funds</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Features on Coin</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>Payments and Orders</a><br />
            <a href="#" style={{lineHeight:"2.5"}}>General</a><br />
        </div>
      </div>
    </div>
     );
}

export default CreateTicket;