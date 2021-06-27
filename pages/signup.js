import React from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

const SignUp = () => {
  return (
    <Layout>
      <main className="container">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5 shadow-sm">
            <div className="m-4">
              <h1 className="text-center">Signup</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
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
