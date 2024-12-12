import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function Banner() {
  let [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll, false);
  }, []);

  return (
    <Box sx={{ mt: "200px", mb: "50px" }}>
      <video
        style={{ width: "100%", aspectRatio: "16 / 9", border: "none" }}
        src="https://laravelapi.tradingsociety.net/assets/vedio/TRADING%20SOCIETY.mp4"
        title="TRADING SOCIETY"
        autoPlay
        loop
        muted
        playsInline
      />
    </Box>
  );
}

export default Banner;
