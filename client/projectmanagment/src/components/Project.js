import React, { useEffect, useState } from "react";
import axios from "axios";
import { useEmail } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useEmail();
  if (!user.email) {
    navigate("/");
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProject() {
      const data = JSON.parse(localStorage.getItem('email'));
      let obj = {
        email: data.email,
      };
      console.log("ii", obj);
      try {
         await axios
           .post(`${process.env.REACT_APP_URL}/project`, obj, {
             headers: {
               "Content-Type": "application/json",
             },
           })
           .then((res) => {
             console.log(res.data);
             const data = res.data;
             setData(data);
             setLoading(false);
           });
      } catch (error) {
        console.log(error);
      }
    }
    getProject();
  }, []);

  async function handleDelete(ele) {
    try {
      await axios
        .post(`${process.env.REACT_APP_URL}/delete`, ele, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("delete", res.data);
          const data = res.data;
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  function handleUpdate(ele) {
    localStorage.setItem("project", JSON.stringify(ele));
  }

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : data.length > 0 ? (
        <div className="row">
          {data.map((ele, index) => (
            <div key={index} className="col-12 col-lg-4 mb-4">
              <section className="py-xl-8" style={{ paddingTop: "100px" }}>
                <div className="container overflow-hidden">
                  <div className="col gy-3 gy-lg-0 gx-xxl-5">
                    <article>
                      <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                          <img
                            className="img-fluid bsb-scale bsb-hover-scale-up"
                            loading="lazy"
                            src="./pm1.webp"
                            alt="Business"
                          />
                        </a>
                        <figcaption>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            fill="currentColor"
                            className="bi bi-eye text-white bsb-hover-fadeInLeft"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        </figcaption>
                      </figure>
                      <div className="entry-header mb-3">
                        <ul className="entry-meta list-unstyled d-flex mb-2">
                          <li>
                            <a
                              className="link-primary text-decoration-none"
                              href="#!"
                            >
                              {ele.name}
                            </a>
                          </li>
                        </ul>
                        <span
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bolder",
                          }}
                        >
                          Tech Used{" "}
                        </span>
                        <span className="btn btn-warning">{ele.tech}</span>
                        <h2
                          className="entry-title h4 mb-0"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bolder",
                          }}
                        >
                          <a
                            className="link-dark text-decoration-none"
                            href="#!"
                          >
                            {ele.description}
                          </a>
                        </h2>
                      </div>
                      <div className="entry-footer">
                        <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                          <li>
                            <a
                              className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                              href="#!"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                fill="currentColor"
                                className="bi bi-calendar3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                              </svg>
                              <span
                                className="ms-2 fs-7"
                                style={{
                                  fontFamily: "monospace",
                                  fontWeight: "bolder",
                                }}
                              >
                                {ele.deadline}
                              </span>
                            </a>
                          </li>
                          <li>
                            <span className="px-3">•</span>
                          </li>
                        </ul>
                      </div>
                    </article>
                    <br />
                    <a href="/update">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleUpdate(ele)}
                      >
                        Update
                      </button>
                    </a>{" "}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(ele)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h1>No Project To Show</h1>
          <a href="/add-project">Click To Add Project</a>
        </>
      )}
    </>
  );
};

export default Project;
