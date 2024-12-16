/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useApi from "@/api";
import { TokenContext } from "@/context";

// components
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginWithHFS from "./LoginWithHfs/index.jsx";
import { FaLockOpen, FaLock } from "react-icons/fa";

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
  let [openHFS, setOpenHFS] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // methods
  const togglePassword = () => setShowPassword(!showPassword);
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

  const goToHFSLogin = () => {
    setOpenHFS(true);
  };
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
      <Box
        sx={{
          mt: "30px",
          width: "70%",
          mx: "auto",
          p: "10px",
          overflow: "auto",
        }}
      >
        <Typography
          sx={{ color: "#fff", fontSize: { xs: "30px", xl: "45px" } }}
        >
          LogIn
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
              <FormControl
                sx={{ backgroundColor: "#2B2B2B", borderRadius: "10px" }}
                variant="outlined"
                fullWidth
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  placeholder="E-mail"
                  slotProps={{
                    input: {
                      style: {
                        color: "#fff",
                      },
                    },
                  }}
                  value={formik.values?.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Email"
                />
              </FormControl>
              {formik.errors?.email && formik.touched?.email && (
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
                  {formik.errors?.email}
                </Box>
              )}
            </Box>

            <Box>
              <FormControl
                sx={{ backgroundColor: "#2B2B2B", borderRadius: "10px" }}
                variant="outlined"
                fullWidth
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                  placeholder="Password"
                  value={formik.values?.password}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: "#e3e3e3" }}
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={togglePassword}
                        edge="end"
                      >
                        {showPassword ? <FaLockOpen /> : <FaLock />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {formik.errors?.password && formik.touched?.password && (
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
                  {formik.errors?.password}
                </Box>
              )}
            </Box>

            <Link
              to="https://www.hfssociety.com"
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                width: "100%",
                color: "#fff",
              }}
            >
              Create an account
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
                my: 5,
              }}
              type="submit"
            >
              Login
            </Button>
          </form>

          <div className="divider">OR</div>

          {openHFS ? (
            <LoginWithHFS />
          ) : (
            <Button
              onClick={goToHFSLogin}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                width: "100%",
                color: "#fff",
                background: " #C3AD57",
              }}
            >
              Login with HFS
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
