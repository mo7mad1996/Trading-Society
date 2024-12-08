import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import useApi from "@/api";

function EducatorsCard() {
  const [instructors, setInstructors] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const api = useApi();

  // Fetch instructors from the API
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await api.get("/instructor");

        if (response.data.status && response.data.instructors) {
          const instructorData = response.data.instructors.data.map(
            (instructor) => ({
              id: instructor.id,
              name: instructor.Instructor_name,
              position: instructor.Instructor_position,
              description: instructor.description,
              image: instructor.Instructor_image,
              rate: parseFloat(instructor.rate.split(" ")[0]), // Extract numeric value from rate
            })
          );
          setInstructors(instructorData);
        } else {
          console.error(
            "Failed to fetch instructor data:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <>
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
        Our{" "}
        <Typography component="span" sx={{ color: "#ECBC56" }}>
          Educators
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          mY: 4,
          // justifyContent: "center",
          width: "100%",
        }}
      >
        {instructors.map((instructor) => (
          <ButtonBase
            key={instructor.id}
            sx={{
              width: { lg: "30%", md: "50%", xs: "100%" },
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
                py: 2,

                backgroundColor: "#2B2B2B",
                overflow: "hidden", // Prevent image overflow
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "300px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={instructor.image}
                  alt={instructor.name}
                  sx={{
                    width: "95%",
                    height: "95%",
                    borderRadius: "15px",
                    boxShadow: "0 0 5px 2px black",
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  color="text.mainTheme"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {instructor.name}
                </Typography>
                <Typography
                  variant="body5"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {instructor.description}
                </Typography>
                <Rating
                  value={instructor.rate}
                  readOnly
                  precision={0.5}
                  sx={{ color: "#E6B800" }}
                />
              </CardContent>
            </Card>
          </ButtonBase>
        ))}
      </Box>
    </>
  );
}

export default EducatorsCard;
