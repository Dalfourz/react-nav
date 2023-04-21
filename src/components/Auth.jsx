import React from "react";
import { auth } from "../firebase//init";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Login = () => {
  signInWithEmailAndPassword(auth, "email1@email.com", "password123")
    .then(({ user }) => {
      console.log(user);
      alert("Logged In");
    })
    .catch((error) => {
      console.log(error);
      alert("Already Logged In");
    });
};

export function logout() {
  signOut(auth)
};