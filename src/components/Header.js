import React from "react";
import styled from "styled-components";
import SettingsOptions  from "./utili/OptBtn";
import Menu from "./Menu";
import Speeddial from "./utili/Speaddial";
// import { Link } from "react-router-dom";

function HeaderX(props) {
  
  return (
    <Container {...props}>
      <Group>
        <IconRow>
          <IconRow>
              <Menu/>
          </IconRow>
        </IconRow>
        <IconRowFiller></IconRowFiller>
        <div
          style={{
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              maxWidth: "max-content",
              margin: "auto",
              color: "whitesmoke"
            }}
          >
            <h5>LOGO</h5>
          </div>
        </div>
        <IconRowFiller></IconRowFiller>
        {/* <Link to="/Settings"> */}
          <Button>
            <ButtonOverlay /* Conditional navigation not supported at the moment */
            >
              <SettingsOptions />
            </ButtonOverlay>
          </Button>
        {/* </Link> */}
      </Group>
      <Speeddial/>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  width: 100%;
  border: none;
`;
const Group = styled.div`
  height: 55px;
  background-color: rgba(31, 178, 204, 1);
  flex-direction: row;
  display: flex;
`;

const IconRow = styled.div`
  height: 44px;
  flex-direction: row;
  margin-left: 10px;
 
  display: flex;
`;

const IconRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Button = styled.div`
  width: 25px;
  height: 25px;
  flex-direction: column;
  display: flex;
  margin-right: 15px;
  margin-top: 15px;
  border: none;
`;

export default HeaderX;
