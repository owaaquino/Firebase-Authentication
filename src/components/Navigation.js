import React from "react";
import { auth } from "../firebase";
import SignUpForm from "../components/container/SignUpForm";
import LoginForm from "../components/container/LoginForm";

function Navigation(props) {
  function handleLogout(e) {
    e.preventDefault();
    auth.signOut();
  }

  return (
    <div className="page-head">
      <h1>Recipe App</h1>
      <nav>
        {!props.user ? (
          <>
            <SignUpForm />
            <LoginForm />
          </>
        ) : (
          <li onClick={handleLogout}>Logout</li>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
