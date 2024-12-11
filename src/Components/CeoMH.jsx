import { Box, Typography } from "@mui/material";
import signature2 from "../assets/signature2.png";
import person2 from "../assets/Hamed-COO_HOME-PAGE2.webp";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CeoMH() {
  let [offsetY, setOffsetY] = useState("");
  let sectionRef = useRef(null);
  useEffect(() => {
    let handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      setOffsetY(sectionTop * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
        flexDirection: { xs: "column-reverse", lg: "row" },
        gap: "10px",
        p: { xs: 2, lg: 0 },
        // overflowY: "hidden",
      }}
      ref={sectionRef}
    >
      <Box
        sx={{
          textAlign: { xs: "left", md: "left" },
          width: { xs: "100%", lg: "695px", xl: "900px" },
          mb: { xs: 2, lg: 0 },
          transform: { xs: "translateY(0)", lg: "translateY(150px)" },
          pl: "50px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            bounce: 50,
            delay: 0.5,
          }}
        >
          <Typography
            component="h3"
            variant="body2"
            sx={{
              fontSize: { xs: "24px", sm: "30px", md: "35px", lg: "30px" },
              letterSpacing: "0.5px",
              my: { xs: "0px", lg: "20px" },
              color: "text.primary",
            }}
          >
            COO Message <br /> for Trading Society
          </Typography>
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              color: "text.primary",
              fontFamily: "SF Pro Display",
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "25px" },
              letterSpacing: "2%",
              lineHeight: "1.5",
            }}
          >
            <Typography>
              Welcome to Trading Society – your trusted partner in mastering the
              art of Forex trading. We’re not just about teaching the skills,
              but also about building a thriving community where traders grow
              together.
            </Typography>
            <Typography sx={{ mt: "10px" }}>
              At Trading Society, our responsibility goes beyond offering
              courses. We’re dedicated to sales development, making sure our
              students have the tools they need to succeed. Through innovative
              marketing strategies and strong community engagement, we aim to
              create a space where everyone feels supported and empowered to
              reach their trading goals.
            </Typography>
            <Typography sx={{ mt: "10px" }}>
              Our vision is simple – to build a healthy, collaborative trading
              community while helping you achieve lasting success in the world
              of Forex.
            </Typography>
            <Box
              sx={{
                width: { xs: "120px", lg: "608px" },
                height: "auto",
                display: "flex",
                justifyContent: "center",
                mt: "20px",
                ml: "auto",
              }}
            ></Box>
            <Box>
              <Box
                sx={{
                  position: "relative",

                  "&::after": {
                    content: '""',
                    width: { xs: "148px", lg: "250px" },
                    position: "absolute",
                    border: "0.6px solid #ECBC56",
                    bottom: "20px",
                    left: "0px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={signature2}
                  className="filter"
                  sx={{
                    width: "180px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>

              <Typography>Trading Society , COO</Typography>
            </Box>
          </Box>
        </motion.div>
      </Box>
      <Box>
        <Box
          sx={{
            width: { xs: "372.89px", lg: "605px", xl: "700px" },
            height: { xs: "376px", lg: "623px", xl: "900px" },
            mb: { xs: "50px", lg: "0" },
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            bottom: "0",
            // position:'relative'
          }}
        >
          <motion.div
            style={{
              backgroundImage: `url(${person2})`,
              backgroundAttachment: "fixed",
              width: "95%",
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom", // Start from the bottom-right corner
              overflow: "hidden",
              backgroundSize: "contain",
            }}
            whileInView={{ opacity: 1 }}
            initial={{ y: 5 }}
            animate={{ y: `${Math.min(Math.max(offsetY - 50, -5), 100)}px` }} // Animation limits
            transition={{ ease: "linear", duration: 0.5 }}
          ></motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default CeoMH;
