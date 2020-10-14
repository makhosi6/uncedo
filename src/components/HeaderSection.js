import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function HeaderSection(props) {
  return (
    <Container {...props}>
      <UserAvatar src={require("../assets/images/bat.jpg")}></UserAvatar>
      <SearchHeader>
        <EvilIconsIcon
          name="search"
          style={{
            color: "grey",
            fontSize: 20,
            marginLeft: 5,
            marginRight: 1
          }}
        ></EvilIconsIcon>
        <SearchInput placeholder="Search"></SearchInput>
      </SearchHeader>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserAvatar = styled.img`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  margin-left: 10px;
  align-self: center;
  object-fit: contain;
`;

const SearchHeader = styled.div`
  height: 40px;
  background-color: #1a1a1c;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  flex: 1 1 0%;
  margin-right: 4px;
  margin-left: 6px;
  align-self: center;
  display: flex;
`;

const SearchInput = styled.input`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  width: 239px;
  height: 40px;
  color: rgba(255,255,255,1);
  margin-right: 1px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  border: none;
  background: transparent;
`;

export default HeaderSection;
