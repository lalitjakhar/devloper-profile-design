import React from "react";
import Header2 from "../../Assets/header2.avif";
import { Button, Container } from "@mui/material";

const Header = () => {
  return (
    <>
      <header style={{ marginBlock: "3.8rem" }}>
        <div className="page-header min-vh-80">
          <Container>
            <div className="row">
              <div className="col-lg-6 my-4">
                <h1 className="mb-4 fw-bold">Desired Experiences</h1>
                <p className="lead">
                  The time is now for it to be okay to be great. For being a
                  bright color. For standing out. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptates porro eos quos
                  voluptate id cumque. Eaque, quia. Voluptatum porro doloribus
                  velit eligendi! Necessitatibus animi cupiditate ut similique
                  aut provident maxime sint ducimus repudiandae in esse repellat
                  facilis, vitae magnam quas, excepturi autem.
                </p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <Button variant="contained" color="warning">
                    Discover
                  </Button>
                  <Button variant="contained" color="success">
                    Read More
                  </Button>
                </div>
              </div>
              <div className="col-lg-6 ps-5 pe-0">
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
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
