import React, { useState } from "react";
import { auth } from "../../firebase";

function Signup(props) {
  const [isError, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let userName = e.target.elements.userEmail.value;
    let password = e.target.elements.password.value;

    auth
      .createUserWithEmailAndPassword(userName, password)
      .then(cred => {
        props.closeModal();
      })
      .catch(err => {
        setError(err.message);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="userEmail">User Name</label>
        <input type="text" name="userEmail" />
      </p>
      <p>
        <label htmlFor="password"> Choose Password </label>
        <input type="password" name="password" />
      </p>
      <p style={{ color: `tomato` }}>{isError}</p>
      <button>Sign Up</button>
    </form>
  );
}

export default Signup;
