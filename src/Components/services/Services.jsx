import React, { useState } from "react";
import Header2 from "../../Assets/header2.avif";
import Header1 from "../../Assets/header1.avif";
import Header3 from "../../Assets/header3.avif";
import { Button, Container } from "@mui/material";

const Services = () => {
  const [isShowMore1, setIsShowMore1] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  const [isShowMore3, setIsShowMore3] = useState(false);

  const toggleReadMoreLess1 = () => {
    setIsShowMore1(!isShowMore1);
  };

  const toggleReadMoreLess2 = () => {
    setIsShowMore2(!isShowMore2);
  };

  const toggleReadMoreLess3 = () => {
    setIsShowMore3(!isShowMore3);
  };

  return (
    <>
      <header style={{ marginBlock: "3.8rem" }}>
        <div className="page-header min-vh-80">
          <Container>
            <div className="row">
              <div className="col-lg-6 my-3">
                <h1 className="mb-4 fw-bold">Desired Experiences</h1>
                <p className="lead mb-0">
                  Careers in programming, such as software engineering, web
                  development , data science, are gaining popularity as
                  technology advances. we can use the read more/read Tech
                  specialists often encounter questions in interviews assessing
                  their programming experience for developers. This section
                  introduces to hiring manager and summarises your skills and
                  experience. Data your programming experience here may
                  encourage employers.
                </p>
                {isShowMore1 && (
                  <p className="lead mb-0">
                    Tech specialists often encounter questions in interviews
                    assessing their programming experience for the developers.
                    This section introduces you to the hiring manager and
                    summarises your skills and experience. Highlighting your
                    programming experience here may encourage potential
                    employers to read your entire CV.
                  </p>
                )}
                <div
                  style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}
                >
                  <Button variant="contained" color="warning">
                    Discover
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={toggleReadMoreLess1}
                  >
                    {isShowMore1 ? "Read Less" : "Read More"}
                  </Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row mt-3">
                  <img
                    className="w-100 d-flex justify-content-center"
                    src={Header2}
                    alt="flower-2"
                    style={{ borderRadius: "2.5rem" }}
                  />
                </div>
              </div>
            </div>
            <hr className="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
          </Container>
        </div>
      </header>
      <header style={{ marginBlock: "3.8rem" }}>
        <div className="page-header min-vh-80">
          <Container>
            <div className="row">
              <div className="col-lg-6">
                <div className="row mt-3">
                  <img
                    className="w-100 d-flex justify-content-center"
                    src={Header1}
                    alt="flower-2"
                    style={{ borderRadius: "2.5rem" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 my-3">
                <h1 className="mb-4 fw-bold">AI Experiences</h1>
                <p className="lead mb-0">
                  Artificial intelligence (AI) is the simulation of human
                  intelligence by software-coded heuristics. Nowadays this code
                  is prevalent in everything from cloud-based. The year 2022
                  brought AI into the mainstream through widespread familiarity
                  with applications of Generative Pre-Training Transformer.
                  Limited memory AI can adapt to update itself based on new
                  observations or data
                </p>
                {isShowMore2 && (
                  <p className="lead mb-0">
                    Tech specialists often encounter questions in interviews
                    assessing their programming experience for the developers.
                    This section introduces you to the hiring manager and
                    summarises your skills and experience. Highlighting your
                    programming experience here may encourage potential
                    employers to read your entire CV.
                  </p>
                )}
                <div
                  style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}
                >
                  <Button variant="contained" color="warning">
                    Discover
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={toggleReadMoreLess2}
                  >
                    {isShowMore2 ? "Read Less" : "Read More"}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <header style={{ marginBlock: "3.8rem" }}>
        <div className="page-header min-vh-80">
          <Container>
            <div className="row">
              <div className="col-lg-6 my-3">
                <h1 className="mb-4 fw-bold">Desired Experiences</h1>
                <p className="lead mb-0">
                  Careers in programming, such as software engineering, web
                  development , data science, are gaining popularity as
                  technology advances. we can use the read more/read Tech
                  specialists often encounter questions in interviews assessing
                  their programming experience for developers. This section
                  introduces to hiring manager and summarises your skills and
                  experience. Data your programming experience here may
                  encourage employers.
                </p>
                {isShowMore3 && (
                  <p className="lead mb-0">
                    Tech specialists often encounter questions in interviews
                    assessing their programming experience for the developers.
                    This section introduces you to the hiring manager and
                    summarises your skills and experience. Highlighting your
                    programming experience here may encourage potential
                    employers to read your entire CV.
                  </p>
                )}
                <div
                  style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}
                >
                  <Button variant="contained" color="warning">
                    Discover
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={toggleReadMoreLess3}
                  >
                    {isShowMore3 ? "Read Less" : "Read More"}
                  </Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row mt-3">
                  <img
                    className="w-100 d-flex justify-content-center"
                    src={Header3}
                    alt="flower-2"
                    style={{ borderRadius: "2.5rem" }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Services;
