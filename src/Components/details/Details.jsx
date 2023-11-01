import React from "react";
import Detailsimage from "../../Assets/details.avif";
import { Button, Container } from "@mui/material";
import "../details/Details.css";

const Details = () => {
  return (
    <>
      <section className="py-5 bg-gray-100">
        <Container>
          <div className="row">
            <div className="col mx-auto text-center">
              <div className="card card-blog card-plain">
                <div className="card-header p-0 position-relative z-index-2">
                  <a className="d-block">
                    <img src={Detailsimage} alt="" className="w-100 h-50" />
                  </a>
                </div>
                <div className="card-body px-0 pt-4 details_content_effect">
                  <p className="text-warning text-gradient font-weight-bold text-sm text-uppercase">
                    Enterprise
                  </p>
                  <h4>Siri brings hands-free TV to more devices</h4>
                  <p>
                    Siri&#39;s latest trick is offering a hands-free TV viewing
                    experience, that will allow consumers to turn on or off
                    their television, change inputs, fast forward, rewind and
                    more, without having to first invoke a specific skill, or
                    even press a button on their remote.
                  </p>
                  <Button variant="contained" color="secondary">
                    Check This
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Details;
