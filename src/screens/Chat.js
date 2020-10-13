import React from "react";
import styled, { css } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { Mssg, Bar, Not } from "../components/Bar";
import Nav from "../components/Nav";

function Notifications(props) {
  const scrllArea = React.useRef();

  return (
    <>
    <Nav/>
    <Container>
      <TabSection>
        <NotifsTab
          style={mssgs}
          onClick={(e) => {
            window.location.pathname = "/chat/messages";
          }}
        >
          <Center>
              <Text>Messages</Text>
          </Center>
        </NotifsTab>
        <MessagesTab
          onClick={(e) => {
            window.location.pathname = "/chat/contacts";
          }}
          style={contacts}
        >
          <Center>
            <Text2> Contacts</Text2>
          </Center>
        </MessagesTab>
        <ModMailTab
          style={notifications}
          onClick={(e) => {
            window.location.pathname = "/chat/notifications";
          }}
        >
          <Center vertical>
            <Text3> Notifications</Text3>
          </Center>
        </ModMailTab>
      </TabSection>
      <Header>
        <Center vertical>
          <Image
            src={require("../assets/images/actor-adult-black-and-white-1040880.jpg")}
          ></Image>
        </Center>
        <Center vertical>
          <Text4>Inbox</Text4>
        </Center>
        <Center vertical></Center>
      </Header>
      <ScrollArea
        className="scroll-area"
        ref={scrllArea}
        onScroll={(e) => {}}
        onClick={(e) => {
          console.trace("TO-DO HERE");
        }}
      >
        <Switch>
          <Route exact path="/chat/messages" component={Mssg} />
          <Route exact path="/chat/contacts" component={Bar} />
          <Route exact path="/chat/notifications" component={Not} />
        </Switch>
      </ScrollArea>
    </Container>
    </>
  );
}
const styles = {
  borderColor: "#1fb2cc",
  borderBottomWidth: "4px",
  borderBottomStyle: "solid",
};
const notifications =
  window.location.pathname === "/chat/notifications" ? styles : null;
const mssgs = window.location.pathname === "/chat/messages" ? styles : null;
const contacts = window.location.pathname === "/chat/contacts" ? styles : null;

const Container = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  height: 100vh;
  max-width: 1000px;
  margin: auto;
`;

const TabSection = styled.div`
  top: 6.36%;
  left: 0px;
  height: 61px;
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
  border-width: 0px;
  position: relative;
  display: flex;
  cursor: pointer !important;
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

  ${(props) =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
    `};

  ${(props) =>
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
  cursor: pointer !important;
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
  cursor: pointer !important;
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
  top: 0px;
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
  z-index: 100;
  top: 140px;
  left: 0px;
  background-color: #fffff
  position: absolute;
  flex-direction: column;
  right: 0px;
  bottom: 0;
  justify-content: flex-start;
  display: flex;
`;

export default Notifications;
