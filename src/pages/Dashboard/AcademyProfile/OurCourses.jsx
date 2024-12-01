import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import useApi from "@/api";

function OurCourses() {
  // data
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // config
  const api = useApi();
  const navigate = useNavigate();

  // methods
  async function getCourses() {
    const res = await api.get("/courses");

    setCategories(res?.data?.courses?.data);
    // Set the first category as the default
    if (res?.data?.courses?.data?.length > 0) {
      setCurrentCategory(res.data.courses.data[0].category_name);
    }
  }

  function splitDescription(description) {
    return description.split("\r\n").filter((line) => line.trim() !== "");
  }
  function getCoursesData() {
    if (currentCategory) {
      const category = categories.find(
        (c) => c.category_name === currentCategory
      );
      if (category) {
        return category.courses;
      }
    }
    return [];
  }

  // onRender
  useEffect(() => {
    getCourses();
  }, []);

  // render
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: { xs: "24px", sm: "33px" },
          my: "3px",
          color: "#fff",
          position: "relative",
          zIndex: "99",
          "&::after": {
            content: "''",
            backgroundColor: "#ecbc56",
            position: "absolute",
            top: "100%",
            left: "0",
            width: "120px",
            height: "3px",
          },
        }}
      >
        Our <span style={{ color: "#ECBC56" }}>Courses</span>
      </Typography>

      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((categoryData, index) => (
          <Box key={index}>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#fff",
                backgroundColor:
                  currentCategory === categoryData.category_name
                    ? "white"
                    : "transparent",
              }}
              className={
                currentCategory === categoryData.category_name
                  ? "active_category"
                  : ""
              }
              onClick={(e) => {
                if (activeCategory) {
                  activeCategory.classList.remove("active_category");
                }

                e.currentTarget.classList.add("active_category");
                setActiveCategory(e.currentTarget);
                setCurrentCategory(categoryData.category_name);
              }}
            >
              {categoryData.category_name}
            </Button>
          </Box>
        ))}
      </Box>

      <Grid
        container
        spacing={0}
        sx={{
          width: "100%",
          marginTop: 3,
          display: "flex",
          justifyContent: "space-between",
          gap: "0px",
          alignItems: "start",
        }}
      >
        {getCoursesData().map((course, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  height: "auto",
                  cursor: "pointer",
                  p: 2,
                  backgroundColor: "transparent",
                }}
                onClick={() => {
                  navigate(`/courses/${course?.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <CardMedia
                  sx={{
                    borderRadius: "20px",
                    border: "1px solid #ecbc56",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "200px",
                  }}
                  component="img"
                  image={course?.course_photo}
                  alt={course?.course_title}
                />
                <CardContent sx={{ color: "#fff", width: "100%" }}>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{
                      fontSize: { xs: "20px", sm: "30px" },
                      fontFamily: "TanseekModernProArabic-Bold",
                      lineHeight: "15px",
                      color: "#ecbc56",
                    }}
                  >
                    {course?.course_title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: { xs: "12px", sm: "15px" },
                    }}
                  >
                    Instructor: {course?.course_instructor_name}
                  </Typography>
                  {splitDescription(course?.course_description).map(
                    (line, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        sx={{
                          fontSize: { xs: "16px", sm: "25px", width: "100%" },
                        }}
                      ></Typography>
                    )
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#ECBC56",
                        display: "flex",
                        alignItems: "center",
                        mt: "7px",
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((_, index) => (
                        <FaStar
                          key={index}
                          style={{ width: "10px", height: "10px" }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IoMdTime style={{ color: "#ECBC56" }} />
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: "20px" },
                        ml: "5px",
                      }}
                    >
                      Duration:{" "}
                      <Typography variant="span">
                        {course?.course_total_hours}
                      </Typography>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurCourses;
