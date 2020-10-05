import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../comp/Header";
import ScrollViewEntry from "../comp/ScrollViewEntry";

function Timeline(props) {
  return (
    <Root>
    <Header
    style={{
        height: 80,
        boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
    }}
    button="Settings"
    ></Header>
      <Body>
        <Headline>
          <Image>
            <Overlay>
              <ScienceChannel>TECHNOLOGY</ScienceChannel>
              <Following>
                <Text>Following</Text>
              </Following>
              <Followers>777K Followers</Followers>
            </Overlay>
          </Image>
        </Headline>
        <ScrollArea>
          <ScrollViewEntry
            style={{
              height: 100,
              flex: "0 0 auto"
            }}
          ></ScrollViewEntry>
          <ScrollViewEntry
            style={{
              width: 360,
              height: 100,
              flex: "0 0 auto"
            }}
          ></ScrollViewEntry>
          <ScrollViewEntry
            style={{
              width: 360,
              height: 100,
              flex: "0 0 auto"
            }}
          ></ScrollViewEntry>
          <ScrollViewEntry
            style={{
              width: 360,
              height: 100,
              flex: "0 0 auto"
            }}
          ></ScrollViewEntry>
        </ScrollArea>
      </Body>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgb(255,255,255);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Body = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Headline = styled.div`
  height: 246px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
`;

const Image = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/astronaut-astronomy-cosmos-2156.jpg")});
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: rgba(30,26,26,0.4);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const ScienceChannel = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 24px;
  font-weight: bold;
  margin-top: 43px;
  align-self: center;
`;

const Following = styled.div`
  width: 90px;
  height: 40px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: 28px;
  align-self: center;
`;

const Text = styled.span`
  font-family: Arial;
  color: rgba(31,178,204,1);
  font-size: 14px;
  font-weight: bold;
  align-self: center;
`;

const Followers = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: bold;
  margin-top: 39px;
  align-self: center;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  height: 413px;
  flex-direction: column;
  display: flex;
`;

export default Timeline;
