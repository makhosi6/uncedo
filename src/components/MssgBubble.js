import React from "react";
import { MessageBox } from "react-chat-elements";

export default function MssgBubble(props) {
  return (
    <div>
      <MessageBox
        position={props.side}
        type={"photo"}
        text={"react.svg"}
        data={{
          uri: "https://facebook.github.io/react/img/logo.svg",
          status: {
            click: false,
            loading: 0,
          },
        }}
      />
    </div>
  );
}
