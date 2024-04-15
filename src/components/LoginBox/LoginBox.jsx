import { NavLink } from "react-router-dom";
import css from "./LoginBox.module.css";

const LoginBox = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Hello, Friend</h2>
      <p className={css.text}>
        Create your account and continue your journey with us!
      </p>
      <button className={css.logButton}>
        <NavLink to="/register" className={css.link}>
          Sign up
        </NavLink>
      </button>
    </div>
  );
};

export default LoginBox;
