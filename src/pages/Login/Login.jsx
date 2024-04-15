import LoginBox from "../../components/LoginBox/LoginBox";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { selectAuthLoading } from "../../redux/auth/selectors";
import SpinLoader from "../../components/SpinLoader/SpinLoader";
import css from "./Login.module.css";
export default function Login() {
  const loading = useSelector(selectAuthLoading);
  return (
    <section>
      <div className={css.container}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        {loading && <SpinLoader />}
        <LoginForm />
        <LoginBox />
      </div>
    </section>
  );
}
