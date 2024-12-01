import { Box, Typography, Divider } from "@mui/material";
import logo from "@/assets/logo.png";
import brand from "@/home_profile_assets/brand.png";

function FooterProfile() {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "100%",
        py: { xs: 4, md: 1 },
        color: "#fff",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          component="img"
          src={logo}
          sx={{ mb: { xs: 2, md: 0 }, height: "50px" }}
        />
        <Box
          component="img"
          src={brand}
          sx={{
            width: { xs: "120px", md: "153px" },
            ml: { xs: 0, md: 2 },
            mt: { xs: 2, md: 1 },
            height: "50px",
          }}
        />
      </Box>

      <Divider sx={{ backgroundColor: "#C3AD57", my: "12px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "12px",
          color: "text.secondary",
        }}
      >
        <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
          © 2024 Trading Society. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterProfile;
