import React, { useEffect } from "react";

function Widget2() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: true,
      displayMode: "adaptive",
      width: "100%", // السكربت يأخذ 100% من العرض داخل الحاوية
      height: "100%",
      colorTheme: "dark",
      locale: "en",
    });
    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);
  }, []);

  return (
    <div style={{ width: "90%", margin: "0 auto", height: "100vh" }}>
      <div
        className="tradingview-widget-container"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default Widget2;
