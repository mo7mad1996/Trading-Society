import { Box } from "@mui/material";
import BannerProfile from "@/Components/HomeProfile/BannerProfile";
import Progress from "./Progress";
import UserInfo from "./UserInfo";
import EducatorsCard from "./Oureducators";

function HomeProfile() {
  return (
    <>
      <Box>
        <BannerProfile />
        <UserInfo />
        <Box sx={{ my: { xs: "20px", md: "30px" } }}>
          <Progress />
        </Box>
      </Box>
      <EducatorsCard />
    </>
  );
}

export default HomeProfile;
