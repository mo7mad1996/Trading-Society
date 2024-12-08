import { Box } from "@mui/material";
import BannerProfile from "@/Components/HomeProfile/BannerProfile.jsx";
import Progress from "./Progress.jsx";
import UserInfo from "./UserInfo.jsx";
import EducatorsCard from "./Oureducators.jsx";

function HomeProfile() {
  return (
    <>
      <Box>
        <BannerProfile />
        <UserInfo />
        {/* <Box sx={{ my: { xs: "20px", md: "30px" } }}>
          <Progress />
        </Box> */}
        <EducatorsCard />
      </Box>
    </>
  );
}

export default HomeProfile;
