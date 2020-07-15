import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import { userContext } from "./components/userContext";
import AnimatedMessage from "./components/AnimatedMessage";
import Header from "./components/Header";
import UserInputContainer from "./components/UserInputContainer";
import { validateUser } from "./components/validateUser";

function findUser(usersList, userInput) {
  return usersList.filter(
    x => x.email === userInput.email && x.password === userInput.password
  );
}

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [errors, setErrors] = useState({});
  const [userInput, setUserInput] = useState({ email: "", password: "" });

  const InputHandler = event => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <userContext.Consumer>
      {({ loginUser, registerUser, users }) => {
        return (
          <Wrapper>
            <Container>
              <Div>
                {activeTab ? (
                  <Header text="Sign In" />
                ) : (
                  <Header text="Sign Up" />
                )}
                <UserInputContainer
                  errors={errors}
                  user={userInput}
                  onInput={event => {
                    InputHandler(event);
                  }}
                />
                {activeTab ? (
                  <LoginButton
                    onClick={() => {
                      if (!validateUser(userInput).isValid) {
                        setErrors(validateUser(userInput));
                      } else {
                        loginUser(userInput);
                      }
                    }}
                    text="SIGN IN"
                  />
                ) : (
                  <RegistrationButton
                    onClick={() => {
                      if (!validateUser(userInput).isValid) {
                        setErrors(validateUser(userInput));
                      } else if (findUser(users, userInput).length === 1) {
                        alert(
                          "This email is registered. Use different email address!"
                        );
                      } else {
                        registerUser(userInput);
                        setActiveTab(false);
                        setUserInput({ userInput, email: "", password: "" });
                        setActiveTab(true);
                        setShowMessage(true);
                        setTimeout(() => {
                          setShowMessage(false);
                        }, 5000);
                      }
                    }}
                    text="SIGN UP"
                  />
                )}
                <p>
                  Don't have an account?{" "}
                  <CreateAccountLink href onClick={() => setActiveTab(false)}>
                    Create
                  </CreateAccountLink>
                </p>
                <p>
                  <LoginLink href onClick={() => setActiveTab(true)}>
                    Login
                  </LoginLink>
                </p>
              </Div>
              <AnimatedMessage showMessage={showMessage} message="Success" />
            </Container>
          </Wrapper>
        );
      }}
    </userContext.Consumer>
  );
};

export default LoginPage;

const CreateAccountLink = styled.a`
  color: red;
  cursor: pointer;
  position: relative;
  &:hover {
    top: -3px;
    text-decoration: underline;
  }
`;

const LoginLink = styled(CreateAccountLink)`
  color: rgb(150, 51, 255);
`;

const Div = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 80%;
  margin: 0 auto;
  background-color: rgb(150, 51, 255);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
  text-align: center;
  width: 50%;
  height: 80%;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const LoginButton = styled(Button)`
  background-color: rgb(150, 51, 255);
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  width: 30%;
  cursor: pointer;
  position: relative;
  &:hover {
    top: -3px;
  }
`;

const RegistrationButton = styled(LoginButton)`
  background-color: #fc8d83;
`;
