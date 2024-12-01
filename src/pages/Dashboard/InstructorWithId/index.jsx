import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/context";
import { useParams } from "react-router-dom";
import useApi from "@/api";

function InstructorWithId() {
  const api = useApi();

  let [instructor, setInstructor] = useState({});
  let { darkMode } = useContext(DarkModeContext); // إضافة darkMode من الـ Context
  let params = useParams();

  async function getInstructor(id) {
    let res = await api.get(`/instructor/${id}`);
    setInstructor(res?.data?.Instructor);
  }

  useEffect(() => {
    getInstructor(params.id);
  }, [params.id]);

  return (
    <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
      <Card
        sx={{
          maxWidth: 450,
          width: "100%",
          margin: "auto",
          padding: "30px",
          boxShadow: darkMode
            ? "0px 4px 20px rgba(255, 255, 255, 0.1)"
            : "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          backgroundColor: darkMode ? "#1e1e1e" : "#fff",
          transition: "all 0.3s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Avatar
            src={instructor?.photo}
            alt={instructor?.name}
            sx={{
              width: 120,
              height: 120,
              border: darkMode ? "2px solid #fff" : "2px solid #000",
            }}
          />
        </Box>

        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: "center",
              color: darkMode ? "#fff" : "#333",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {instructor?.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: darkMode ? "#bbb" : "#666",
              marginBottom: "15px",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {instructor?.position}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              color: darkMode ? "#888" : "#555",
              marginBottom: "25px",
              fontSize: "15px",
            }}
          >
            {instructor?.email}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              color: darkMode ? "#ddd" : "#444",
              lineHeight: "1.6",
              fontSize: "14px",
            }}
          >
            {instructor?.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default InstructorWithId;
