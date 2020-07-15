import React from "react";
import styled from "styled-components";

const Header = ({ text }) => (
  <Div>
    <h1>{text}</h1>
  </Div>
);

const Div = styled.div`
  margin: 0;
  text-align: center;
  width: 100%;
`;

export default Header;
