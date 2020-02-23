import React, { useState } from "react";
import Modal from "react-modal";
import Login from "../modals/Login";

function LoginForm(props) {
  const [isShow, setModalShow] = useState(false);

  function handleOpenModal(e) {
    e.stopPropagation();
    setModalShow(!isShow);
  }

  function handleCloseModal(e) {
    setModalShow(!isShow);
  }
  return (
    <li>
      <Modal isOpen={isShow}>
        <button onClick={handleCloseModal}>close</button>
        <Login closeModal={handleCloseModal} />
      </Modal>
      <a href="#!" onClick={handleOpenModal}>
        Login
      </a>
    </li>
  );
}

export default LoginForm;
