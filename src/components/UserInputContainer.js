import React from "react";
import styled from "styled-components";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";
import DraftsIcon from "@material-ui/icons/Drafts";
import LockIcon from "@material-ui/icons/Lock";

const UserInputContainer = ({ errors, user, onInput }) => (
  <>
    <Container>
      <EmailIcon style={{ fontSize: "36px" }} />
      <ToolTipContainer>
        <InputEmail
          type="text"
          placeholder="E-mail"
          name="email"
          onInput={event => onInput(event)}
          value={user.email}
        />
        <ErrorMessage>
          {errors.empty}
          {errors.email}
        </ErrorMessage>
      </ToolTipContainer>
    </Container>
    <Container>
      <PasswordIcon style={{ fontSize: "36px" }} />
      <ToolTipContainer>
        <InputPassword
          type="password"
          placeholder="Password"
          name="password"
          onInput={event => onInput(event)}
          value={user.password}
        />
        <ErrorMessage>{errors.passwordEmpty} </ErrorMessage>
      </ToolTipContainer>
    </Container>
  </>
);

const ToolTipContainer = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  justify-content: start;
`;

const EmailIcon = styled(DraftsIcon)`
  color: rgb(150, 51, 255);
  &:hover {
    transform: scale(1.1);
  }
`;

const PasswordIcon = styled(LockIcon)`
  color: rgb(150, 51, 255);
  &:hover {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 100%;
  padding: 10px;
`;

const InputEmail = styled(Input)`
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  outline: none;
  &:focus {
    border: 2px solid green;
  }
`;

const InputPassword = styled(InputEmail)``;

export default UserInputContainer;
