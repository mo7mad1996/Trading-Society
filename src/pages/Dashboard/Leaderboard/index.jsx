import { Box, Typography, Grid } from "@mui/material";
import LotCalc from "./LotCalc";
import PipValueCalculator from "./PipValueCalculator";
import EconomicCalendarIframe from "@/Components/HomeProfile/EconomicCalendar";

const Leaderboard = () => {
  return (
    <Box
      sx={{
        width: "auto",
        padding: "30px",
        backgroundColor: "#191919",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        color: "#fff",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Recomended Tools
      </Typography>

      {/* Grid to arrange the boxes in a row */}
      <Grid container spacing={3} justifyContent="center">
        {/* Lot Size Calculator */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              backgroundColor: "#fff",
              color: "#000",
              height: "100%",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Lot Size Calculator
            </Typography>
            <LotCalc />
          </Box>
        </Grid>

        {/* Pip Value Calculator */}
        <Grid item xs={12} sm={4} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              backgroundColor: "#fff",
              color: "#000",
              height: "100%",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Pip Value
            </Typography>
            <PipValueCalculator />
          </Box>
        </Grid>
      </Grid>
      {/* <Box><EconomicCalendarIframe /></Box> */}
    </Box>
  );
};

export default Leaderboard;
