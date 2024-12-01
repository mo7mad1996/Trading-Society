import React, { useEffect } from 'react';

const PipValueCalculator = () => {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = "https://www.cashbackforex.com/Content/remote/remote-widgets.js";
    script.async = true;
    script.onload = () => {
      // Initialize the widget after the script loads
      window.RemoteCalc({
        "Url": "https://www.cashbackforex.com",
        "TopPaneStyle": "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYgMjAlLCAjZjVmNWY1IDQ1JSk7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTsgYm9yZGVyLWJvdHRvbTogbm9uZTsg",
        "BottomPaneStyle": "YmFja2dyb3VuZDogI2YzZjNmMzsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTsgY29sb3I6IGJsYWNrOw==",
        "ButtonStyle": "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
        "TitleStyle": "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
        "TextboxStyle": "YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYQ==",
        "ContainerWidth": "665",
        "HighlightColor": "#ffff00",
        "IsDisplayTitle": false,
        "IsShowChartLinks": true,
        "IsShowEmbedButton": true,
        "CompactType": "large",
        "Calculator": "pip-value-calculator",
        "ContainerId": "pip-value-calculator-882352"
      });
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="pip-value-calculator-882352"
      style={{ width: '665px', margin: '0 auto' }}
    />
  );
};

export default PipValueCalculator;
