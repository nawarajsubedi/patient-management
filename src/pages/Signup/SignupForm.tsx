import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../services/auth/auth-services";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/slices/auth";

interface FormValues {
  email: string;
  password: string;
  name: string;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    email: "",
    password: "",
    name: "",
  };

  const [submitError, setSubmitError] = useState<string | undefined>("");

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
      name: Yup.string().max(255).required("Name is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const response = await signup(
          values.email,
          values.password,
          values.name
        );
        if (response.success) {
          dispatch(
            authAction.login({ user: response.user, token: response.token })
          );
          navigate("/dashboard", { replace: true });
        } else {
          setSubmitError(response.error?.message);
        }
      } catch (err) {
        setSubmitError("Error occurred");
      }
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          error={!!(formik.touched.email && formik.errors.email)}
          fullWidth
          helperText={formik.touched.email && formik.errors.email}
          label="Email Address"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          value={formik.values.email}
        />
        <TextField
          error={!!(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.name && formik.errors.name}
          label="Name"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          value={formik.values.name}
        />
        <TextField
          error={!!(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
        />
      </Stack>
      {submitError && (
        <Typography color="error" sx={{ mt: 3 }} variant="body2">
          {submitError}
        </Typography>
      )}
      <Button
        fullWidth
        size="large"
        sx={{ mt: 3 }}
        type="submit"
        variant="contained"
      >
        Continue
      </Button>
    </form>
  );
};

export default SignupForm;
