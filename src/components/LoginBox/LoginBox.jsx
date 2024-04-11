import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
`;

const SignInLink = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginBox = () => {
  return (
    <Wrapper>
      <Title>You don't have an account?</Title>
      <SignInLink to="/register">Sign in</SignInLink>
    </Wrapper>
  );
};

export default LoginBox;
