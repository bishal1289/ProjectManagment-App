import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [projectInfo, setProjectInfo] = useState({
      name: "",
      description: "",
      deadline: "",
      email: "bishalmandal235@gmail.com",
      technology: "",
    });
    useEffect(() => {
        const d = JSON.parse(localStorage.getItem('project'))
        setData(d);
    },[])
    
    function handleInputChange(e) {
        const { name, value } = e.target;
        setProjectInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let obj = {};
        obj._id = data._id;
        obj.createdBy = data.createdBy._id;
        obj.email = data.email;
        obj.name = projectInfo.name;
        obj.description = projectInfo.description;
        obj.deadline = projectInfo.deadline;
        obj.technology = projectInfo.technology;
        try {
        await axios
          .post("http://localhost:4000/update", obj, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log("update", res.data);
              navigate("/project");
          });
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <>
        <section class="bg-warning py-3 py-md-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <div class="card border border-light-subtle rounded-3 shadow-sm">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                    <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
                      Enter your details of Project
                    </h2>
                    <form>
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
                              value={projectInfo.name}
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
                              value={projectInfo.tech}
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
                              value={projectInfo.description}
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
                              value={projectInfo.deadline}
                              required
                            ></input>
                            <label for="email" class="form-label">
                              DeadLine
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
                              Save Changes
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
      </>
    );
};

export default Update;
