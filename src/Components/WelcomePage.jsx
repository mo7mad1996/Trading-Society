import { Box, Typography } from "@mui/material";
import logo from "../assets/register_img.png";
function WelcomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        gap:'10px'
      }}
    >
      <Box>
        <Box
          sx={{height: "300px" }}
          component="img"
          src={logo}
        />
        <Typography sx={{ lineHeight: "1" }}>
          IT'S NOT ABOUT STRATEGIES IT'S ABOUT SOCIETY
        </Typography>
      </Box>

      <Typography>welcome</Typography>
    </Box>
  );
}

export default WelcomePage;
