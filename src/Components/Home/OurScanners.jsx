import { Box, Grid2, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
import stats from "../../assets/scanners1.png";
// import substract from "../../assets/Subtract.png";
import vector1 from "../../assets/Ornament1.png";
import vector2 from "../../assets/Ornament2.png";
import vector3 from "../../assets/Ornament3.png";
// import laptop from "../../assets/laptop.png";
import ScrollToTopButton from "../ScrollToTopButton";
import { motion } from "framer-motion";
import TelegramButton from "../WathsAppButton";

function OurScanners() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: { xs: "100%", md: "40%" },
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "36px", md: "45px" },
                textTransform: "uppercase",
                lineHeight: "44px",
                letterSpacing: "2%",
                mb: "16px",
                textAlign: { xs: "center", md: "left" },
                color: "text.primary",
                fontWeight: "700",
              }}
            >
              Our <br /> Scanners
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "20px", md: "30px" },
                  left: { xs: "50%", md: "160px" },
                  transform: {
                    xs: "translate(-90px,22px)",
                    lg: "translate(10px,22px)",
                  },
                  width: { xs: "150px", md: "auto" },
                }}
                component="img"
                src={vector3}
              />
            </motion.div>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "27px", xl: "40px" },
                fontFamily: "TanseekModernProArabic-ExBold",
                fontWeight: "400",
                color: "#686868",
                textAlign: { xs: "center", md: "left" },
                mb: "16px",
                width: { xs: "100%", md: "692px" },
              }}
            >
              Unlock cutting-edge scanners and integrated trading tools that
              empower you to spot top trading opportunities as they happen...
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "100px",
                  top: { xs: "20px", md: "-100px" },
                  left: { xs: "50%", md: "100px" },
                  transform: {
                    xs: "translate(30%,-70%)",
                    md: "translateX(22px)",
                  },
                }}
                component="img"
                src={vector1}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "0px", md: "-100px" },
                  left: { xs: "50%", md: "-70px" },
                  transform: { xs: "translate(-200px,-80px)", md: "none" },
                }}
                component="img"
                src={vector2}
              />
            </motion.div>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignSelf:'center',
            transform:{xs:"translateX(-30px)",md:""}
          }}
        >
          <img
            src={stats}
            alt="My Logo"
            style={{
              backgroundSize: "cover",
              objectFit:'cover',
              width: "100%",
              height: "100%",
           
            }}
          />
        </Box>
      </Box>

      <ScrollToTopButton />
      <TelegramButton />
    </>
  );
}

export default OurScanners;
