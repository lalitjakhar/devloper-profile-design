import React from "react";
import { Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <footer className="footer py-9 mt-5 ">
        <Container>
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <h6 className="text-uppercase mb-2  fw-bold">
                Material UI Design
              </h6>
              <p className="mb-4 pb-2">
                The next generation of design systems.
              </p>
              <IconButton sx={{ marginRight: 1, color: "#25b900" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#25b900" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#25b900" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#25b900" }}>
                <PinterestIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#25b900" }}>
                <GitHubIcon />
              </IconButton>
            </div>
            <div className="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Company</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">About Us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Careers</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Press</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Pages</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Login</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Register</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Add list</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Legal</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Terms</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">About Us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Team</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Privacy</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Resources</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Blog</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Service</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Product</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary px-0">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
          <div className="row">
            <div className="col-8 mx-lg-auto text-lg-center">
              <p className="text-sm text-secondary">
                Copyright © 2023 Material Design by Jakhar.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
