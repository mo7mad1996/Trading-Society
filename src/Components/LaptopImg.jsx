import { Box } from "@mui/material";
import laptop from "../assets/laptop.png";

function LaptopImg() {
  return (
    <Box
      sx={{
       
        display: "flex",
        justifyContent: "center",
        mx: "auto",
        transform: { xs: "none" },
      }}
    >
      <Box
        component="img"
        sx={{ width: { xs: "80%", md: "100%" } }}
        src={laptop}
      />
    </Box>
  );
}

export default LaptopImg;
