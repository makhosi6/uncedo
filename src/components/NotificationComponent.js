import React from "react";
import styled from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function NotificationComponent(props) {
  return (
    <Container {...props}>
      <CommentRow>
        <MaterialCommunityIconsIcon
          name="comment"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 20,
            alignSelf: "flex-start",
            height: 20,
            width: 20,
            marginTop: 2,
          }}
        ></MaterialCommunityIconsIcon>
        <NotificationData>
          <NotificationHeading>
            {props.NotificationHeading ||
              "u/ABC replied to your post in r/pics."}
          </NotificationHeading>
          <NotificationContent>
            {props.notificationContent || "You should check it out."}
          </NotificationContent>
          <Time>{props.Time || "Post reply • 1h"}</Time>
        </NotificationData>
      </CommentRow>
      <CommentRowFiller></CommentRowFiller>
      <MaterialCommunityIconsIcon
        name="dots-vertical"
        style={{
          color: "grey",
          fontSize: 20,
          alignSelf: "flex-start",
          marginRight: 8,
          marginTop: 16,
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: row;
`;

const NotificationData = styled.div`
  height: 77px;
  align-self: center;
  flex-direction: column;
  display: flex;
  margin-left: 14px;
`;

const NotificationHeading = styled.span`
  font-family: IBM Plex Sans;
  color: #00000;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

const NotificationContent = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

const Time = styled.span`
  font-family: IBM Plex Sans;
  color: rgba(128,128,128,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 4px;
`;

const CommentRow = styled.div`
  height: 77px;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 14px;
  display: flex;
`;

const CommentRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

export default NotificationComponent;
