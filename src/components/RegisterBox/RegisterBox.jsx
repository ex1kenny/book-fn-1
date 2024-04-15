import css from "./RegisterBox.module.css";
import { NavLink } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Welcome Back!</h2>
      <p className={css.text}>
        Log in to access your account and continue your journey with us
      </p>
      <button className={css.logButton}>
        <NavLink to="/login" className={css.link}>
          Sign in
        </NavLink>
      </button>
    </div>
  );
};

export default LoginBox;
