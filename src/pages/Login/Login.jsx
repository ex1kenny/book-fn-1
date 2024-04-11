import LoginBox from "../../components/LoginBox/LoginBox";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Helmet } from "react-helmet-async";
export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <LoginBox />
    </div>
  );
}
