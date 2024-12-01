import { Box, Typography } from "@mui/material";
// import { motion } from "framer-motion"; // استيراد مكتبة framer-motion
import phone from "../../assets/phone2.png";
import { motion } from "framer-motion";
import googlePlayIcon from "../../assets/google_play.png";
import { FaApple } from "react-icons/fa";

function OurMobileApp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{overflow:'hidden'}}
    >
      <Box sx={{ padding: {  md: "" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: { md: "space-between" },
            // gap: { xl: "300px" },
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "50%", xl: "900px" },
            }}
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                dampling: 15,
                delay: 0.4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "SF Pro Display",
                  fontSize: { xs: "24px", md: "40px", xl: "45px" },
                  fontWeight: "700",
                  lineHeight: { xs: "32px", md: "47.73px" },
                  color: "text.primary",
                  mb: "16px",
                }}
              >
                Download <br /> Our mobile App
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <Typography
                sx={{
                  fontFamily: "TanseekModernProArabic-ExBold",
                  fontSize: { xs: "16px", md: "27px", xl: "32px" },
                  fontWeight: "400",
                  lineHeight: { xs: "24px", md: "33.31px" },
                  mb: "40px",
                  color: "text.secondary",
                  width: { xs: "100%", md: "445px" },
                  height: "auto",
                }}
              >
                Take the power of Trading Society with you wherever you go.
                Download our mobile app to access tools that help you make
                smarter trading decisions and track your progress in real time,
                all from the convenience of your phone.
              </Typography>
            </motion.div>

            {/* Download Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#000",
                      width: "230px",
                      height: "70px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition:'all 700ms',
                      "&:hover":{
                        transform:'scale(1.1)'
                      }
                    }}
                  >
                    <Box sx={{ width: "50px", height: "50px" ,
                  
                    }}>
                      <Box
                        component="img"
                        src={googlePlayIcon}
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundSize: "contain",
                       
                        
                        }}
                      />
                    </Box>

                    <Box sx={{ color: "#fff" }}>
                      <Typography sx={{ fontSize: "22px", lineHeight: "0.7" }}>
                        GET IT ON
                      </Typography>
                      <Typography sx={{ fontSize: "30px", lineHeight: "0.7" }}>
                        Google Play
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#000",
                      width: "230px",
                      height: "70px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition:'all 1s',
                 
                      "&:hover":{
                        transform:'scale(1.1)'
                      }
                    }}
                  >
                    <FaApple style={{ fontSize: "45px", color: "#fff" }} />

                    <Box sx={{ color: "#fff" }}>
                      <Typography sx={{ fontSize: "22px", lineHeight: "0.7" }}>
                        Download on the
                      </Typography>
                      <Typography sx={{ fontSize: "30px", lineHeight: "0.7" }}>
                        App Store
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* Image Section */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            style={{
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${phone})`,
                width: { xs: "300px", lg: "750px" },
                height: { xs: "300px", lg: "750px" },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

export default OurMobileApp;
