import { Box } from "@mui/material";
import banner from "../../assets/19.webp";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

function Banner() {
  let [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ mt: "200px", mb: "50px" }}>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          style={{width:"100%"}}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide
              sx={{
                position: "relative",
                borderRadius: "15px",
                overflow: "hidden",
              }}
              key={index}
            >
              <motion.div
                style={{
                  backgroundImage: `url(${banner})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "85vh",
                  margin: "auto",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
                animate={{ y: offsetY * 0.4 }}
                transition={{ duration: 0 }}
              ></motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Banner;
