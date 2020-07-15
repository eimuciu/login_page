import React from "react";
import styled from "styled-components";
import ReactImage from "./react.png";
import Button from "./components/Button";
import { userContext } from "./components/userContext";

const Home = () => {
  var style = {
    textAlign: "center",
    margin: "40px"
  };
  return (
    <userContext.Consumer>
      {({ logout }) => (
        <div style={style}>
          <img alt="Home" src={ReactImage} style={{ width: "400px" }} />
          <LoggedAs>
            <p style={{ margin: "0px" }}>
              Logged as:{" "}
              <span style={{ color: "blue", textDecoration: "underline" }}>
                {sessionStorage.getItem("loggedAs")}
              </span>
            </p>
          </LoggedAs>
          <LogOutButton text="Log Out" onClick={logout} />
        </div>
      )}
    </userContext.Consumer>
  );
};

const LoggedAs = styled.p`
  position: absolute;
  top: 0px;
  right: 20px;
`;

const LogOutButton = styled(Button)`
  position: absolute;
  top: 40px;
  right: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Home;
