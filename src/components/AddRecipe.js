import React from "react";

function AddRecipe(props) {
  function onFormSubmit(e) {
    e.preventDefault();

    let recipeName = e.target.elements.recipeName.value;
    let description = e.target.elements.description.value;
    let imageLink = e.target.elements.imageLink.value;

    const newRecipe = {
      recipeName,
      description,
      imageLink
    };

    props.addNewRecipe(newRecipe);

    props.closeModal();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <p>
        <label htmlFor="recipeName">Recipe Name</label>
        <input type="input" name="recipeName" />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input type="input" name="description" />
      </p>
      <p>
        <label htmlFor="imageLink">Image Link</label>
        <input type="input" name="imageLink" />
      </p>
      <button
        style={{
          padding: `10px 15px`,
          color: `#fff`,
          backgroundColor: `steelblue`,
          border: `none`,
          borderRadius: `3px`
        }}
      >
        Add New
      </button>
    </form>
  );
}

export default AddRecipe;
