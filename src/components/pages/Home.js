import React, { useState } from "react";
import Modal from "react-modal";
import Recipes from "../container/Recipes";
import AddRecipe from "../AddRecipe";
import { functions } from "../../firebase";

function Home(props) {
  const [isShow, setModalShow] = useState(false);

  function handleOpenModal(e) {
    e.stopPropagation();
    setModalShow(!isShow);
  }

  function handleCloseModal(e) {
    setModalShow(!isShow);
  }

  function handleSubmitAdmin(e) {
    e.preventDefault();
    let adminEmail = e.target.elements.email.value;
    const addAdminRole = functions.httpsCallable("addAdminRole");
    addAdminRole({ email: adminEmail }).then(result => {
      console.log(result);
    });
  }
  return (
    <div>
      {props.user ? (
        <>
          <button className="add-new" onClick={handleOpenModal}>
            Add New Recipe
          </button>
          <Modal isOpen={isShow}>
            <button onClick={handleCloseModal}>close</button>
            <AddRecipe
              addNewRecipe={props.addNewRecipe}
              closeModal={handleCloseModal}
            />
          </Modal>
        </>
      ) : null}
      {props.userIsAdmin ? (
        <form onSubmit={handleSubmitAdmin}>
          <p>
            <input type="email" name="email" />
            <button>Make Admin</button>
          </p>
        </form>
      ) : null}
      <Recipes
        user={props.user}
        recipes={props.recipes}
        deleteRecipe={props.deleteRecipe}
      />
    </div>
  );
}

export default Home;
