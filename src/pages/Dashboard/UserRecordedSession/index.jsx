import { useEffect, useState } from "react";

// components
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import FooterProfile from "@/Components/Layouts/Dashboard/FooterProfile.jsx";
import VideoController from "@/components/VideoController/index.jsx";
import LiveVideoCard from "./LiveVideoCard.jsx";

import useApi from "@/api";
import { useParams } from "react-router-dom";

const UserRecordedSession = () => {
  // config
  const api = useApi();
  const { id } = useParams();

  // data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // methods
  const getData = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/live-sessions/${id}`);

      const data = res.data.data;

      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // onMounted
  useEffect(() => {
    getData();
  }, []);

  // render
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>There is an error</div>;
  return (
    <>
      <Box>
        <Typography
          margin={2}
          variant="h4"
          color="text.mainTheme"
          fontWeight={600}
        >
          Educator Info
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "space-between",
          gap: 4,
          padding: 2,
          width: "98%",
          borderRadius: "15px",
          backgroundColor: "#2B2B2B",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "100%",
            borderRadius: "15px",
            backgroundColor: "text.mainTheme",
            objectFit: "cover", // Ensures the image fits properly within the Box
          }}
          component="img" // Correct HTML tag for images
          src={data.photo} // Source of the image
          alt={data.name} // Alt text for accessibility
        />
        <Box
          sx={{
            width: "40%",
            height: "100%",
            borderRadius: "15px",
          }}
        >
          <Typography variant="h3" color="text.mainTheme">
            {data.name}
          </Typography>
          <Typography>{data.description}</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "80px" }} />

      <VideoController src={data.video} poster={data.photo} />

      <LiveVideoCard liveSessions={data.live_seesions || []} />
      <FooterProfile />
    </>
  );
};

export default UserRecordedSession;
