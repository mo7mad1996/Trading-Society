import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { TokenContext } from "@/context";
import useApi from "@/api";

export default function LoginWithHFS() {
  // config
  const api = useApi();
  const { setUser } = useContext(TokenContext);
  let navigate = useNavigate();

  // data
  const [err, setErr] = useState("");
  const validationSchema = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required"),
  });

  // methods
  const signIn = async (data) => {
    try {
      const res = await api.post("/sso-login", data);
      const res_data = res.data;

      localStorage.setItem("token", res_data.token);
      localStorage.setItem("user", JSON.stringify(res_data.user));

      setUser(res_data.user);
      navigate("/home");
    } catch (err) {
      console.error(err);
      if ("string" == typeof err.response.data.message)
        setErr(err.response.data.message);
      else formik.setErrors(err?.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: signIn,
  });

  // render
  return (
    <Box sx={{ mt: "30px", width: "70%", mx: "auto", p: "10px" }}>
      <Typography
        sx={{
          color: "#fff",
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "30px", xl: "45px" },
          fontFamily: "SF Pro Display",
        }}
      >
        Sign In With HFS
      </Typography>
      {err && (
        <Typography sx={{ color: "red", fontSize: "30px" }}>{err}</Typography>
      )}
      <Box
        sx={{
          //   mt: { lg: "30px", xl: "150px" },
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
              size="small"
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
              size="small"
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

          <Button
            sx={{
              boxShadow: " 0px 0px 8.4px 1px #ECBC56",
              backgroundColor: " #C3AD57",
              color: "#fff",
              ml: "auto",
              borderRadius: "5px",
              height: "40px",
              my: 5,
              width: "100%",
              display: "block",
            }}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}
