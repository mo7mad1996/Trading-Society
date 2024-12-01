import React from 'react';
import MainLayout from './MainLayout'; // Adjust the import path

const EconomicCalendarIframe = () => {
  return (
    <MainLayout>
    <div style={{ width: "100%", height: "600px", border: "none" }}>
      <iframe
        src="https://www.forexfactory.com/calendar"
        style={{ width: "100%", height: "100%" }}
        title="Economic Calendar"
        frameBorder="0"
      />
    </div>
    </MainLayout>
  );
};

export default EconomicCalendarIframe;
