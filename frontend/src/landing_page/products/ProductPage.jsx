import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUR="media/image/kite.png"
        productName="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
        imageUR="media/image/kite.png"
        productName="Console"
        productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageUR="media/image/console.png"
        productName="Coin"
        productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
        imageUR="media/image/kiteconnect.png"
        productName="Kite Connect API"
        productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageUR="media/image/varsity.png"
        productName="Varsity Mobile"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
