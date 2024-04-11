import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet-async";
import RegisterBox from "../../components/RegisterBox/RegisterBox";
export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
      <RegisterBox/>
    </div>
  );
}
