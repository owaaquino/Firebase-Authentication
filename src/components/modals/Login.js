import React from "react";
import { auth } from "../../firebase";

function Login(props) {
  function handleSubmit(e) {
    e.preventDefault();
    let userName = e.target.elements.userEmail.value;
    let password = e.target.elements.password.value;

    auth.signInWithEmailAndPassword(userName, password).then(cred => {
      props.closeModal();
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="userEmail">User Name</label>
        <input type="text" name="userEmail" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </p>
      <button>Login</button>
    </form>
  );
}

export default Login;
