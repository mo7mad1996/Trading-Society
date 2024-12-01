import { Box, Grid2, Typography } from "@mui/material";
import fireImg from "../../assets/fireImg.png";
import mobile from "../../assets/phone.png";
import tablet from "../../assets/tablet.png";
import vector from "../../assets/Vector.png";
import substract from "../../assets/subtract1.png";
import { motion } from "framer-motion";

function TradeAlert() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{  }}>
        {" "}
        {/* إضافة Padding للمرونة على الشاشات الصغيرة */}
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // ترتيب مرن حسب حجم الشاشة
            alignItems: "center",
          }}
        >
          {/* Mobile And Tablet */}
          <Grid2
            size={{ xs: 12, md: 3 }}
            sx={{
              position: "relative",
              textAlign: { xs: "center", md: "left" },
              left: { md: "167px", xs: "0" }, // تصحيح الإزاحة فقط للشاشات الكبيرة
              mb: { xs: "20px", md: "0" }, // إضافة مساحة بين المكونات في الشاشات الصغيرة
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Box
                sx={{
                  width: { xs: "280px", md: "500px" }, // تغيير حجم مناسب للشاشات الصغيرة
                  height: { xs: "350px", md: "600px" },
                  position: "relative",
                  margin: "0 auto",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    zIndex: "10",
                    position: "absolute",
                    transform: { xs: "translateX(-130px)", md: "none" },
                  }}
                  component="img"
                  src={mobile}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(0%, -15%)",
                    width: { xs: "120px", md: "250px" }, // حجم أصغر للجهاز اللوحي
                    height: { xs: "100px", md: "204.65px" },
                    zIndex: "10",
                  }}
                >
                  <Box
                    component="img"
                    src={tablet}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    width: { xs: "190px", lg: "250px" },
                    height: { xs: "190px", lg: "250px" },
                    left: "0",
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    zIndex: "0",
                  }}
                >
                  <Box
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    src={substract}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid2>

          {/* Trade Alert */}
          <Grid2
            size={{ xs: 12, md: 5 }}
            sx={{
              textAlign: { xs: "center", md: "left" },
              transform: { md: "translate(200px,-220px)" },
            }}
          >
            <Box
              sx={{
                width: "50px", // حجم أصغر للأيقونة
                height: "70px",
                margin: { xs: "0 auto", md: "0" },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <Box
                  component="img"
                  src={fireImg}
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    backgroundSize: "contain",
                  }}
                />
              </motion.div>
            </Box>

            <Typography
              className="trade_alert"
              variant="body2"
              sx={{
                fontSize: { xs: "20px", md: "40px", xl: "45px" }, // حجم النص المناسب للشاشات الصغيرة
                color: "#ECBC56",
                marginY: "10px",
              }}
            >
              TRADE ALERT
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { xs: "16px", md: "25px", xl: "32px" }, // حجم أصغر للنص
                textTransform: "uppercase",
                color: "text.primary",
                lineHeight: "1.5",
                maxWidth: { xs: "100%", md: "818px" },
                margin: "0 auto",
                textShadow: "0px 1px 23px #FFFFFF40",
              }}
            >
              Stay Ahead of the Market with <br /> Daily Trade Ideas from
              Trading Society Traders !
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontFamily: "TanseekModernProArabic-ExBold",
                fontSize: { xs: "14px", md: "23px", xl: "32px" }, // حجم أصغر للنص
                fontWeight: "400",
                marginTop: "10px",
                maxWidth: { xs: "100%", md: "818px" },
                margin: "0 auto",
              }}
            >
              Unlock profitable opportunities by following our traders trade
              alerts, delivered daily for Forex, Indices, and Commodities.
            </Typography>
          </Grid2>

          {/* Vector */}
          <Grid2 size={{ xs: 12, md: 4 }} sx={{ overflow: "hidden" }}>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  width: { xs: "120px", md: "102%" }, // حجم أصغر للـ Vector
                  height: { xs: "120px", md: "auto" },
                  display: "block",
                  margin: "0 auto",
                }}
                component="img"
                src={vector}
              />
            </motion.div>
          </Grid2>
        </Grid2>
      </Box>
    </motion.div>
  );
}

export default TradeAlert;
