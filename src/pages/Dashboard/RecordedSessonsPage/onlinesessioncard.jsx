import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import useApi from "@/api";

function Onlinesessioncard() {
  // config
  const navigate = useNavigate();
  const api = useApi();

  // data
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState([]);

  // methods
  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await api.get("/live-sessions");
      const data = res.data.instructors.data;

      setUserData(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  // on component render
  useEffect(() => {
    getUserData();
  }, []);

  // render
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        alignItems: "stretch",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {userData.map((user) => (
        <ButtonBase
          key={user.id}
          onClick={() => navigate(`/RecordedSessons/${user.id}`)} // Redirect on click
          sx={{
            width: { lg: "30%", md: "40%", sm: "80%", xs: "100%" },

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
              height: "100%",
              p: 2,

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
                image={user.photo}
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
              {/* 
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                {user.title} 
              </Typography>
                */}
              <Typography variant="h6" component="div" sx={{ mb: 2 }}>
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
