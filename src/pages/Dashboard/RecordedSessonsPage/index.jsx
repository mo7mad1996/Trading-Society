import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import RecordedSessions from "./RecordedSessions.jsx";

const RecordedSessionsPage = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography variant="h4" fontWeight={600} color="text.mainTheme">
          Recorded Sessions
        </Typography>
        <Box
          sx={{
            width: "70%",
            height: "1px",
            backgroundColor: "text.mainTheme",
          }}
        ></Box>
      </Box>
      <RecordedSessions />
    </Box>
  );
};

export default RecordedSessionsPage;
