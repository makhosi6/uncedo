import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function Footer(props) {
  return (
    <Container {...props}>
      <Link to="/Home">
        <Button3>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="reddit"
              style={{
                color: "grey",
                fontSize: 28
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </Button3>
      </Link>
      <Link to="/Explore">
        <Button4>
          <ButtonOverlay>
            <IoniconsIcon
              name="md-apps"
              style={{
                color: "rgba(128,128,128,1)",
                fontSize: 28,
                alignSelf: "center"
              }}
            ></IoniconsIcon>
          </ButtonOverlay>
        </Button4>
      </Link>
      <Group5>
        <MaterialCommunityIconsIcon
          name="pencil"
          style={{
            color: "grey",
            fontSize: 28,
            alignSelf: "center"
          }}
        ></MaterialCommunityIconsIcon>
      </Group5>
      <FontAwesomeIcon
        name="commenting"
        style={{
          color: "grey",
          fontSize: 28
        }}
      ></FontAwesomeIcon>
      <Link to="/Notifications">
        <Button2>
          <ButtonOverlay>
            <EntypoIcon
              name="mail"
              style={{
                color: "grey",
                fontSize: 28
              }}
            ></EntypoIcon>
          </ButtonOverlay>
        </Button2>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button3 = styled.div`
  width: 28px;
  height: 28px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Button4 = styled.div`
  width: 28px;
  height: 28px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Group5 = styled.div`
  width: 40px;
  height: 40px;
  align-self: center;
  border-radius: 100px;
  border-color: rgba(2,107,189,1);
  border-width: 3px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border-style: solid;
`;

const Button2 = styled.div`
  width: 28px;
  height: 28px;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default Footer;
