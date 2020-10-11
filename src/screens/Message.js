import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Divider from "../components/Divider";
import MssgBubble from "../components/MssgBubble";
// #comment CommentsWrapper
import SimpleLineIconsIcon from "react-native-vector-icons/dist/SimpleLineIcons";

import Strip from "../components/Strip";
import Footer from "../components/Footer";

function Notifications(props) {
  const scrllArea = React.useRef();

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
      <ScrollArea className="scroll-area" ref={scrllArea} onScroll={(e) => {

      } }>
      <MssgBubble side="right" />
      <MssgBubble side="right" />
      <MssgBubble side="left" />
      <MssgBubble side="right" />
      <MssgBubble side="left" />
      <MssgBubble side="right" />
      <MssgBubble side="right" />
      <MssgBubble side="left" />
      <MssgBubble side="right" />
      <MssgBubble side="left" />
      <MssgBubble side="right" />
      <MssgBubble side="right" />
      <MssgBubble side="left" />
      <MssgBubble side="right" />
      <MssgBubble side="left" />
     
      </ScrollArea>
      <Footer
        style={{
          border: "1px solid green",
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
  top: 8.36%;
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
  height: 51px;
  align-self: center;
  margin-right: 0px;
  margin-left: 0px;
  border-color: #1fb2cc;
  border-width: 0px;
  border-bottom-width: 8px;
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
  bottom: 115px;
  justify-content: flex-start;
  display: flex;
`;


export default Notifications;




































/*

*/
const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const HeaderSection = styled.div`
  height: 60px;
  flex-direction: column;
  display: flex;
`;

const Button3 = styled.div`
  width: 30px;
  height: 30px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Button3Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 13px;
  margin-left: 17px;
  margin-right: 17px;
`;

const Button3RowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const PostDetails = styled.div`
  height: 48px;
  flex-direction: column;
  display: flex;
  margin-top: 18px;
  margin-left: 19px;
  margin-right: 42px;
`;

// const Image = styled.img`
//   height: 36px;
//   border-radius: 10px;
//   margin-top: 6px;
//   object-fit: contain;
// `;

// const Text = styled.span`
//   font-family: IBM Plex Sans;
//   color: rgba(255,255,255,1);
//   font-size: 20px;
//   font-weight: regular;
//   font-style: normal;
// `;

// const Text2 = styled.span`
//   font-family: IBM Plex Sans;
//   color: rgba(128,128,128,1);
//   font-size: 14px;
//   font-weight: regular;
//   font-style: normal;
//   margin-top: 4px;
// `;

const TextColumn = styled.div`
  width: 220px;
  flex-direction: column;
  display: flex;
  margin-left: 12px;
`;

const ImageRow = styled.div`
  height: 49px;
  flex-direction: row;
  display: flex;
  margin-right: 32px;
`;

const CommentsWrapper = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  flex-direction: column;
  right: 3px;
  justify-content: space-around;
  display: flex;
`;

const Comment1 = styled.div`
  width: 304px;
  height: 64px;
  flex-direction: column;
  display: flex;
`;

const Text9 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
`;

const Text10 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 7px;
`;

const Group = styled.div`
  width: 228px;
  height: 18px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 75px;
  display: flex;
`;

const ReplyAction = styled.div`
  width: 55px;
  height: 16px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

const Text16 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-left: 12px;
`;

const Icon12Row = styled.div`
  height: 15px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-top: 1px;
`;

const CommentVote = styled.div`
  width: 62px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  display: flex;
`;

const Text15 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Comment11 = styled.div`
  width: 284px;
  height: 67px;
  margin-left: 30px;
  flex-direction: column;
  display: flex;
`;

const Text11 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 26px;
`;

const Text12 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-top: -44px;
`;

const Rect3 = styled.div`
  width: 228px;
  height: 19px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 38px;
  margin-left: 56px;
  display: flex;
`;

const Rect4 = styled.div`
  width: 55px;
  height: 16px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;
// const ScrollArea = styled.div`
//   min-height: 600px;
//   overflow-y: scroll; 
//   top: 187px;
//   left: 0px;  
//   right: 0px;
//   max-width: 1000px;
//   margin: auto;
//   border: 2px solid red;
  
// `;

/*
justify-content: flex-start;
  display: flex;
 background-color: #fffff
  position: absolute;
  flex-direction: column;
*/
const Text17 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-left: 12px;
`;

const Icon14Row = styled.div`
  height: 15px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-top: 1px;
`;

const Rect5 = styled.div`
  width: 62px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  display: flex;
`;

const Text18 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Comment111 = styled.div`
  width: 255px;
  height: 66px;
  margin-left: 60px;
  flex-direction: column;
  display: flex;
`;

const Text13 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
`;

const Text14 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 9px;
`;

const Rect6 = styled.div`
  width: 228px;
  height: 18px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 26px;
  display: flex;
`;

const Rect7 = styled.div`
  width: 55px;
  height: 16px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

const Text19 = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 12px;
  font-weight: regular;
  font-style: normal;
  margin-left: 12px;
`;

const Icon18Row = styled.div`
  height: 15px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-top: 1px;
`;

const Rect8 = styled.div`
  width: 62px;
  height: 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  display: flex;
`;

const Text20 = styled.span`
  font-family: IBM Plex Sans;
  color: #828384;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const AddCommentSection = styled.div`
  max-width: 1000px;
  margin: auto;
  left: 4px;
  height: 40px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 100%;
  flex-direction: row;
  display: flex;
`;

const Group2 = styled.div`
  width: 100%;
  background-color: #1a1a1c;
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const TextInput = styled.input`
  font-family: IBM Plex Sans;
  width: 100%;
  height: 32px;
  background-color: #1a1a1c;
  color: rgba(255,255,255,1);
  border-radius: 6px;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-left: 10px;
  border: none;
  background: transparent;
`;

const Group2Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Group3 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #1a1a1c;
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Group4 = styled.div`
  width: 20px;
  height: 28px;
  flex-direction: column;
  display: flex;
  align-self: center;
`;

const Icon21Stack = styled.div`
  width: 20px;
  height: 30px;
  position: relative;
`;

const CommentsWrapperStack = styled.div`
 
  margin-left: 16px;
  margin-right: 13px;
  position: relative;
`;
