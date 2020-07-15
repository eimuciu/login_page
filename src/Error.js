import React from "react";
import styled from "styled-components";

const Error = () => (
  <Container>
    <h2>Error: Invalid URL</h2>
  </Container>
);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Error;
