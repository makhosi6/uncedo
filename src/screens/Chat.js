import React from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Strip from "../components/Strip";
import Footer from "../components/Footer";

function Notifications(props) {
  return (
    <Container>
      <TabSection>
        <NotifsTab>
          <Center>
            <Text>Notifications</Text>
          </Center>
        </NotifsTab>
        <MessagesTab>
          <Center>
            <Text2>Messages</Text2>
          </Center>
        </MessagesTab>
        <ModMailTab>
          <Center vertical>
            <Text3>Mod mail</Text3>
          </Center>
        </ModMailTab>
      </TabSection>
      <Header>
        <Center vertical>
          <Image src={require("../assets/images/actor-adult-black-and-white-1040880.jpg")}></Image>
        </Center>
        <Center vertical>
          <Text4>Inbox</Text4>
        </Center>
        <Center vertical>
          {/* <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 24,
              left: 315,
              position: "absolute"
            }}
          ></MaterialCommunityIconsIcon> */}
        </Center>
      </Header>
      <ScrollArea>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      <Strip/>
      </ScrollArea>
      <Footer
        style={{
          border: "1px solid white",
          left: 0,
          height: 50,
          position: "absolute",
          right: 0,
          bottom: 0
        }}
      ></Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  height: 100vh;
  max-width: 1000px;
  margin: auto;
`;

const TabSection = styled.div`
  top: 12.36%;
  left: 0px;
  height: 58px;
  position: absolute;
  flex-direction: row;
  right: 0px;
  justify-content: space-around;
  border-color: #00000;
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  display: flex;
`;

const NotifsTab = styled.div`
  width: 127px;
  height: 59px;
  align-self: center;
  margin-right: 0px;
  margin-left: 0px;
  border-color: #1fb2cc;
  border-width: 0px;
  border-bottom-width: 3px;
  border-style: solid;
  position: relative;
  display: flex;
`;

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: none;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const Text = styled.span`
  font-family: IBM Plex Sans;
  color: #00000;
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

const MessagesTab = styled.div`
  width: 101px;
  height: 59px;
  align-self: center;
  margin-right: 0px;
  margin-left: 0px;
  position: relative;
  display: flex;
`;

const Text2 = styled.span`
  font-family: IBM Plex Sans;
  color: #00000;
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

const ModMailTab = styled.div`
  width: 95px;
  height: 59px;
  align-self: center;
  margin-right: 0px;
  margin-left: 0px;
  position: relative;
  display: flex;
`;

const Text3 = styled.span`
  font-family: IBM Plex Sans;
  left: 10.81%;
  color: #00000;
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

const Header = styled.div`
  top: 21px;
  left: 0px;
  height: 60px;
  position: absolute;
  right: 0px;
  display: flex;
`;

const Image = styled.img`
  left: 18px;
  width: 35px;
  height: 36px;
  position: absolute;
  border-radius: 50%;
  object-fit: contain;
`;

const Text4 = styled.span`
  font-family: IBM Plex Sans;
  left: 72px;
  color: #00000;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  top: 140px;
  left: 0px;
  background-color: #fffff
  position: absolute;
  flex-direction: column;
  right: 0px;
  bottom: 50px;
  justify-content: flex-start;
  display: flex;
`;


export default Notifications;
