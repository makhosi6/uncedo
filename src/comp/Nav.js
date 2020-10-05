import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "./comp/Header";

function Index(props) {
  return (
    <Header
      style={{
        height: 80,
        boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
      }}
      button="Settings"
    ></Header>
  );
}

export default Index;
