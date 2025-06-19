import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
        <div className="p-5" id="supportWrapper">
            <h3>Support Portal</h3>
            <h3 style={{textDecoration:"underline"}}><a href="#">Track tickets</a></h3>   
        </div>
        <div className="row m-2">
            <div className="col-6 p-5">
                <h2>Search for an answer or browse help topics to create a ticket</h2>
                <input type="text" placeholder="How do i activate F&O"/><br />
                
                <a href="#">Track account opening</a> 
                <a href="#">Track segment activation</a> 
                <a href="#">Intraday margins </a>
                <a href="#">Kite user manual</a>
                
            </div>
            <div className="col-6 p-5">
                <h2>Featured</h2>
                <ol>
                    <li>
                        <a href="#">Surveillance measure on scrips - June 2025</a>
                    </li>
                    <li>
                        <a href="#">Offer for sale (OFS) – June 2025</a>
                    </li>
                </ol>
            </div>
        </div>
    </section>
  );
}

export default Hero;
