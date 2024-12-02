/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useApi from "@/api";

// components
import { Box, Typography } from "@mui/material";
import OurCourses from "./OurCourses";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import BannerProfile from "@/Components/HomeProfile/BannerProfile";

// component
function AcademyProfile() {
  // config
  let navigate = useNavigate();
  const api = useApi();

  // data
  let [instructors, setInstructors] = useState([]);
  let [popup, setPopup] = useState(false);
  let [instructorWithId, setInstructorWithId] = useState({});

  // methods
  async function getAllInstructors() {
    let res = await api.get("/instructor");
    setInstructors(res?.data?.instructors?.data);
  }

  async function getInstructorCourses(id) {
    let res = await api.get(`instructor_courses/${id}`);

    setInstructorWithId(res?.data?.instructor_with_courses);
  }

  // on component mounted
  useEffect(() => {
    getAllInstructors();
  }, []);

  const handleInstructorClick = () => {
    setPopup(true);
  };

  const handleVideoClick = (videoUrl) => {
    navigate(`/video/${encodeURIComponent(videoUrl)}`);
  };

  // render

  return (
    <>
      <BannerProfile />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          // px: { xs: 2, md: 4 },
        }}
      >
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
            Our{" "}
            <Typography component="span" sx={{ color: "#ECBC56" }}>
              Educators
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {instructors.map((educator, index) => (
            <Box
              key={index}
              sx={{
                width: "fit-content",
                cursor: "pointer",
                padding: "20px",
                border: "2px solid #ecbc56",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#282828",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.6)",
                },
              }}
              onClick={() => {
                getInstructorCourses(educator.id);
                handleInstructorClick();
              }}
            >
              <Box
                sx={{
                  width: "130px",
                  height: "130px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                  component="img"
                  src={educator.Instructor_image}
                  alt={educator.Instructor_name}
                />
              </Box>
              <Typography
                sx={{
                  color: "#fff", // تغيير لون النص
                  fontWeight: "bold", // جعل الاسم بارزًا
                  fontSize: "30px",
                }}
              >
                {educator.Instructor_name}
              </Typography>
            </Box>
          ))}
        </Box>

        {popup && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "600px", md: "770px" }, // يستجيب لحجم الشاشة
                height: "auto",
                backgroundColor: "#3F3D3D",
                position: "relative",
                mt: "50px",
                p: { xs: "20px", sm: "30px" }, // تقليل الحواف على الشاشات الأصغر
                mx: "auto", // يتمركز في المنتصف
              }}
            >
              <Box
                sx={{
                  borderBottom: "50px solid #3F3D3D",
                  borderLeft: "50px solid transparent",
                  borderRight: "5px solid transparent",
                  position: "absolute",
                  top: "-50px",
                  left: "0px",
                }}
              ></Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" }, // عمود في الهواتف ومسطّر في الشاشات الأكبر
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      jstifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        jstifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          height: "120px",
                          borderRadius: "50%",
                          m: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "top",
                        }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            display: "block",
                            aspectRatio: 1,
                            borderRadius: "50%",
                          }}
                          component="img"
                          src={instructorWithId.photo}
                          alt={instructorWithId.name}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: "25px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: "18px", md: "22px" }, // تكبير الحجم على الشاشات الأكبر
                            fontWeight: "bold",
                          }}
                        >
                          {instructorWithId.name}
                        </Typography>
                        <Box sx={{ color: "#ECBC56" }}>
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <FaStar key={i} />
                            ))}
                        </Box>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        width: { xs: "100%", md: "310px" },
                        height: "auto",
                        fontSize: { xs: "16px", md: "18px" },
                        lineHeight: "22.21px",
                        color: "gray",
                        // mt: "15px",
                      }}
                    >
                      {instructorWithId.description}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "0px",
                      fontSize: "30px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setPopup(false);
                    }}
                  >
                    <HiOutlineXMark />
                  </Box>

                  <Box sx={{ mt: { xs: "20px", md: "0" } }}>
                    <Typography sx={{ lineHeight: "3px" }}>
                      Meet Our Educator <br />
                      <Typography component="span" sx={{ color: "#ECBC56" }}>
                        {instructorWithId.name}
                      </Typography>
                    </Typography>

                    <Box
                      sx={{
                        width: { xs: "100%", md: "300px" },
                        height: "202px",
                        mt: { xs: "10px", md: "0" },
                      }}
                    >
                      <Box
                        component="img"
                        src={instructorWithId.photo}
                        alt={instructorWithId.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundSize: "cover",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {instructorWithId.courses &&
                  instructorWithId.courses.length > 0 && (
                    <Typography
                      sx={{
                        color: "#ecbc56",
                        position: "relative",
                        "&::after": {
                          content: "''",
                          position: "absolute",
                          backgroundColor: "#ecbc56",
                          left: "80px",
                          top: "20px",
                          width: "120px",
                          height: "10px",
                        },
                      }}
                    >
                      Welcome
                      {/* {instructorWithId?.courses[0].category_name} */}
                    </Typography>
                  )}
              </Box>

              <WelcomeVideo url={instructorWithId.video} />
            </Box>
          </motion.div>
        )}
        <OurCourses />
      </Box>
    </>
  );
}

export default AcademyProfile;

const WelcomeVideo = ({ url }) => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    if (url) setIsVideo(url.includes(".mp4"));
  }, [url]);

  return (
    <h1>
      {isVideo ? (
        <video controlers style={{ width: "100%", maxWidth: "400px" }}>
          <source src="url" />
        </video>
      ) : (
        <img src={url} style={{ width: "100%", maxWidth: "400px" }} />
      )}
    </h1>
  );
};
