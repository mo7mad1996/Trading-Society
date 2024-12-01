import React, { useEffect } from "react";

function Gang() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "exchange",
      theme: "dark",
      backgroundColor: "rgba(0, 0, 0, 1)", // جعل الخلفية داكنة
      style: "1",
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      locale: "en",
      watchlist: ["AAPL", "IBM", "TSLA", "AMD", "MSFT", "GOOG"],
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);
  }, []);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <div
        className="tradingview-widget-container"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "100%", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default Gang;
