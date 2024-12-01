import { Box, Divider, Grid2, Typography } from "@mui/material";
import imgBg from "../../home_profile_assets/user_infoBG.jpg";
import { useContext, useState } from "react";
import googlePlay from "../../home_profile_assets/googleplay.png";
import packageCard from "../../home_profile_assets/350-500-344.png";
import appstore from "../../home_profile_assets/appstore.png";
import { TokenContext } from "@/context";

function Cards() {
  let {
    userEmail,
    // userId,
    // userImg,
    userFirstName,
    // lastName,
    phone,
  } = useContext(TokenContext);
  console.log(userEmail);

  const [userInfo] = useState([
    { label: "Name", value: userFirstName },
    { label: "E-mail", value: userEmail },
    { label: "Subscription", value: "Elite" },
    { label: "Phone Number", value: phone },
    { label: "start Date", value: "25/10/2024" },
    { label: "Expiratiion Date", value: "25/10/2024" },
  ]);

  const [cards] = useState([
    {
      level: "Basic",
      content: [
        "Trade alert",
        "Beginner course ",
        "Basics course",
        "Live Sessions",
        "Advance course",
        "One scanner ",
        "Affiliate program",
      ],
      Affiliate: ["31/12/2025"],
    },
  ]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        mx: "auto",
        mt: "50px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          position: "relative",
          width: { xs: "100%" },
          gap: "20px",
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "center",
          },
          alignItems: "center",
        }}
      >
        {/* الكارت الأول */}
        <Grid2
          sx={{
            position: "relative",
            width: { xs: "100%", md: "400px" },
            height: "350px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
            mx: "auto",
            boxShadow: "10px 10px 25px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${imgBg})`,
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          />
          {/* Glass effect overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.52)", // Semi-transparent white
              backdropFilter: "blur(3px)", // Glass blur effect
              WebkitBackdropFilter: "blur(10px)", // Safari support
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "7px",
                fontFamily: "TanseekModernProArabic-ExBold",
                color: "#fff",
                listStyleType: "none",
                mt: 2,
                position: "absolute",
                top: "0",
                ml: "15px",
              }}
            >
              {userInfo.map((user, n) => (
                <Box key={n}>
                  <Typography
                    sx={{
                      fontFamily: "TanseekModernProArabic-ExBold",
                      fontSize: "30px",
                      fontWeight: "900",
                      fontSmooth: "20px",
                      fontStyle: "normal",
                    }}
                    component="h4"
                  >
                    {user.label}
                    <Typography
                      component="span"
                      sx={{
                        ml: "20px",
                        fontWeight: "400",
                        color: "#ffffff",
                      }}
                    >
                      {user.value}
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid2>

        {/* الكارت الثاني */}
        <Grid2
          sx={{
            backgroundColor: "#3F3D3D",
            borderRadius: "10px",
            padding: "5px",
            mx: "auto",
            width: { xs: "100%", md: "240px" },
            height: "330px",
            boxShadow: 2,
          }}
        >
          <Typography
            sx={{
              mt: "15px",
              color: "#fff",
              textAlign: "left",
              fontFamily: "TanseekModernProArabic-ExBold",
              fontSize: "25px",
              fontWeight: "900",
              lineHeight: "30px",
              ml: "15px",
            }}
          >
            Download Our App
          </Typography>
          <Box sx={{ mt: "50px", textAlign: "center" }}>
            <Box
              component="img"
              src={googlePlay}
              sx={{
                width: "230px",
                mb: 2,
                cursor: "pointer",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Animation on hover
                "&:hover": {
                  transform: "scale(1.1)", // Slightly enlarges the element
                  boxShadow: 0, // Increases shadow depth on hover
                },
              }}
            />
            <Divider
              sx={{
                backgroundColor: "#ECBC56",
                width: "204.04px",
                height: "0.7px",
                margin: "12px auto",
              }}
            />
            <Box
              component="img"
              src={appstore}
              sx={{
                width: "230px",
                mt: 2,
                cursor: "pointer",
                transition:
                  "transform 0.3s ease-in-out, drop-shadow 0.3s ease-in-out", // Animation on hover
                "&:hover": {
                  transform: "scale(1.1)", // Slightly enlarges the element
                  boxShadow: 0, // Increases shadow depth on hover
                },
              }}
            />
          </Box>
        </Grid2>

        {/* الكارت الثالث */}
        <Grid2
          sx={{
            backgroundImage: `url(${packageCard})`,
            borderRadius: "15px",
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", // Center the background image
            backgroundSize: "cover", // Optional: Adjusts the image to cover the entire area
            width: { xs: "100%", md: "250px" },
            height: "350px",
            mx: "auto",
            p: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              color: "#FFFFFF",
              lineHeight: "20px",
            }}
          >
            {cards[0].level}
          </Typography>

          <Typography
            sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#FFFFFF" }}
          >
            Course Content
          </Typography>
          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              mt: "3px",
              px: "10px",
            }}
          >
            {cards[0].content.map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  fontFamily: "TanseekModernProArabic-ExBold",
                  listStyleType: "disc",
                  fontSize: { xs: "14px", md: "17px" },
                  color: "#FFFFFF",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "25px", fontWeight: "bold" },
              color: "#FFFFFF",
              lineHeight: "50%",
            }}
          >
            Expieration date
          </Typography>
          <Box
            component="ul"
            sx={{
              display: "flex",
              right: 10,
              flexDirection: "column",
              gap: "5px",
              mt: "3px",
              px: "10px",
            }}
          >
            {cards[0].Affiliate.map((item, index) => (
              <Box
                // component="li"
                key={index}
                sx={{
                  marginTop: "10px",
                  fontFamily: "TanseekModernProArabic-ExBold",
                  listStyleType: "disc",
                  fontSize: { xs: "14px", md: "17px" },
                  color: "#FFFFFF",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Cards;
