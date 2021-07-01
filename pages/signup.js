import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { API_URL } from "../config";
import axios from "axios";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
    email: [],
    password: [],
  });

  const [success, setSuccess] = useState(false);

  const { firstName, lastName, email, password, password2 } = userData;

  const handleErrors = () => {
    if (password !== password2) {
      setErrors((prevState) => ({
        ...prevState,
        password: [...prevState.password, "Password doesn't match"],
      }));
      return true;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        password: [],
        firstName: [],
        lastName: [],
        email: [],
      }));
      return false;
    }
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleErrors()) return;

    try {
      const res = await axios.post(`${API_URL}/api/users/signup/`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      if (res.status == 201) {
        setSuccess(true);
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
        });
        setErrors((prevState) => ({
          ...prevState,
          password: [],
          firstName: [],
          lastName: [],
          email: [],
        }));
      }
    } catch (error) {
      // console.log(error.response.data.email);
      let passwordError = error.response.data.password[0];
      passwordError = passwordError
        .slice(2, passwordError.length - 2)
        .split(",");
      setErrors((prevState) => ({
        ...prevState,
        email: [...prevState.email, error.response.data.email],
        password: [...prevState.password, ...passwordError],
      }));
    }
  };

  return (
    <Layout>
      <main className="container">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5 shadow-sm">
            <div className="m-4">
              <h1 className="text-center">Signup</h1>
              {success ? (
                <div className="alert alert-success" role="alert">
                  Registration successful you can login now.
                </div>
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputName1" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={firstName}
                    name="firstName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputName2" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName2"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={lastName}
                    name="lastName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={email}
                    name="email"
                  />
                  {errors.email.map((error, idx) => {
                    return (
                      <div className="text-danger form-text" key={idx}>
                        {error}
                      </div>
                    );
                  })}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                    value={password}
                    name="password"
                  />
                  {errors.password.map((error, idx) => {
                    return (
                      <div className="text-danger form-text" key={idx}>
                        {error.replace(/["']/g, "")}
                      </div>
                    );
                  })}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword2" className="form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    onChange={handleChange}
                    value={password2}
                    name="password2"
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>

              <p>
                Already registered?{" "}
                <Link href="/login">
                  <a>Login</a>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SignUp;
