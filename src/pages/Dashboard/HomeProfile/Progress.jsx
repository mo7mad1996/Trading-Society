import { Box, Typography } from "@mui/material";
import { GoMortarBoard } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import CircularProgressBar from "@/Components/CircularProgressBar";
import useApi from "@/api";

function Progress() {
  const api = useApi();
  const [educators, setEducators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch instructors' performance data
    const fetchEducators = async () => {
      try {
        const response = await api.get("/instructors-performance");

        if (response.data.status) {
          setEducators(response.data.instructor_performance_data);
        }
      } catch (error) {
        console.error("Error fetching educators data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducators();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "75%" }}>
        <Box>
          <CircularProgressBar />
        </Box>
        <Box sx={{ my: "50px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              ml: "20px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "25px",
                fontFamily: "TanseekModernProArabic-ExBold",
              }}
            >
              Educators
            </Typography>
            <Box
              sx={{
                width: "32px",
                height: "32px",
                position: "absolute",
                top: "-20px",
                left: "-15px",
                color: "#C3AD577A",
              }}
            >
              <GoMortarBoard style={{ width: "100%", height: "100%" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {isLoading ? (
              <Typography>Loading...</Typography>
            ) : (
              educators.map((educator) => (
                <Box
                  key={educator.instructor_id}
                  sx={{
                    width: "214px",
                    height: "269px",
                    borderRadius: "15px",
                    backgroundColor: "#272727",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: "151px",
                      height: "175px",
                      margin: "auto",
                      mt: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src={educator.instructor_image}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      color: "#000",
                      backgroundColor: "#d9d9d9",
                      height: "110px",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "TanseekModernProArabic-ExBold",
                        fontWeight: "700",
                      }}
                    >
                      {educator.instructor_name}
                    </Typography>
                    <Box
                      sx={{
                        color: "#ECBC56",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: "TanseekModernProArabic-Bold",
                          fontSize: "13px",
                          color: "#8C8C8C",
                          marginLeft: "5px",
                        }}
                      >
                        {`${educator.instructor_performance}%`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Progress;
