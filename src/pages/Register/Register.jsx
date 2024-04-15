import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet-async";
import RegisterBox from "../../components/RegisterBox/RegisterBox";
import { selectAuthLoading } from "../../redux/auth/selectors";
import SpinLoader from "../../components/SpinLoader/SpinLoader";
import { useSelector } from "react-redux";
import css from "./Register.module.css";
export default function Register() {
  const loading = useSelector(selectAuthLoading);
  return (
    <section>
      <div className={css.container}>
        <Helmet>
          <title>Register</title>
        </Helmet>
        {loading && <SpinLoader />}
        <RegisterBox />
        <RegisterForm />
      </div>
    </section>
  );
}
