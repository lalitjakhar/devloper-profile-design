import { Avatar } from "@mui/material";
import React from "react";

const Blog = () => {
  return (
    <>
      <section class="py-6 bg-gray-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-lg-0 mb-4">
              <div class="card">
                <div class="card-header p-0 m-3 mt-n4 position-relative z-index-2">
                  <img
                    src="https://images.unsplash.com/photo-1592489637182-8c172d6d7826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80"
                    alt="img-blur-shadow"
                    class="img-fluid border-radius-lg"
                  />
                </div>
                <div class="card-body pt-2">
                  <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">
                    House
                  </span>
                  <h4>Shared Coworking</h4>
                  <p class="card-description mb-4">
                    Use border utilities to quickly style the border and
                    border-radius of an element. Great for images, buttons.
                  </p>
                  <div class="d-flex align-items-center">
                    <Avatar src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <div class="name ps-3">
                      <span>Mathew Glock</span>
                      <div class="stats">
                        <small>Posted on 28 February</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-4">
              <div class="card">
                <div class="card-header p-0 m-3 mt-n4 position-relative z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
                      alt="img-blur-shadow"
                      class="img-fluid border-radius-lg"
                    />
                  </a>
                </div>
                <div class="card-body pt-2">
                  <span class="text-gradient text-info text-uppercase text-xs font-weight-bold my-2">
                    Office
                  </span>
                  <h4>Really Housekeeping</h4>
                  <p class="card-description mb-4">
                    Use border utilities to quickly style the border and
                    border-radius of an element. Great for images, buttons.
                  </p>
                  <div class="d-flex align-items-center">
                    <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <div class="name ps-3">
                      <span>Chriss Smahos</span>
                      <div class="stats">
                        <small>Posted 2 min ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-4">
              <div class="card">
                <div class="card-header p-0 m-3 mt-n4 position-relative z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://images.unsplash.com/photo-1444877466744-dc2f2af2b931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
                      alt="img-blur-shadow"
                      class="img-fluid border-radius-lg"
                    />
                  </a>
                </div>
                <div class="card-body pt-2">
                  <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">
                    Hub
                  </span>
                  <h4>Coworking Office</h4>
                  <p class="card-description mb-4">
                    Use border utilities to quickly style the border and
                    border-radius of an element. Great for images, buttons.
                  </p>
                  <div class="d-flex align-items-center">
                    <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
                    <div class="name ps-3">
                      <span>Elijah Miller</span>
                      <div class="stats">
                        <small>Posted now</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
