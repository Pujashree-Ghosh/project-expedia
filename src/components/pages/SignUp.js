import React from "react";
import "./SignUp.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

// import { Button } from "@material-ui/core";
const SignUp = () => (
  <Formik
    initialValues={{ email: "", firstname: "", lastname: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Signing Up", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      firstname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long")
        .required("Required"),
      lastname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long")
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        // isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <form className="SignUpForm" onSubmit={handleSubmit}>
          <h1 className="SignUp">Create an Account</h1>
          <label className="SignUpLabel">Email</label>
          <input
            className="SignUpInput"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            // className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="SignUpInput-feedback">{errors.email}</div>
          )}

          <label className="SignUpLabel">First Name</label>
          <input
            className="SignUpInput"
            name="firstname"
            type="text"
            placeholder="Enter your firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            // className={errors.firstname && touched.firstname && "error"}
          />
          {errors.firstname && touched.firstname && (
            <div className="SignUpInput-feedback">{errors.firstname}</div>
          )}

          <label className="SignUpLabel">Last Name</label>
          <input
            className="SignUpInput"
            name="lastname"
            type="text"
            placeholder="Enter your lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            // className={errors.lastname && touched.lastname && "error"}
          />
          {errors.lastname && touched.lastname && (
            <div className="SignUpInput-feedback">{errors.lastname}</div>
          )}
          <label className="SignUpLabel">Password</label>
          <input
            className="SignUpInput"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            // className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="SignUpInput-feedback">{errors.password}</div>
          )}

          <p>
            By signing up, I agree to the Expedia Terms and Conditions, Privacy
            Statement and Expedia Rewards Terms and Conditions.
          </p>

          <button className="SignUpButton" type="submit" disabled>
            Sign Up
          </button>
          <br></br>
          <p>
            Already have an account?<Link to="/SignIn">Sign In</Link>
          </p>
        </form>
      );
    }}
  </Formik>
);

export default SignUp;
