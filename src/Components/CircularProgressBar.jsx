import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import progress_bar from "@/home_profile_assets/progress_img.png";
import useApi from "@/api";

const CircularProgressBar = () => {
  const [instructors, setInstructors] = useState([]);

  const api = useApi();

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await api.get("/instructors-performance");

        if (response.data.status) {
          const formattedData = response.data.instructor_performance_data.map(
            (instructor) => ({
              name: instructor.instructor_name,
              rating: instructor.instructor_performance,
              photo: instructor.instructor_image,
            })
          );
          setInstructors(formattedData);
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        padding: 4,
      }}
    >
      {instructors.map((instructor, index) => (
        <Box key={index} sx={{ textAlign: "center" }}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Box
              sx={{
                position: "relative",
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: `conic-gradient(
                  #FE4438 ${instructor.rating * 3.6}deg, 
                  #202938 ${instructor.rating * 3.6}deg 360deg
                )`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  backgroundColor: "#222",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Box
                  component="img"
                  src={instructor.photo || progress_bar} // Use photo from API or fallback
                  sx={{ width: 100, height: 100, borderRadius: "50%" }}
                />
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ marginTop: 1, color: "#fff", fontWeight: "bold" }}
            >
              {instructor.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                mt: 1,
              }}
            >
              {instructor.rating}%
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CircularProgressBar;
