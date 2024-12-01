import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import vector from "../../home_profile_assets/vector_card_1.png";
import vector2 from "../../home_profile_assets/vector_card_2.png";
import vector3 from "../../home_profile_assets/vector_card_3.png";
import logo from "../../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay"; 

import { Autoplay } from "swiper/modules";

function Academy() {
  const [cards] = useState([
    {
      level: "Beginners",
      content: [
        "Forex introduction",
        "Currency pairs",
        "Market hours",
        "Metatrader5 for pc",
        "Metatrader5 for mobile",
        "How to copy signals",
        "What broker means",
        "Markets types",
      ],
      prerequisites: [],
      image: vector,
    },
    {
      level: "Basics",
      content: [
        "Order types",
        "What do pips mean?",
        "What does lot size mean?",
        "How to calculate lot size",
        "Traders' common mistakes",
        "How to copy signals from a chart",
      ],
      prerequisites: [

      ],
      image: vector2,
    },
    {
      level: "Advanced",
      content: [
       "Trader physiology",
       "Forex calendar",
       "Fundamental analysis",
       "Technical analysis introduction",
       "Chinese candles",
       "Candles types",
       "Candles patterns",
       "Support and resistance",
       "Trends",
       "Time frames",
       "What indicators means",
       "Moviog average",
       "MACD",
       "RSI",
      ],
      prerequisites: [

      ],
      image: vector3,
    },
    {
      level: "Expert",
      content: [
        "Trading strategies",
        "Fibonacci",
        "Eliot's wavesv",
        "Harmonics",
        "Expert fundamental analysis",
      ],
      prerequisites: [

      ],
      image: vector,
    },
    {
      level: "Master",
      content: [
        "SMC",
        "Sk",
        "Ict",
        "Volume profile",
      ],
      prerequisites: [

      ],
      image: vector,
    },
  ]);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "100%" },
        p: { xs: 0, md: 0 },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "36px", md: "45px" },
          textTransform: "uppercase",
          my: "0px",
          textAlign: "left",
          color: "text.primary",
        }}
      >
        Academy
      </Typography>

      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Box
              className=""
              sx={{
                width: { xs: "auto", xl: "450px" },
                height: { xs: "550px", xl: "700px" },
                p: "20px",
                backgroundImage: `url(${card.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  sx={{
                    position: "absolute",
                    top: {xs:"12%",md:"5%"},
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "auto",
                    opacity: "0.27",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "22px",
                      md: "24px",
                      xl: "30px",
                    },
                    fontFamily: "TanseekModernProArabic",
                    fontWeight: "bold",
                    ml:'8px',
                    mt:"30px"
                  }}
                >
                  {card.level}
                </Typography>

                <Typography
                  sx={{
                    // mt: "20px",
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      md: "20px",
                      xl: "25px",
                    },
                    color: "#FFFFFF",
                    textAlign: "left",
                    ml: "20px",
                  }}
                >
                  Course Content
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",

                  }}
                >
                  {card.content.map((item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        fontFamily: "TanseekModernProArabic-ExBold",
                        listStyleType: "disc",
                        fontSize: {
                          xs: "20px",
                          sm: "16px",
                          md: "25px",
                          xl: "28px",
                        },

                        color: "#FFFFFF",
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
               
                {/* <Button
                  sx={{
                    backgroundColor: "#88783C",
                    minWidth: "76px",
                    minHeight: "28px",
                    fontWeight: "400",
                    fontFamily: "TanseekModernProArabic-ExBold",
                    letterSpacing: "-0.17px",
                    boxShadow: "0px 0px 3.3px 0px #FFFFFF40",
                    color: "#fff",
                    mt: "30px",
                    ml: "auto",
                    // mr: "60px",
                    display: "flex",
                  justifyContent:'center',
                  alignItems:'center',
                    borderRadius: "5px",
                    textTransform: "capitalize",
                    fontSize: "19px",
                    padding: "5px",
                  }}
                >
                  Start Your Journey
                </Button> */}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Academy;
