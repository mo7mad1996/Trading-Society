import { useContext } from "react";
import { LoadingContext } from "@/context";

// components
import { Box } from "@mui/material";
import Navbar from "@/Components/Home/Navbar";
import Banner from "@/Components/Home/Banner";
import MissionAndVision from "@/Components/Home/MissionAndVison";
import TradeAlert from "@/Components/Home/TradeAlert";
import Academy from "@/Components/Home/Academy";
import OurScanners from "@/Components/Home/OurScanners";
import Footer from "@/Components/Home/Footer";
import CeoMF from "@/Components/Home/CeoMF";
import CeoMH from "@/Components/CeoMH";
import AboutUsText from "@/Components/Home/AboutUsText";
import OurMobileApp from "@/Components/Home/OurMobileApp";
import TradingLoader from "@/Components/Loaders/TradingLoader/index.jsx";

// component
function LandingPage() {
  const { isLoading } = useContext(LoadingContext);

  if (isLoading) return <TradingLoader />;
  return (
    <Box>
      <Navbar />
      <Box
        id="home"
        sx={{
          width: "91%",
          mx: "auto",
          mb: "200px",
          // pt: { md: 0, xs: "200px" },
        }}
      >
        <Banner />
        <Box>
          <AboutUsText />
        </Box>
      </Box>
      <Box sx={{ mt: "0px" }}>
        <MissionAndVision />
      </Box>
      <Box sx={{ mt: "150px", width: "91%", margin: "auto" }}>
        <OurMobileApp />
      </Box>
      <div id="tradealerts" style={{ marginTop: "200px" }}>
        <TradeAlert />
      </div>
      <Box>
        <Box sx={{ mt: { xs: "0", lg: "50px" } }}>
          <CeoMF />
        </Box>
        <Box sx={{ mt: { xs: "0", lg: "50px" } }}>
          <CeoMH />
        </Box>
      </Box>
      <Box
        sx={{
          width: "91%",
          margin: "auto",
          mt: { xs: "30px", lg: "200px" },
        }}
      >
        <div id="academy">
          <Academy />
        </div>

        <Box id="scanners" sx={{ width: "91%", my: "50px", mx: "auto" }}>
          <OurScanners />
        </Box>
      </Box>
      <Box id="footer-section" sx={{ mt: "50px" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default LandingPage;
