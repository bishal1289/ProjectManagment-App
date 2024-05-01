import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    email: "",
    password:""
  })

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

    async function handleLogin(e) {
      e.preventDefault();
      let obj = {};
      obj.email = data.email;
      obj.password = data.password;
      try {
          await axios
            .post(`${process.env.REACT_APP_URL}/login`, obj, {
              cors: "no-cors",
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res);
              if (res.data.message === "User Invalid") {
                setValid(true);
              } else {
                let ob = {
                  email: res.data.email,
                  name: res.data.name,
                };
                localStorage.setItem("email", JSON.stringify(ob));
                //console.log(ob);
                navigate("/project");
              }
            });
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
      <section class="bg-success py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="card border border-light-subtle rounded-3 shadow-sm">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
                    Sign in to your account
                  </h2>
                  {
                    valid ? (<h2 class="fs-6 fw-normal text-center text-danger mb-4 ">
                            Invalid UserName/Password
                    </h2>):<h1></h1>
                  }
                  <form>
                    <div class="row gy-2 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            onChange={handleInputChange}
                            required
                          ></input>
                          <label for="email" class="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                            required
                          ></input>
                          <label for="password" class="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-flex gap-2 justify-content-between">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="rememberMe"
                              id="rememberMe"
                            ></input>
                            <label
                              class="form-check-label text-secondary"
                              for="rememberMe"
                            >
                              Keep me logged in
                            </label>
                          </div>
                          <a
                            href="#!"
                            class="link-primary text-decoration-none"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid my-3">
                          <button
                            class="btn btn-primary btn-lg"
                            type="submit"
                            onClick={handleLogin}
                          >
                            Log in
                          </button>
                        </div>
                      </div>
                      <div class="col-12">
                        <p class="m-0 text-secondary text-center">
                          Don't have an account?{" "}
                          <a
                            href="/register"
                            class="link-primary text-decoration-none"
                          >
                            Sign up
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
