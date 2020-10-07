import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "../components/Header";
import Article from "../components/Article";
import ScrollViewEntry from "../components/ScrollViewEntry";

function Timeline(props) {
  return (
    <Root>
      <Body>
        <Headline>
          <Image>
            <Overlay>
              <Following>
                <Text>Following</Text>
              </Following>
              <Followers>777K Followers</Followers>
            </Overlay>
          </Image>
        </Headline>
        <ScrollArea>
          <ScrollViewEntry/>
          <ScrollViewEntry/>
        <Article />
        <Article/>
        <Article />
        <Article/>
        </ScrollArea>
      </Body>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
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
  background-image: url(${require("../assets/images/astronaut-astronomy-cosmos-21561.jpg")});
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: rgba(30, 26, 26, 0.4);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Following = styled.div`
  width: 90px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: 103px;
  align-self: center;
`;

const Text = styled.span`
  font-family: Arial;
  color: rgba(31, 178, 204, 1);
  font-size: 14px;
  font-weight: bold;
  align-self: center;
`;

const Followers = styled.span`
  font-family: Arial;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: bold;
  margin-top: 39px;
  align-self: center;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  flex-direction: column;
  display: flex;
`;

export default Timeline;
