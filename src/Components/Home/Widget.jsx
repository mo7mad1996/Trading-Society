import { useEffect } from "react";

function Widget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "Tesla", proName: "NASDAQ:TSLA" },
        { description: "Apple Inc", proName: "NASDAQ:AAPL" },
        { description: "Nvidia", proName: "NASDAQ:NVDA" },
        { description: "Microsoft", proName: "NASDAQ:MSFT" },
        { description: "Advanced Micro Devices", proName: "NASDAQ:AMD" },
        { description: "Meta", proName: "NASDAQ:META" },
        { description: "Netflix", proName: "NASDAQ:NFLX" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "compact",
      locale: "en",
    });
    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{
        backgroundColor: "#191919",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{
          backgroundColor: "transparent",
        }}
      ></div>
    </div>
  );
}

export default Widget;
