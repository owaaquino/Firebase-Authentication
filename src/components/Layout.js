import React from "react";
import Nav from "./Navigation";

function Layout(props) {
  return (
    <div
      style={{
        width: `1100px`,
        margin: `0 auto`,
        padding: `50px 0`
      }}
    >
      <Nav addNewRecipe={props.addNewRecipe} user={props.user} />
      {props.children}
    </div>
  );
}

export default Layout;
