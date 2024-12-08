import { useEffect, useState } from "react";
import useApi from "@/api";

// components
import { Box, Typography } from "@mui/material";
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { TbChartCandle } from "react-icons/tb";

// assets
import { MdOutlineCandlestickChart } from "react-icons/md";
import checkIcon from "@/home_profile_assets/vector_2.png";
import { Outlet, useNavigate } from "react-router-dom";

// Reusable component for displaying trader's pair information
function TraderPairInfo({ value, _key }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (!value) return;
    setCopied(true);
    navigator.clipboard.writeText(value);

    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        borderRadius: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 10px",

        "&:hover  .icon": {
          opacity: "1 !important",
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
        {_key.toUpperCase()}
        {" : "}
        <span style={{ color: _key == "order type" ? "#0f49b0" : "inherit" }}>
          {value}
        </span>
      </Typography>

      <div className="icon" style={{ opacity: 0 }}>
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
        height: "29.83px",
        backgroundColor: "#C3AD57",
        color: "#000",
        borderRadius: "3px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/tradealerts/${offer.id}`)}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "10px", sm: "12px" },
          ml: "4px",
          display: "flex",
          gap: "5px",
          padding: "5px 10px",
          alignItems: "center",
        }}
      >
        <TbChartCandle />
        <span>VIEW CHART</span>
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
        pb: 6,
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
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "20px", sm: "10px" },
                }}
              >
                {/* Left column */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    flex: 1,
                  }}
                >
                  <TraderPairInfo value={offer.pair} _key="pair" />
                  <TraderPairInfo value={offer.price} _key="price" />
                  <TraderPairInfo value={offer.tp1} _key="tp1" />
                  <TraderPairInfo value={offer.tp3} _key="tp3" />
                  <TraderPairInfo value={offer.tp5} _key="tp5" />
                </Box>
                {/* Right column */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    flex: 1,
                  }}
                >
                  <TraderPairInfo value={offer.order_type} _key="order type" />
                  <TraderPairInfo value={offer.sl} _key="SL" />
                  <TraderPairInfo value={offer.tp2} _key="tp2" />
                  <TraderPairInfo value={offer.tp2} _key="tp5" />
                  <ShowImage offer={offer} />
                </Box>
              </Box>
              {/* Trade description */}
              <TradeDescription text={offer.offer_description} />
            </Box>
          </Box>
        </Box>
      ))}
      <Outlet />
    </Box>
  );
}

function TradeDescription({ text }) {
  const [showMore, setShowMore] = useState(true);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        width: "100%",
        color: "#C3AD57",
        overflow: "hidden",
        p: 2,
        fontSize: { xs: "10px", sm: "12px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: showMore ? "40px" : "auto",
          maskImage: showMore
            ? "linear-gradient( black 10px, transparent)"
            : "none",
        }}
      >
        {text}
      </Box>

      {showMore && text && (
        <button
          onClick={() => setShowMore(false)}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            display: "block",
            width: "max-content",
            background: "#000000",
            border: "none",
            cursor: "pointer",
            borderBottom: "2px solid #b0b0b0",
            color: "#b0b0b0",
          }}
        >
          VIEW MORE
        </button>
      )}
    </Box>
  );
}
export default TradeAlertProfile;
