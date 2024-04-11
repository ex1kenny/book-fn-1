/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { MdPerson, MdPhone } from "react-icons/md";
export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numId = useId();
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
    <div className={css.container}>
      <h2 className={css.titleH}>Add contact</h2>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={ConSchema}
        onSubmit={(items, action) => {
          dispatch(addContact(items));
          action.resetForm();
        }}
      >
        <Form className={css.formik}>
          <div className={css.fieldContainer}>
            <MdPerson className={css.icon} />
            <Field
              className={css.field}
              type="text"
              name="name"
              id={nameId}
              placeholder="Name"
            />
          </div>
          <ErrorMessage className={css.error} name="name" component="span" />
          <div className={css.fieldContainer}>
            <MdPhone className={css.icon} />
            <Field
              className={css.field}
              type="tel"
              name="number"
              id={numId}
              placeholder="Number"
            />
          </div>
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
