import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const Register = () => {
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    name: "",
    password: ""
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let obj = {};
    obj.email = data.email;
    obj.name = data.name;
    obj.password = data.password;

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/register`, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      if (response.data.message === "User Exist") {
        setValid(true);
      }
      else {
        navigate("/");
      }
      
    } catch (error) {
      console.log(error);
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
                    Enter your details to register
                  </h2>
                  {
                    valid ? (<h2 class="fs-6 fw-normal text-center text-danger mb-4">
                    User Already Exists
                  </h2>) : <h1></h1>
                  }
                  <form action="#!">
                    <div class="row gy-2 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="fName"
                            placeholder="First Name"
                            required
                            onChange={handleInputChange}
                          ></input>
                          <label for="firstName" class="form-label">
                            Name
                          </label>
                        </div>
                      </div>
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
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            name="iAgree"
                            id="iAgree"
                            required
                          ></input>
                          <label
                            class="form-check-label text-secondary"
                            for="iAgree"
                          >
                            I agree to the{" "}
                            <a
                              href="#!"
                              class="link-primary text-decoration-none"
                            >
                              terms and conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid my-3">
                          <button
                            class="btn btn-primary btn-lg"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                      <div class="col-12">
                        <p class="m-0 text-secondary text-center">
                          Already have an account?{" "}
                          <a href="/" class="link-primary text-decoration-none">
                            Sign in
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
}

export default Register;
