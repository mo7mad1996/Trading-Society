import { Box, Typography } from "@mui/material";
import person1 from "../../assets/person1234.webp";
import signature from "../../assets/signature.png";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CeoMF() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      setOffsetY(sectionTop * 0.8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: { xs: "column-reverse", lg: "row-reverse" },
        gap: "10px",
        p: { xs: 2, lg: 0 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          textAlign: { xs: "left", md: "left" },
          width: { xs: "100%", lg: "695px", xl: "900px" },
          mb: { xs: 2, lg: 0 },
          pl: "50px",
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
            CEO Message <br /> for Trading Society
          </Typography>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
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
              Hello Trading Society Family,
              <br /> I’m excited to welcome you to the Trading Society, where
              education meets community. We started this company with a simple
              goal: to make learning Forex trading accessible and to build a
              healthy, supportive space for traders of all levels.
            </Typography>
            <Typography>
              Our mission is to empower you with the knowledge and tools to
              succeed in the Forex market. Whether you’re a beginner just
              starting or a seasoned trader looking to sharpen your skills,
              we’re here to guide you every step of the way. Our courses are
              designed to be clear, straightforward, and easy to understand, so
              you can focus on what matters most—your growth and success.
            </Typography>
            <Typography sx={{ mt: "10px" }}>
              But we’re more than just an educational platform. At the heart of
              Trading Society is a strong community where traders connect,
              learn, and grow together. We believe in the power of collaboration
              and sharing experiences. When we support each other, we all win.
              Thank you for being a part of our journey. Let’s learn, grow, and
              succeed together! Wishing you all the best in your trading
              journey,
            </Typography>
            <Box
              sx={{
                width: { xs: "120px", lg: "248.12px" },
                height: "auto",
                display: "flex",
                justifyContent: "center",
                mt: "20px",
                ml: "auto",
                mr: "20%",
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
                  src={signature}
                  className="filter"
                  sx={{
                    width: "230px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>


            <Typography>
             Trading Society , CEO
            </Typography>
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
          }}
        >
          <motion.div
            style={{
              backgroundImage: `url(${person1})`,
              backgroundAttachment: "fixed",
              width: "100%",
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              overflow: "hidden",
              backgroundSize: "contain",
            }}
            initial={{ y: 5 }}
            animate={{ y: `${Math.min(Math.max(offsetY - 50, -5), 100)}px` }}
            transition={{ ease: "linear", duration: 0.5 }}
          ></motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default CeoMF;
