import React from "react";
import styled, { keyframes } from "styled-components";

const AnimatedMessage = ({ message, showMessage }) => (
  <MessageBox duration={5} showMessage={showMessage}>
    {message}
  </MessageBox>
);

const animation = keyframes`
0%   {opacity: 0.5}
25%  {opacity: 1}
50%  {opacity: 1}
100% {opacity: 0}
`;

const MessageBox = styled.div`
  display: ${({ showMessage }) => (showMessage ? "block" : "none")};
  text-align: center;
  position: absolute;
  border: solid white;
  color: white;
  background-color: #28a745;
  z-index: 2;
  padding: 20px;
  width: 20%;
  top: 15%;
  right: 0px;
  border-radius: 5px;
  animation: ${animation} ${({ duration }) => duration + "s"} both;
`;

export default AnimatedMessage;
