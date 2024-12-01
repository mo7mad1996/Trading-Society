import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid2,
  Divider,
} from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.png";
import brand from "../../assets/brand.png";
import instagramIcon from "../../assets/instagram.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaMap, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "@firebase/firestore";

function Footer() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyBaPeUGhkENHVruQFcK2n7o0MIfYa0zWkE",
    authDomain: "suggestion-form-520a9.firebaseapp.com",
    projectId: "suggestion-form-520a9",
    storageBucket: "suggestion-form-520a9.appspot.com",
    messagingSenderId: "523137805109",
    appId: "1:523137805109:web:70e608ce0624f366953a7c",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const handleSubmit = async () => {
    if (!name || !age || !email) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // إرسال البريد الإلكتروني عبر EmailJS
      await emailjs.send(
        "service_1k9zj0q",
        "template_on70taw",
        {
          from_name: name,
          from_email: email,
          message: comment,
          to_email: "abdelrahemanhamed@gmail.com", // حقل البريد الإلكتروني المستهدف
        },
        "kEnx-izGC3-miUZRo"
      );

      // حفظ البيانات في Firestore
      await addDoc(collection(db, "contacts"), {
        name: name,
        age: age,
        email: email,
        phone: phone,
        comment: comment,
      });

      alert("Email sent and data stored successfully!");
      handleClose();
    } catch (error) {
      console.log("Error:", error);
      alert("Failed to send email or store data.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "100%",
        py: { xs: 4, md: 8 },
        color: "#fff",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "flex-start" },
            mb: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
            transform: { lg: "translate(-60px,-30px)" },
          }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ mb: { xs: 2, md: 0 }, width: "69px", height: "69px" }}
          />
          <Box
            component="img"
            src={brand}
            sx={{
              width: { xs: "120px", md: "153px" },
              ml: { xs: 0, md: 2 },
            }}
          />
        </Box>

        <Grid2 container spacing={2} sx={{ mt: "10px" }}>
          <Grid2 size={{ xs: 12, md: 4, lg: 3.3 }}>
            <Box
              sx={{
                color: "gray",
                fontSize: { xs: "14px", md: "18px", xl: "25px" },
                fontFamily: "TanseekModernProArabic-ExBold",
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography>Empowering traders with real-time tools,</Typography>
              <Typography>expert education, and a strong </Typography>
              and a strong
              <Typography>community. </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  color: "#fff",
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#0a83ed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <FaFacebookF />
              </Box>
              <Box
                component="img"
                src={instagramIcon}
                sx={{ width: "25px", height: "25px" }}
              />
              <Box
                sx={{
                  color: "text.primary",
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#0a83ed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <FaInstagram />
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px", xl: "22px" },
                color: "#ECBC56",
              }}
            >
              Quick Links
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "12px",
                listStyleType: "none",
                fontFamily: "TanseekModernProArabic-ExBold",
                fontSize: { xs: "20px", md: "25px", xl: "30px" },
              }}
            >
              <Box>
                <Box>About Us</Box>
                <Box>Support</Box>
                <Box>Academy</Box>
              </Box>
              <Box>
                <Box>Terms and Conditions</Box>
                <Box>Privacy Policy</Box>
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px", xl: "22px" },
                color: "#ECBC56",
                letterSpacing: "-0.17px",
              }}
            >
              Get in Touch
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box
                sx={{
                  backgroundColor: "#ECBC56",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoCall style={{ color: "#000" }} />
              </Box>
              <Typography>971 - 555555555</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ width: "25px", height: "25px" }}>
                <FaMap
                  style={{ color: "#ECBC56", width: "100%", height: "100%" }}
                />
              </Box>
              <Typography>Dubai - UAE</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ width: "25px", height: "25px" }}>
                <FaEnvelope
                  style={{ color: "#ECBC56", width: "100%", height: "100%" }}
                />
              </Box>
              <Typography>info@tradingsociety.net</Typography>
            </Box>
          </Grid2>

          <Grid2
            sx={{
              position: "relative",
              height: "100%",
              mx: "auto",
            }}
            size={{ xs: 12, md: 4, lg: 3.6 }}
          >
            <TextField
              margin="dense"
              placeholder="Your suggestion"
              variant="outlined"
              slotProps={{
                input: {
                  style: {
                    borderRadius: "30px",
                    width: "334px",
                    height: "44px",
                    color: "#000",
                    backgroundColor: "#fff",
                    border: "none",
                  },
                },
              }}
              onClick={handleClickOpen}
            />
            <Button
              sx={{
                position: "absolute",
                width: "103px",
                height: "32px",
                borderRadius: "50px",
                backgroundColor: "#ECBC56",
                color: "#000",
                top: "52%",
                transform: "translateY(-50%)",
                right: {xs:"40px",md:"10px"},
                fontSize: "15px",
                letterSpacing: "-0.17px",
                lineHeight: "18px",
                textTransform: "capitalize",

              }}
            >
              Click Here
            </Button>
          </Grid2>
        </Grid2>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{
                input: {
                  style: { color: "#000" },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Age"
              fullWidth
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              slotProps={{
                input: {
                  style: { color: "#000" },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{
                input: {
                  style: { color: "#000" },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Phone"
              fullWidth
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              slotProps={{
                input: {
                  style: { color: "#000" },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Comment"
              fullWidth
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              slotProps={{
                input: {
                  style: { color: "#000" },
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Container>

      <Divider sx={{ backgroundColor: "#C3AD57", my: "12px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "cneter",
          mt: "12px",
          height: { xs: "30px", lg: "0px" },
          color: "text.secondary",
        }}
      >
        <Typography sx={{ fontSize: "25px" }}>
          © 2024 Trading Society. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
