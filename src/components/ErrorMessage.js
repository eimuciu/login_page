import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ children }) => <Span>{children}</Span>;

const Span = styled.span`
  position: absolute;
  z-index: 1;
  left: 101%;
  background-color: #e85833;
  border-radius: 5px;
  color: white;
  width: 120px;
  /* &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #e85833 transparent transparent;
  } */
`;

export default ErrorMessage;
