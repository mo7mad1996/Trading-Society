import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import FooterProfile from "@/Components/Layouts/Dashboard/FooterProfile";
import { useContext, useEffect, useState } from "react";
import { image } from "framer-motion/m";
import LiveVedioCard from "@/Components/HomeProfile/LiveVedioCard";
import DemoPic from "@/assets/Fawzi.jpg";
const UserRecordedSession = () => {
  return (
    <>
      <Box>
        <Typography
          margin={2}
          variant="h4"
          color="text.mainTheme"
          fontWeight={600}
        >
          Educator Info
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "space-between",
          gap: 4,
          padding: 2,
          height: "300px",
          width: "98%",
          borderRadius: "15px",
          backgroundColor: "#2B2B2B",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "100%",
            borderRadius: "15px",
            backgroundColor: "text.mainTheme",
            objectFit: "cover", // Ensures the image fits properly within the Box
          }}
          component="img" // Correct HTML tag for images
          src={DemoPic} // Source of the image
          alt="Demo Image" // Alt text for accessibility
        />
        <Box
          sx={{
            width: "40%",
            height: "100%",
            borderRadius: "15px",
          }}
        >
          <Typography variant="h3" color="text.mainTheme">
            Mohamed Fawzi
          </Typography>
          <Typography>
            A skilled designer who specializes in creating intuitive and
            beautiful user interfaces, with an eye for detail and creativity.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: "80px" }} />
      <LiveVedioCard />
      <FooterProfile />
    </>
  );
};

export default UserRecordedSession;
