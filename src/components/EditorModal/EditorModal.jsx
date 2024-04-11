import css from "./EditorModal.module.css";
import { useId } from "react";
import { TfiClose } from "react-icons/tfi";
import { CiMemoPad } from "react-icons/ci";
import Modal from "react-modal";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { patchContact } from "../../redux/contacts/operations";

export default function EditorModal({ name, number, id, onOpen, handleModal }) {
  const inputNameID = useId();
  const inputPhoneID = useId();
  const dispatch = useDispatch();

  const ConSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Modal
        isOpen={onOpen}
        onRequestClose={handleModal}
        ariaHideApp={false}
        className={css.modal}
        style={{
          overlay: {
            backgroundColor: "rgb(73 73 73 / 65%)",
          },
        }}
      >
        <TfiClose className={css.buttonClose} onClick={handleModal} size={18} />
        <Formik
          initialValues={{ name, number }}
          onSubmit={(values) => {
            dispatch(patchContact([id, { ...values }]));
          }}
          validationSchema={ConSchema}
        >
          <Form className={css.form}>
            <label className={css.label} htmlFor={inputNameID}>
              Change contact name
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={inputNameID}
              autoComplete={name}
            ></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
            <label className={css.label} htmlFor={inputPhoneID}>
              Change contact number
            </label>
            <Field
              className={css.field}
              type="tel"
              name="number"
              id={inputPhoneID}
              autoComplete="rqwrqw"
            ></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
            <button className={css.button} type="submit">
              Save
            </button>
          </Form>
        </Formik>
        <CiMemoPad className={css.background} size={500} />
      </Modal>
    </div>
  );
}
