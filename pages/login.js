import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/login", userData);
      router.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Layout>
      <main className="container">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5 shadow-sm">
            <div className="m-4">
              <h1 className="text-center">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>

              <p>
                Not registered?{" "}
                <Link href="/signup">
                  <a>Signup</a>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
