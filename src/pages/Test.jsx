import  { useEffect } from "react";

function Test() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      symbolsGroups: [
        {
          name: "Indices",
          originalName: "Indices",
          symbols: [
            { name: "OANDA:EURUSD", displayName: "EURUSD" },
            { name: "OANDA:XAUUSD", displayName: "XAUUSD" },
            { name: "OANDA:AUDCHF", displayName: "AUDCHF" },
            { name: "OANDA:EURAUD", displayName: "EURCHF" },
            { name: "OANDA:AUDCAD", displayName: "AUDCAD" },
            { name: "OANDA:USDCAD", displayName: "USDCAD" },
            { name: "OANDA:NZDUSD", displayName: "NZDUSD" },
            { name: "OANDA:NZDCHF", displayName: "NZDCHF" },
          ],
        },
        {
          name: "Bonds",
          originalName: "Bonds",
          symbols: [
            { name: "CBOT:ZB1!", displayName: "T-Bond" },
            { name: "CBOT:UB1!", displayName: "Ultra T-Bond" },
            { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
            { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
            { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
          ],
        },
        {
          name: "Forex",
          originalName: "Forex",
          symbols: [
            { name: "FX:EURUSD", displayName: "EUR to USD" },
            { name: "FX:GBPUSD", displayName: "GBP to USD" },
            { name: "FX:USDJPY", displayName: "USD to JPY" },
            { name: "FX:USDCHF", displayName: "USD to CHF" },
            { name: "FX:AUDUSD", displayName: "AUD to USD" },
            { name: "FX:USDCAD", displayName: "USD to CAD" },
          ],
        },
      ],
      showSymbolLogo: false,
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#131722",
    });

    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);

    return () => {
      document
        .querySelector(".tradingview-widget-container__widget")
        .removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{
        backgroundColor: "#191919",
        width: "90vw",
        height: "90vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "",
        borderRadius: "15px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* اسم معبر عن الصفحة */}
      <h2
        style={{
        
          background: "linear-gradient(90deg, #D6AA1C 0%, #5D5329 100%)",
          WebkitBackgroundClip: "text", 
          color: "transparent", 
          fontWeight: "bold",
          filter: "drop-shadow(0px 1px 16.6px #ecbc56)",
          fontSize: "25px",
          fontFamily: "Arial, sans-serif",
          marginBottom: "20px",
        }}
      >
        Real-time Market Quotes
      </h2>

      {/* عرض الـ Widget */}
      <div
        className="tradingview-widget-container__widget"
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
}

export default Test;
