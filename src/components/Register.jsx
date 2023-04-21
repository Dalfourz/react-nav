import React from "react";
import { auth } from "../firebase//init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    createUserWithEmailAndPassword(auth, "email1@email.com", "password123")
      .then((user) => {
        console.log(user);
        alert("Registered");
      })
      .catch((error) => {
        console.log(error);
      });
      console.log("registered");
      alert("Already Registered");
  }

export default Register;
