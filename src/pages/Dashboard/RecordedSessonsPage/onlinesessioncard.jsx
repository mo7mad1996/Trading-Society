import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import DemoPic from "@/assets/Fawzi.jpg";

// Static data array for the 15 users
const userData = [
  {
    id: 1,
    name: "User 1",
    image: DemoPic,
    description:
      "This is User 1. They are an experienced professional with a passion for technology and problem-solving, always looking to learn and grow in their field.",
  },
  {
    id: 2,
    name: "User 2",
    image: DemoPic,
    description:
      "This is User 2. A skilled designer who specializes in creating intuitive and beautiful user interfaces, with an eye for detail and creativity.",
  },
  {
    id: 3,
    name: "User 3",
    image: DemoPic,
    description:
      "This is User 3. A dedicated software engineer, who focuses on building scalable and efficient applications to solve complex challenges in the tech world.",
  },
  {
    id: 3,
    name: "User 3",
    image: DemoPic,
    description:
      "This is User 3. A dedicated software engineer, who focuses on building scalable and efficient applications to solve complex challenges in the tech world.",
  },
  {
    id: 3,
    name: "User 3",
    image: DemoPic,
    description:
      "This is User 3. A dedicated software engineer, who focuses on building scalable and efficient applications to solve complex challenges in the tech world.",
  },
  {
    id: 3,
    name: "User 3",
    image: DemoPic,
    description:
      "This is User 3. A dedicated software engineer, who focuses on building scalable and efficient applications to solve complex challenges in the tech world.",
  },
  {
    id: 3,
    name: "User 3",
    image: DemoPic,
    description:
      "This is User 3. A dedicated software engineer, who focuses on building scalable and efficient applications to solve complex challenges in the tech world.",
  },
  {
    id: 3,
    name: "User 3",
    image: DemoPic,
    description:
      "This is User 3. A dedicated software engineer, who focuses on building scalable and efficient applications to solve complex challenges in the tech world.",
  },
  {
    id: 3,
    name: "User 3",
    image: DemoPic,
    description:
      "This is User 3. A dedicated software engineer, who focuses on building scalable and efficient applications to solve complex challenges in the tech world.",
  },
  // Add more users as needed
];

function Onlinesessioncard() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {userData.map((user) => (
        <ButtonBase
          key={user.id}
          onClick={() => navigate(`/RecordedSessons/UserRecordedSession`)} // Redirect on click
          sx={{
            width: "30%",
            borderRadius: "15px",
            "&:hover": {
              cursor: "pointer",
              borderRadius: "15px",
              transform: "scale(1.05)", // Grow effect on hover
              boxShadow: "0 0 80px 1px rgba(236, 188, 86,1)", // Add shadow on hover
            },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition
            textAlign: "center", // Ensure text stays centered on hover
          }}
        >
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "15px",
              backgroundColor: "#2B2B2B",
              overflow: "hidden", // Prevent image overflow
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "300px",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={user.image}
                alt={user.name}
                sx={{
                  width: "95%",
                  height: "95%",
                  borderRadius: "15px",
                  boxShadow: "0 0 5px 2px black",
                }}
              />
            </Box>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                color="text.mainTheme"
                component="div"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                {user.name}
              </Typography>
              <Typography variant="body6" color="text.secondary" sx={{ mb: 2 }}>
                {user.description}
              </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      ))}
    </Box>
  );
}

export default Onlinesessioncard;
