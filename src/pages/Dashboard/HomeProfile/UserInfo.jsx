import { useState, useEffect, useContext } from "react";
import { Box, Divider, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useApi from "@/api";
import { TokenContext } from "@/context";

// assets
import appstore from "@/home_profile_assets/appstore.png";
import googlePlay from "@/home_profile_assets/googleplay.png";

// component
const UserInfo = () => {
  // config
  const api = useApi();
  let navigate = useNavigate();

  // data
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState([]);

  // methods
  const getUserInfo = async () => {
    try {
      const res = await api.get("/user");
      const data = res.data.user;
      setUser(data);
      updateUserInfo(data);
    } catch (err) {
      navigate("/login");
    }
  };
  const updateUserInfo = (user) => {
    setUserInfo([
      {
        label: "Name",
        value: `${user.user_first_name} ${user.user_last_name}`,
      },
      { label: "E-mail", value: user.user_email },
      { label: "Subscription", value: "---" },
      { label: "Phone Number", value: user.phone },
      {
        label: "Start Date",
        value: "---",
      },
      { label: "Expiratiion Date", value: "---" },
    ]);
  };

  // on render
  useEffect(() => {
    getUserInfo();
  }, []);

  // render
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          lg: "row",
          xs: "column",
        },
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        gap: 2,
        width: "100%",
        alignItems: "stretch",
        justifyContent: "center",
        color: "#fff",
        pt: 3,
      }}
    >
      {/* First Box */}

      <Box
        sx={{
          height: "100%",
          flex: 1,
          width: "100%",
          display: "flex",
          p: { md: 5, sm: 3, xs: 2 },
          FontSize: { md: 5, sm: 3, xs: 1 },
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          backgroundColor: "#2B2B2B",
          borderRadius: "15px",
        }}
      >
        {/* User Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            width: "fit-content",
            height: "auto",
          }}
        >
          <Avatar
            src={user?.profile_image}
            alt={user?.user_first_name}
            sx={{
              width: { md: "100px", sm: "70px", xs: "60px" },
              height: { md: "100px", sm: "70px", xs: "60px" },
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "35px",
                fontSize: { md: "35px", sm: "27px", xs: "20px" },
                mb: ".5em",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {user?.user_first_name} {user?.user_last_name}
            </Typography>
            <Typography sx={{ color: "gray", mt: "-20px" }}>
              ID: {user?.user_id}
            </Typography>
          </Box>
        </Box>

        {userInfo.map((item, n) => (
          <Box
            key={n}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              ml: 1,
            }}
          >
            <Typography
              sx={{ color: "#efedf980", fontSize: "25px", fontWeight: "bold" }}
            >
              {item.label}:
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "25px", fontWeight: "bold" }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Second Box Downloading App */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          p: { md: 5, sm: 3, xs: 1 },

          borderRadius: "15px",
          backgroundColor: "#2B2B2B",
        }}
      >
        <Typography
          sx={{
            mt: "20px",
            color: "#fff",
            textAlign: "left",
            fontFamily: "TanseekModernProArabic-ExBold",
            fontSize: "30px",
            fontWeight: "900",
            lineHeight: "30px",
            ml: "15px",
          }}
        >
          Download Our App
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 4,

            flexDirection: { md: "row", xs: "column" },
            gap: 2,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.trading_society.app&pcampaignid=web_share"
            target="_blank"
            style={{ width: "100%", maxWidth: "320px" }}
          >
            <Box
              component="img"
              src={googlePlay}
              sx={{
                width: "100%",
                cursor: "pointer",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Animation on hover
                "&:hover": {
                  boxShadow: 0, // Increases shadow depth on hover
                },
              }}
            />
          </a>

          <Divider
            sx={{
              backgroundColor: "#ECBC56",
              width: { md: "1px", xs: "80px" },
              height: { md: "80px", xs: "1px" },
            }}
          />
          <a
            href=""
            target="_blank"
            style={{ width: "100%", maxWidth: "320px" }}
          >
            <Box
              component="img"
              src={appstore}
              sx={{
                width: "100%",
                maxWidth: "320px",
                cursor: "pointer",
                transition:
                  "transform 0.3s ease-in-out, drop-shadow 0.3s ease-in-out", // Animation on hover
                "&:hover": {
                  boxShadow: 0, // Increases shadow depth on hover
                },
              }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
