import React, { useState } from "react";
import Modal from "react-modal";
import Recipes from "../container/Recipes";
import AddRecipe from "../AddRecipe";

function Home(props) {
  const [isShow, setModalShow] = useState(false);

  function handleOpenModal(e) {
    e.stopPropagation();
    setModalShow(!isShow);
  }

  function handleCloseModal(e) {
    setModalShow(!isShow);
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
      <Recipes
        user={props.user}
        recipes={props.recipes}
        deleteRecipe={props.deleteRecipe}
      />
    </div>
  );
}

export default Home;
