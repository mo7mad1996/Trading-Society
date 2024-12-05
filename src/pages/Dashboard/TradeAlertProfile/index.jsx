import { useEffect, useState } from "react";
import useApi from "@/api";

// components
import { Box, Typography } from "@mui/material";
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

// assets
import profile_img from "@/home_profile_assets/profile_img.png";
import checkIcon from "@/home_profile_assets/vector_2.png";
import { Outlet, useNavigate } from "react-router-dom";

// Reusable component for displaying trader's pair information
function TraderPairInfo({ pair }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    navigator.clipboard.writeText(pair);

    setTimeout(() => setCopied(false), 1000);
  };

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

        "&:hover  .text": {
          display: "none",
        },
        "&:hover  .icon": {
          display: "block !important",
        },
        cursor: "pointer",
      }}
      onClick={copy}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "10px", sm: "12px" },
          color: "#C3AD57",
          ml: "4px",
        }}
        className="text"
      >
        Pair: {pair}
      </Typography>

      <div className="icon" style={{ display: "none" }}>
        {copied ? <IoCheckmarkDoneOutline /> : <FaRegCopy />}
      </div>
    </Box>
  );
}

function ShowImage({ offer }) {
  const navigate = useNavigate();

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
        cursor: "pointer",
      }}
      onClick={() => navigate(`/tradealerts/${offer.id}`)}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "10px", sm: "12px" },
          color: "#C3AD57",
          ml: "4px",
        }}
      >
        Show Image
      </Typography>
    </Box>
  );
}

// Main component for the trade alert profile
function TradeAlertProfile() {
  const api = useApi();
  const [offers, setOffers] = useState([]);

  // Fetch data from the API
  async function tradeAlert() {
    try {
      let res = await api.get(`/offers`);
      const data = res.data.all_offers.data;

      setOffers(data);
    } catch (err) {
      console.error(err);
    }
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
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.02)" },
          }}
          // onClick={() => {
          //   navigate(`/offers/${offer.id}`);
          // }}
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
                sx={{ width: "47px", height: "47px", borderRadius: "50%" }}
                component="img"
                src={offer.instructor_image}
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
                {offer.offer_creation_date}
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
                  <ShowImage offer={offer} />
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
      <Outlet />
    </Box>
  );
}

export default TradeAlertProfile;
