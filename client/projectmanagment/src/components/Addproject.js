import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEmail } from "../context/AuthContext";



const Addproject = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

   useEffect(() => {
     const localData = JSON.parse(localStorage.getItem("email"));
     if (!localData ) {
       navigate("/");
     } else {
       setEmail(localData.email);
     }
   }, [navigate, setEmail]);
  
  console.log("aaaa",email)
  const localData = JSON.parse(localStorage.getItem("email"));
  const [data, setData] = useState({
    name: "",
    description: "",
    deadline: "",
    email:localData.email,
    technology:""
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let obj = {};
    obj.email = data.email;
    obj.name = data.name;
    obj.description = data.description;
    obj.deadline = data.deadline;
    obj.technology = data.technology

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/add-project`,
        obj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      navigate("/project");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <section class="bg-warning py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="card border border-light-subtle rounded-3 shadow-sm">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
                    Enter your details of Project
                  </h2>
                  <form >
                    <div class="row gy-2 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="fName"
                            placeholder="First Name"
                            onChange={handleInputChange}
                            required
                          ></input>
                          <label for="firstName" class="form-label">
                            Name of Project
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            name="technology"
                            id="email"
                            placeholder="name@example.com"
                            onChange={handleInputChange}
                            required
                          ></input>
                          <label for="email" class="form-label">
                            Tech Used
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            name="description"
                            id="password"
                            placeholder="Description"
                            onChange={handleInputChange}
                            required
                          ></input>
                          <label for="password" class="form-label">
                            Description
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input
                            type="date"
                            class="form-control"
                            name="deadline"
                            id="email"
                            placeholder="Deadline of Project"
                            onChange={handleInputChange}
                            required
                          ></input>
                          <label for="email" class="form-label">
                            DeadLine
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid my-3">
                          <button class="btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>
                            Add Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addproject;
