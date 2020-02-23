import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import db, { auth } from "./firebase";

function App() {
  const [recipes, setRecipe] = useState({});
  const [user, setUser] = useState(false);

  // check user if logged in
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log("user logged in:", user.email);
      setUser(true);
    } else {
      console.log("user logged out");
      setUser(false);
    }
  });

  useEffect(() => {
    db.collection("recipes")
      .get()
      .then(querySnapshot => {
        setRecipe(
          querySnapshot.docs.reduce(
            (res, item) => ({
              ...res,
              [item.id]: item.data()
            }),
            {}
          )
        );
      });
  }, []);

  function addNewRecipe(recipe) {
    const newRecipe = { ...recipes };
    newRecipe[`recipe${Date.now()}`] = recipe;
    setRecipe({ ...newRecipe });

    db.collection("recipes")
      .doc(`recipe${Date.now()}`)
      .set(recipe)
      .then(() => {
        console.log("A new job post has been added");
      })
      .catch(error => {
        console.log("Creationg failed", error);
      });
  }

  function deleteRecipe(key) {
    const oldRecipe = { ...recipes };
    delete oldRecipe[key];
    setRecipe({ ...oldRecipe });

    db.collection("recipes")
      .doc(key)
      .delete();
  }

  return (
    <Layout user={user}>
      <Home
        addNewRecipe={addNewRecipe}
        recipes={recipes}
        deleteRecipe={deleteRecipe}
        user={user}
      />
    </Layout>
  );
}

export default App;
