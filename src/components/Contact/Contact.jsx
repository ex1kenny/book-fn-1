/* eslint-disable react/prop-types */
import { useState } from "react";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";
import EditorModal from "../EditorModal/EditorModal.jsx";

export default function Contact({ data: { name, number, id } }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen((prevValue) => !prevValue);
  }
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.list}>
        <span>
          <FaUser />
          <p className={css.item} onClick={toggleModal}>
            {name}
          </p>
        </span>
        <span>
          <BsFillTelephoneFill />
          <p className={css.item} onClick={toggleModal}>
            {number}{" "}
          </p>
        </span>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
      <EditorModal
        name={name}
        number={number}
        id={id}
        onOpen={modalIsOpen}
        handleModal={toggleModal}
      />
    </div>
  );
}
