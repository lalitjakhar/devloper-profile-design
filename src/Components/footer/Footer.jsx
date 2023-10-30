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
      <footer
        className="footer py-5 mt-5 "
        style={{ backgroundColor: "#000000" , color:'#fff'}}
      >
        <Container>
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-2  fw-bold">
                Material UI Design
              </h4>
              <p className="mb-4 pb-2">
                The next generation of design systems.
              </p>
              <IconButton sx={{ marginRight: 1, color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#fff" }}>
                <PinterestIcon />
              </IconButton>
              <IconButton sx={{ marginRight: 1, color: "#fff" }}>
                <GitHubIcon />
              </IconButton>
            </div>
            <div className="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Company</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <p className="text-light px-0">About Us</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Careers</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Press</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Blog</p>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Pages</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <p className="text-light px-0">Login</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Register</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Add list</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Contact</p>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Legal</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <p className="text-light px-0">Terms</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">About Us</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Team</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Privacy</p>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm fw-bold">Resources</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <p className="text-light px-0">Blog</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Service</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Product</p>
                </li>

                <li className="nav-item">
                  <p className="text-light px-0">Pricing</p>
                </li>
              </ul>
            </div>
          </div>
          <hr className="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
          <div className="row">
            <div className="col-8 mx-lg-auto text-lg-center">
              <p className="text-sm text-light">
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
