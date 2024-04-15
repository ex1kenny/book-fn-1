import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useState } from "react";
import {
  MdPerson,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

const LogSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const nameID = useId();
  const emailID = useId();
  const pasID = useId();
  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.container}>
      <h2 className={css.titleH}>Register Your Account</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LogSchema}
      >
        <Form className={css.formik}>
          <div className={css.fieldContainer}>
            <MdPerson className={css.icon} />
            <Field
              type="text"
              name="name"
              id={nameID}
              className={css.field}
              placeholder="Enter your name"
            />
          </div>
          <ErrorMessage name="name" component="span" className={css.error} />
          <div className={css.fieldContainer}>
            <MdEmail className={css.icon} />
            <Field
              type="email"
              name="email"
              id={emailID}
              className={css.field}
              placeholder="Enter your email"
            />
          </div>
          <ErrorMessage name="email" component="span" className={css.error} />
          <div className={css.fieldContainer}>
            <MdLock className={css.icon} />
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id={pasID}
              className={css.field}
              placeholder="Enter your password"
            />
            <div className={css.passwordToggle} onClick={toggleShowPassword}>
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </div>
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
          <button className={css.button} type="submit">
            Join the Beta
          </button>
        </Form>
      </Formik>
    </div>
  );
}
