import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // استيراد Framer Motion
import "swiper/css";
import "swiper/css/autoplay"; // استيراد CSS الخاص بالـ autoplayimport React from 'react'

function AboutUsText() {
  return (
    <Box
      component="section"
      sx={{
        // marginBlock: "100px",
        paddingX: { xs: "20px", sm: "30px", md: "50px" },
        paddingY: { xs: "20px", sm: "30px", md: "30px" },
      //  backgroundColor: "white",
       height: "20vh",
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
      
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          transform: "translateX(-110px)",
          gap: { xs: "10px", md: "30px" },
          paddingY: "10px",
          paddingLeft: { xs: "20px", md: "50px" },
          mt: "10px",
          ml:"20px",
          
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }} // بداية الحركة
          whileInView={{ opacity: 1, x: 0 }} // الحركة عند الظهور
          transition={{ duration: 0.5 }} // مدة الانتقال
        >
          <Typography
            component="h3"
            variant="body1"
            sx={{
              
              fontSize: { xs: "20px", md: "24px", xl: "45px" },
              color: "text.primary",
            }}
          >
            ABOUT US – TRADING SOCIETY
          </Typography>
        </motion.div>
        <Box
          sx={{
            border: "5px solid #ECBC56",
            width: { xs: "100px", md: "251px" },
            mt:"7.5px"
          }}
        />
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // بداية الحركة
        whileInView={{ opacity: 1, y: 0 }} // الحركة عند الظهور
        transition={{ duration: 1 }} // مدة الانتقال
        // viewport={{ once: true }} // الحركة تحدث مرة واحدة
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: "100%",
            color: "text.secondary",
            fontSize: { xs: "18px", md: "27px", xl: "32px" },
            lineHeight: "1.5",
          }}
        >
          Trading Society is dedicated to making Forex trading accessible to
          everyone. We offer practical, easy-to-understand courses designed for
          both beginners and experienced traders who want to improve their
          skills. What sets us apart is our focus on building a strong,
          supportive community. We believe that trading success comes not just
          from learning, but from sharing knowledge and experiences. At Trading
          Society, we’re here to provide the education, tools, and environment
          to help you grow confidently in your trading journey.
        </Typography>
      </motion.div>
    </Box>
  );
}

export default AboutUsText;
