import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "@/context";
import useApi from "@/api";

// components
import { Box, Typography } from "@mui/material";

// assets
import profile_img from "@/home_profile_assets/profile_img.png";
import checkIcon from "@/home_profile_assets/vector_2.png";

// Reusable component for displaying trader's pair information
function TraderPairInfo({ pair }) {
  return (
    <Box
      sx={{
        width: { xs: "150px", sm: "193.12px" },
        height: "29.83px",
        backgroundColor: "#000",
        borderRadius: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "10px", sm: "12px" },
          color: "#C3AD57",
          ml: "4px",
        }}
      >
        Pair: {pair}
      </Typography>
    </Box>
  );
}

// Main component for the trade alert profile
function TradeAlertProfile() {
  const api = useApi();
  let navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  let { baseUrl } = useContext(DarkModeContext);

  // Fetch data from the API
  async function tradeAlert() {
    let res = await api.get(`/offers`);

    setOffers(res?.data?.all_offers?.data);
  }

  useEffect(() => {
    tradeAlert();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {offers.map((offer, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "100%", sm: "434px" },
            backgroundColor: "#262626",
            borderRadius: "15px",
            pt: "30px",
            pb: "15px",
            px: "20px",
            cursor: "pointer",
            transition: "transform 0.3s", // إضافة تأثير على hover
            "&:hover": { transform: "scale(1.02)" }, // تأثير zoom عند التمرير
          }}
          onClick={() => {
            navigate(`/offers/${offer.id}`);
          }}
        >
          {/* Trader profile section */}
          <Box sx={{ mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                my: "10px",
              }}
            >
              {/* Profile image */}
              <Box
                sx={{ width: "47px", height: "47px" }}
                component="img"
                src={profile_img}
              />
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "56px",
                    border: "1px solid #ECBC56",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                }}
              >
                {/* Trader name */}
                <Typography
                  variant="body2"
                  sx={{ color: "#C3AD57", fontSize: "14px" }}
                >
                  {offer.instructor_name}
                </Typography>
              </Box>
            </Box>

            {/* Order status section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="body2"
                sx={{ color: "#C3AD57", fontSize: { xs: "8px", sm: "10px" } }}
              >
                Order Status: {offer.order_status}
              </Typography>
              <Box component="img" src={checkIcon} />
              <Typography sx={{ fontSize: { xs: "8px", sm: "10px" } }}>
                3 Mins Ago
              </Typography>
            </Box>

            {/* Pair info section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "10px",
              }}
            >
              {/* Two columns for pairs */}
              <Box sx={{ display: "flex", gap: { xs: "20px", sm: "10px" } }}>
                {/* Left column */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                </Box>
                {/* Right column */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                  <TraderPairInfo pair={offer.pair} />
                </Box>
              </Box>
              {/* Trade description */}
              <Box
                sx={{
                  backgroundColor: "#000",
                  width: "100%",
                  height: { xs: "auto", sm: "75.71px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C3AD57",
                  fontSize: { xs: "10px", sm: "12px" },
                }}
              >
                <Box sx={{ width: "90%", mx: "auto" }}>
                  {offer.offer_description}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TradeAlertProfile;
