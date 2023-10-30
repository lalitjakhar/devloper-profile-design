import React from "react";
import Detailsimage from "../../Assets/details.avif";
import { Button } from "@mui/material";

const Details = () => {
  return (
    <>
      <section class="py-5 bg-gray-100">
        <div class="container">
          <div class="row">
            <div class="col mx-auto text-center">
              <div class="card card-blog card-plain" style={{backgroundColor:'#aeb900'}}>
                <div class="card-header p-0 position-relative z-index-2">
                  <a class="d-block">
                    <img src={Detailsimage} alt="" class="w-100" />
                  </a>
                </div>
                <div class="card-body px-0 pt-4">
                  <p class="text-warning text-gradient font-weight-bold text-sm text-uppercase">
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
        </div>
      </section>
    </>
  );
};

export default Details;
