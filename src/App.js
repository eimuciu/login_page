import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Error from "./Error";
import LoginPage from "./LoginPage";
import { userContext } from "./components/userContext";
import config from "./config.json";

function isUserLogged() {
  if (sessionStorage.length !== 0) {
    return true;
  } else {
    return false;
  }
}

function findUser(usersList, userInput) {
  return usersList.filter(
    x => x.email === userInput.email && x.password === userInput.password
  );
}

const App = () => {
  const [isLogged, setIsLogged] = useState(isUserLogged);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${config.apiUrl}/users`)
      .then(response => response.json())
      .then(result => setUsers(result));
  }, []);

  const loginUser = user => {
    const isUserExist = findUser(users, user);
    if (isUserExist.length === 0) {
      alert(
        "User do not exist or password is incorrect. Please consider registering account!"
      );
    } else {
      sessionStorage.setItem("loggedAs", isUserExist[0].email);
      setIsLogged(true);
    }
    // fetch(`${config.apiUrl}/users`)
    //   .then(response => response.json())
    //   .then(result => {
    //     const isUserExist = findUser(result, user);
    //     if (isUserExist.length === 0) {
    //       alert(
    //         "User do not exist or password is incorrect. Please consider registering account!"
    //       );
    //     } else {
    //       sessionStorage.setItem("loggedAs", isUserExist[0].email);
    //       setIsLogged(true);
    //     }
    //   });
  };

  const registerUser = user => {
    setUsers([...users, { email: user.email, password: user.password }]);
    // fetch(`${config.apiUrl}/users`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(user)
    // });
  };

  const logout = () => {
    setIsLogged(false);
    sessionStorage.removeItem("loggedAs");
  };

  const contextValue = {
    loginUser,
    registerUser,
    logout,
    users
  };

  console.log(users);

  return (
    <Wrapper>
      <userContext.Provider value={contextValue}>
        {isLogged ? (
          <>
            <Switch>
              <Redirect from="/login" to="/" />
              <Redirect from="/home" to="/" />
              <Route exact path="/" component={Home} />
              <Route component={Error} />
            </Switch>
          </>
        ) : (
          <>
            <Redirect to="/login" />
            <Route path="/login" component={LoginPage} />
          </>
        )}
      </userContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: "#4a4a4a";
  width: 100%;
  margin: auto;
`;

export default App;
