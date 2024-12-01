import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const OnlineSession = () => {
  const [formData, setFormData] = useState({
    meeting_id: "",
    fullname: "",
    role: "viewer", // default role
  });
  const [meetingURL, setMeetingURL] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://classapi.test.vconnct.me/join_meeting",
        formData,
        {
          headers: {
            "License-Key": "sEVaYMBEKdQdhCyKrQW9nC1B22N7oRGFUPhCjOEYwLI0O7gD6vzZLJQLQMhduHT7", // Include License Key here
          },
        }
      );
      // Log the full response for debugging
      console.log(response.data);

      if (response.data.status) {
        setMeetingURL(response.data.data.url);
        setSuccessMessage(response.data.success_message);
        setErrorMessage(""); // Clear any previous error message
      } else {
        setErrorMessage(response.data.message || "Failed to join the meeting.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          `Error: ${error.response.data.message || "Unknown server error."}`
        );
      } else {
        setErrorMessage("Network error: Unable to reach the server.");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "16px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Join Meeting
      </Typography>

      <TextField
        label="Meeting ID"
        name="meeting_id"
        value={formData.meeting_id}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "300px" }}
        required
      />
      <TextField
        label="Full Name"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "300px" }}
        required
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Join Meeting
      </Button>

      {meetingURL && (
        <Typography
          variant="body1"
          sx={{ marginTop: "16px", color: "green" }}
        >
          {successMessage}{" "}
          <a href={meetingURL} target="_blank" rel="noopener noreferrer">
            Click here to join
          </a>
        </Typography>
      )}

      {errorMessage && (
        <Typography
          variant="body1"
          sx={{ marginTop: "16px", color: "red" }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default OnlineSession;
