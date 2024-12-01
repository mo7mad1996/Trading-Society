/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useApi from "@/api";
import { TokenContext } from "@/context";

// components
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// assets
import registerLogo from "@/assets/register_img.png";

// component
function Login() {
  // config
  const { setUser } = useContext(TokenContext);
  let navigate = useNavigate();
  const api = useApi();

  // data
  let [err, setErr] = useState(false);

  // methods
  async function signIn(values) {
    try {
      let res = await api.post("/login", values);
      if (res?.data?.status === true) {
        localStorage.setItem("token", res?.data?.token);
        const user = res?.data?.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/home");
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message?.email?.[0] ||
        "Invalid login credentials.";
      setErr(errorMessage);

      formik.setErrors(err?.response?.data?.message);
    }
  }

  let validationSchema = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: signIn,
  });

  // render
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#191919",
        display: "flex",
        gap: "30px",
      }}
    >
      {/* left Image */}
      <Box
        sx={{
          width: "50%",
          textAlign: "center",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justfiyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "#000",
        }}
      >
        <Box sx={{ width: { md: "80%", xl: "100%" } }}>
          <Box
            sx={{ width: "100%", backgroundSize: "cover" }}
            component="img"
            src={registerLogo}
          />
        </Box>
        <Typography
          sx={{ fontSize: "32px", lineHeight: "22.21px", color: "#fff" }}
        >
          IT'S NOT ABOUT STRATEGIES IT'S ABOUT SOCIETY
        </Typography>
      </Box>

      {/* Login form */}
      <Box sx={{ mt: "30px", width: "70%", mx: "auto", p: "10px" }}>
        <Typography
          sx={{ color: "#fff", fontSize: { xs: "30px", xl: "45px" } }}
        >
          Sign In
        </Typography>
        {err && (
          <Typography sx={{ color: "red", fontSize: "30px" }}>{err}</Typography>
        )}
        <Box
          sx={{
            width: "90%",
            mx: "auto",
            mt: { lg: "30px", xl: "150px" },

            "& form": {
              gap: { xs: "20px", xl: "30px" },
            },

            color: "#fff",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <TextField
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#2B2B2B", borderRadius: "10px" }}
                placeholder="E-mail"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                slotProps={{
                  input: {
                    style: {
                      color: "#fff",
                    },
                  },
                }}
              />
              {formik.errors.email && formik.touched.email && (
                <Box
                  sx={{
                    // height: "50px",
                    fontSize: "22px",
                    display: "flex",
                    alignItems: "center",
                    color: "#dc3545",
                    padding: "10px",
                    my: 0,
                    py: 0,
                  }}
                >
                  {formik.errors.email}
                </Box>
              )}
            </Box>
            <Box>
              <TextField
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#2B2B2B", borderRadius: "10px" }}
                placeholder="Password"
                value={formik.values.password}
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                slotProps={{
                  input: {
                    style: {
                      color: "#fff",
                    },
                  },
                }}
              />

              {formik.errors.password && formik.touched.password && (
                <Box
                  sx={{
                    // height: "50px",
                    fontSize: "22px",
                    display: "flex",
                    alignItems: "center",
                    color: "#dc3545",
                    padding: "10px",
                    my: 0,
                    py: 0,
                  }}
                >
                  {formik.errors.password}
                </Box>
              )}
            </Box>

            <Link
              to="https://www.hfssociety.com"
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                width: "30%",
                color: "#fff",
              }}
            >
              Create account
            </Link>
            <Button
              sx={{
                boxShadow: " 0px 0px 8.4px 1px #ECBC56",
                backgroundColor: " #C3AD57",
                color: "#fff",
                width: "150px",
                ml: "auto",
                borderRadius: "5px",
                height: "40px",
              }}
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
