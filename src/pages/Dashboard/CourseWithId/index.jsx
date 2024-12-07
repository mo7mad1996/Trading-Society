import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import useApi from "@/api";

// components
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";

// component
function CourseWithId() {
  // config
  const api = useApi();
  let params = useParams();
  let navigate = useNavigate(); // to navigate to full screen page

  // data
  let [loading, setLoading] = useState(false);
  let [course, setCourse] = useState([]);
  let [error, setErr] = useState(null);
  const [message, setMessage] = useState("");

  // methods
  const handleVideoClick = (videoUrl) => {
    navigate(`/video/${encodeURIComponent(videoUrl)}`); // navigate to full screen page
  };
  const getCourse = async (id) => {
    try {
      setLoading(true);
      const res = await api.get(`/courses/${id}`);

      const data = res?.data?.course;
      setCourse(data);

    } catch (err) {
      setErr(err?.response?.data?.message || err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const skip = async () => {
    try {
      const res = await api.post("/complete_course/" + course.id);

      const data = res.data.message;

      setMessage(data);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || err.message);
    }
  };

  // on Page Render
  useEffect(() => {
    getCourse(params.id);
  }, [params.id]);

  // render
  if (loading) return <div>Loading...</div>;
  if (error) return <h3>{error}</h3>;
  return (
    <Box sx={{ padding: 4, mx: "auto" }}>
      {/* Course Details */}
      <Card
        sx={{
          display: "flex",
          marginBottom: 4,
          backgroundColor: "transparent",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "750px", height: "450px", borderRadius: "10px" }}
          image={course?.course_photo}
          alt={course?.course_title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography variant="h4" color="text.mainTheme">
              {course?.course_title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ marginY: 2 }}>
              Category: {course?.category_name}
            </Typography>
            <Typography variant="body1" sx={{ marginY: 2 }}>
              You will learn in this course <br />
              1- Everything about metatrader 5.
              <br />
              2- How to copy and execute signals.
              <br />
              3- Risk management.
              <br />
              4- How to copy signals from the chart.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total minutes: {course?.course_total_hours} minutes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Instructor: {course?.course_instructor_name}
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {/* Course Videos */}
      <Typography
        variant="h5"
        sx={{
          my: 7,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "#999" }}>
          <FaStar /> Course Videos
        </span>

        {message ? (
          <div style={{ color: "gold" }}>{message}</div>
        ) : (
          <Button
            onClick={skip}
            variant="outlined"
            sx={{ borderColor: "gold", color: "gold" }}
          >
            Make this corse as completed
          </Button>
        )}
      </Typography>
      <Grid2 container spacing={2}>
        {course?.course_videos?.map((video) => (
          <Grid2 item xs={12} sm={6} md={4} key={video?.id}>
            <Card
              sx={{ cursor: "pointer", backgroundColor: "transparent" }}
              onClick={() => handleVideoClick(video?.video_url)}
            >
              <Box sx={{ position: "relative", fontFamily: "Bayon" }}>
                <CardMedia
                  component="img"
                  loading="lazy"
                  image={video?.vedio_image}
                  alt={video?.course_name}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                {/* Play button overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "62px",
                    height: "54px",
                    backgroundColor: "#FFFBFB82",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaPlay
                    style={{
                      width: "28px",
                      height: "29px",
                      color: "#ECBC56",
                    }}
                  />
                </Box>
              </Box>
              <CardContent
                sx={{ backgroundColor: "transparent", padding: "16px" }}
              >
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  {video?.course_name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "gray", fontFamily: "sans-serif" }}
                >
                  {video?.vedio_description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
                  <IoMdTime
                    style={{
                      color: "#ECBC56",
                      width: "25px",
                      height: "25px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      ml: "5px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Duration: {video?.vedio_time} minutes
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{ width: "16px", color: "#ECBC56" }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default CourseWithId;
