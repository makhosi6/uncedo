import React from "react";
import Header from "../components/Header";

export default function Nav() {
  return (
    <div>
      <Header
        style={{
          boxShadow: "#0000004f 1px 7px 15px 0.1px",
        }}
        button="Settings"
      ></Header>{" "}
    </div>
  );
}
