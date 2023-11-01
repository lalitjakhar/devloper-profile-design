import React, { useEffect } from "react";
import "../login/Login.css";
import { Box, Button, Container } from "@mui/material";

const Login = () => {
  const formId = "save-later-form";
  const formIdentifier = window.location.href;

  const saveData = (event) => {
    event.preventDefault();
    const data = {
      fullName: document.querySelector("#full-name").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      dob: document.querySelector("#dob").value,
      description: document.querySelector("#description").value,
    };
    localStorage.setItem(formIdentifier, JSON.stringify(data));
    const message = "Form draft has been saved!";
  };

  const populateForm = () => {
    const form = document.querySelector(`#${formId}`);
    const formElements = form.elements;

    if (localStorage.getItem(formIdentifier)) {
      const savedData = JSON.parse(localStorage.getItem(formIdentifier));

      for (const element of formElements) {
        if (element.name in savedData) {
          element.value = savedData[element.name];
        }
      }
    }
  };

  useEffect(() => {
    populateForm();

    const saveButton = document.querySelector("#save");
    saveButton.addEventListener("click", saveData);
  }, []);

  return (
    <>
      <Container sx={{ marginBlock: "2rem" }}>
        <form id="save-later-form">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" name="full-name" id="full-name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" maxLength="11" />
          <label htmlFor="dob">Date Of Birth</label>
          <input type="date" name="dob" id="dob" />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Describe yourself in 50 words"
          ></textarea>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 2, mb: 2 }}
              type="submit"
              id="submit"
            >
              SUBMIT
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              sx={{ mr: 2, mb: 2 }}
              id="save"
            >
              SAVE
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Login;
