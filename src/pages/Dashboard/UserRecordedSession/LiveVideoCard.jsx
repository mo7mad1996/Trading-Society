import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Array with data
const LiveVideoCard = ({ liveSessions }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "33px" },
            my: "30px",
            color: "#fff",
            // transform: "translateX(15px)",
            position: "relative",
            "&::after": {
              content: "''",
              position: "absolute",
              backgroundColor: "#ecbc56",
              left: "0",
              top: "100%",
              width: "100%",
              height: "3px",
            },
          }}
        >
          Live{" "}
          <Typography component="span" sx={{ color: "#ECBC56" }}>
            Sessions
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
        }}
      >
        {liveSessions.map((video, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              minWidth: "300px",
              borderRadius: "15px",
              backgroundColor: "#2B2B2B",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              pt: "10px",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 0 80px 1px rgba(236, 188, 86, 1)", // Glow effect on hover
              },
              "&:hover .overlay": {
                opacity: 1, // Show overlay on hover
              },
            }}
            onClick={() =>
              navigate(`/video/${encodeURIComponent(video.video)}`)
            }
          >
            {/* Image */}
            <Box
              component="img"
              src={video.image}
              alt={video.title}
              sx={{
                width: "95%",
                height: "200px",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
            {/* Overlay */}
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                color: "#fff",
                fontSize: "2.5rem",
                fontWeight: 600,
                fontFamily: "TanseekModernProArabic-ExBold",
              }}
            >
              Play Video
            </Box>
            {/* Title and Description */}
            <Box sx={{ padding: "15px", textAlign: "center" }}>
              <Typography variant="h5" fontWeight={600} color="text.mainTheme">
                {video.title}
              </Typography>
              <Typography
                lineHeight={1.5}
                variant="body1"
                color="text.secondary"
              >
                {video.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default LiveVideoCard;
