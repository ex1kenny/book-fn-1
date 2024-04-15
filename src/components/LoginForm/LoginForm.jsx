import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { loginIn } from "../../redux/auth/operations";
import { useState } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(loginIn(values));
    actions.resetForm();
  };

  const pasId = useId();
  const LogID = useId();
  const LogSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.submit();
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.titleH}>Join to Phonebook</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LogSchema}
      >
        <Form onKeyPress={handleKeyPress} className={css.formik}>
          <ErrorMessage name="name" component="span" className={css.error} />
          <div className={css.fieldContainer}>
            <MdEmail className={css.icon} />
            <Field
              type="email"
              name="email"
              id={LogID}
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
              id={pasId}
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
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}
