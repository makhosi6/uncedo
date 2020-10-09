import React from 'react';
import Divider from "./Divider";
import NotificationComponent from "./NotificationComponent";

export default function Strip() {
    return (
        <div>
            <NotificationComponent
          style={{
            height: 110,
            alignSelf: "stretch",
            flex: "0 0 auto"
          }}
        ></NotificationComponent>
        <Divider
          style={{
            height: 1,
            alignSelf: "stretch",
            flex: "0 0 auto"
          }}
        ></Divider>
        </div>
    )
}
