import { Box } from "@mui/material";
import BannerProfile from "@/Components/HomeProfile/BannerProfile.jsx";
import Widget2 from "./Widget2.jsx";

function News() {
  return (
    <Box sx={{ height: "auto" }}>
      <BannerProfile />

      <Box>
        <Widget2 />
      </Box>
    </Box>
  );
}

export default News;
