import React, { useEffect } from "react";
import "../login/Login.css";
import { Button } from "@mui/material";

const Login = () => {
  const formId = "save-later-form";
  const formIdentifier = window.location.href;
  const alertBox = document.querySelector(".alert");

  /**
   * @returns {Object}
   */
  const getFormData = () => {
    const form = document.querySelector(`#${formId}`);
    const formElements = form.elements;
    let data = { [formIdentifier]: {} };
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[formIdentifier][element.name] = element.value;
      }
    }
    return data;
  };

  const saveData = (event) => {
    event.preventDefault();
    const data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    const message = "Form draft has been saved!";
    displayAlert(message);
  };

  /**
   * @param {String} message
   */
  const displayAlert = (message) => {
    alertBox.innerText = message;
    alertBox.style.display = "block";
    setTimeout(function () {
      alertBox.style.display = "none";
    }, 1000);
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
      const message = "Form has been refilled with saved data!";
      displayAlert(message);
    }
  };

  useEffect(() => {
    populateForm();
    const saveButton = document.querySelector("#save");
    saveButton.addEventListener("click", saveData);
  }, []);

  return (
    <>
      <div className="alert"></div>
      <form id="save-later-form">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" name="full-name" id="full-name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" maxLength="11" />
        <label htmlFor="dob">Date Of Birth</label>
        <input type="date" name="dob" id="dob" />
        <label htmlFor="security">Security Question</label>
        <select name="security" id="security" tabIndex="0">
          <option value="">Select a question</option>
          <option value="best-friend">What's your best friend's name?</option>
          <option value="pet">What's the name of your first pet?</option>
          <option value="spouse">Where did you meet your spouse?</option>
        </select>
        <label htmlFor="security-answer">Answer</label>
        <input type="text" name="security-answer" id="security-answer" />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Describe yourself in 100 words"
        ></textarea>
        <Button variant="contained" color="success" type="submit" id="submit">
          SUBMIT
        </Button>
        <Button variant="contained" color="secondary" type="button" id="save">
          SAVE
        </Button>
      </form>
    </>
  );
};

export default Login;
