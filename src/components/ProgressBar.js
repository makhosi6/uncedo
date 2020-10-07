import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function ProgressBar(props) {
  return (
    <Container>
      <Icon2Row>
        <IoniconsIcon
          name="md-checkmark-circle"
          style={{
            color: "rgba(30,174,199,1)",
            fontSize: 40,
            width: 33,
            height: 40
          }}
        ></IoniconsIcon>
        <EntypoIcon
          name="time-slot"
          style={{
            color: "#1fb2cc",
            fontSize: 35,
            width: 40,
            height: 36,
            marginLeft: 60,
            marginTop: 4
          }}
        ></EntypoIcon>
        <Rect4></Rect4>
        <Rect5></Rect5>
      </Icon2Row>
      <Icon2RowFiller></Icon2RowFiller>
      <FontAwesomeIcon
        name="circle"
        style={{
          color: "rgba(255,255,255,1)",
          fontSize: 40,
          width: 34,
          height: 40,
          opacity: 0.75
        }}
      ></FontAwesomeIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 222px;
  height: 40px;
  flex-direction: row;
`;

const Rect4 = styled.div`
  width: 50px;
  height: 7px;
  background-color: rgba(31,178,204,1);
  border-radius: 40px;
  margin-left: -94px;
  margin-top: 16px;
`;

const Rect5 = styled.div`
  width: 50px;
  height: 7px;
  background-color: rgba(230, 230, 230,1);
  opacity: 0.75;
  border-radius: 40px;
  margin-left: 44px;
  margin-top: 16px;
`;

const Icon2Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
`;

const Icon2RowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

export default ProgressBar;
