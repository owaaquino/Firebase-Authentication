import React, { useState } from "react";
import Modal from "react-modal";
import SingUp from "../modals/Singup";

function SignUpForm(props) {
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
        <SingUp closeModal={handleCloseModal} />
      </Modal>
      <a href="#!" onClick={handleOpenModal}>
        Sign Up
      </a>
    </li>
  );
}

export default SignUpForm;
