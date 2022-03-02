import React from "react";
import "./SignIn.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
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

        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <form className="SignInForm" onSubmit={handleSubmit}>
          <h1 className="SignIn">Sign In</h1>
          <label className="SignInLabel">Email</label>
          <input
            className="SignInInput"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className="SignInInput-feedback">{errors.email}</div>
          )}
          <label className="SignInLabel">Password</label>
          <input
            className="SignInInput"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="SignInInput-feedback">{errors.password}</div>
          )}
          <br></br>
          <p>
            By signing in, I agree to the Expedia Terms and Conditions, Privacy
            Statement and Expedia Rewards Terms and Conditions.
          </p>
          <br></br>
          <button className="SignInButton" type="submit">
            Login
          </button>
          <br></br>
          <p className="SignUpLink">
            Don't have an account?<Link to="/SignUpForm">Sign Up</Link>
          </p>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
