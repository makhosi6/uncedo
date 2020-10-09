import React, { Component } from "react";
import styled, { css } from "styled-components";

function Divider(props) {
  return <Container {...props}></Container>;
}

const Container = styled.div`
 background-color: #808080;
`;

export default Divider;
