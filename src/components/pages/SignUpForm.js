import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const validation = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid Email.";
  }
  if (!values.firstname) {
    errors.firstname = "Firstname is required!";
  } else if (values.firstname.length < 2) {
    errors.firstname = "Firstname must contain minimum of 2 characters.";
  } else if (values.firstname.length > 30) {
    errors.firstname = "Firstname should not exceed 30 characters.";
  }
  if (!values.lastname) {
    errors.lastname = "Lastname is required!";
  } else if (values.lastname.length < 2) {
    errors.lastname = "Lastname must contain minimum of 2 characters.";
  } else if (values.lastname.length > 15) {
    errors.lastname = "Lastname should not exceed 15 characters.";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (!/(?=.*[0-9])/.test(values.password)) {
    errors.password = "Password must contain a number.";
  } else if (values.password.length < 8) {
    errors.password = "Password is too short - should be 8 characters minimum.";
  }
  return errors;
};

function SignUpForm() {
  const [values, setValues] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    console.log("submit");
  };
  return (
    <div>
      <div>
        <form className="SignUpForm" onSubmit={handleSubmit}>
          <h1 className="SignUp">Create an Account</h1>
          <label name="email" htmlFor="email" className="SignUpLabel">
            Email
          </label>
          <input
            className="SignUpInput"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="SignUpInput-feedback">{errors.email}</div>
          )}

          <label className="SignUpLabel" htmlFor="firstname">
            First Name
          </label>
          <input
            className="SignUpInput"
            name="firstname"
            type="text"
            placeholder="Enter your firstname"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && (
            <div className="SignUpInput-feedback">{errors.firstname}</div>
          )}

          <label className="SignUpLabel" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="SignUpInput"
            name="lastname"
            type="text"
            placeholder="Enter your lastname"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <div className="SignUpInput-feedback">{errors.lastname}</div>
          )}
          <label className="SignUpLabel" htmlFor="password">
            Password
          </label>
          <input
            className="SignUpInput"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="SignUpInput-feedback">{errors.password}</div>
          )}

          <p>
            By signing up, I agree to the Expedia Terms and Conditions, Privacy
            Statement and Expedia Rewards Terms and Conditions.
          </p>

          <button className="SignUpButton" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          <br></br>
          <p>
            Already have an account?<Link to="/SignIn">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
