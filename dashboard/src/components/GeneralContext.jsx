import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow.jsx";
import SellActionWindow from "./SellActionWindow.jsx";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {
    throw new Error("openBuyWindow not implemented");
  },
  closeBuyWindow: () => {
    throw new Error("closeBuyWindow not implemented");
  },
   openSellWindow: (uid) => {
    throw new Error("openSellWindow not implemented");
   },
  closeSellWindow: () => {
    throw new Error("closeSellWindow not implemented");
  },
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellStockUID, setSelectedSellStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
  setIsSellWindowOpen(true);
  setSelectedSellStockUID(uid);
};

const handleCloseSellWindow = () => {
  setIsSellWindowOpen(false);
  setSelectedSellStockUID("");
};

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;