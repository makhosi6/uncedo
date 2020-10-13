import React from "react";
import Header from "../components/Header";

export default function Nav() {
  return (
    <nav style={{
      backgroundColor: "rgba(31, 178, 204, 1)"
    }} >
      <Header
        button="Settings"
      ></Header>{" "}
    </nav>
  );
}
