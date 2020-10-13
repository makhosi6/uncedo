import React from "react";
import styled from "styled-components";
import SettingsOptions  from "./utili/OptBtn";
import Menu from "./Drawer";
import Speeddial from "./utili/Speaddial";
import { Link } from "@material-ui/core";
import { ContactIcon } from "@fluentui/react-icons";
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
                <Link href="/">
                  <h5>
                    LOGO
                    </h5>
                </Link>
          </div>
        </div>
        <IconRowFiller></IconRowFiller>
      
          <Button>
            <ButtonOverlay /* Conditional navigation not supported at the moment */
            >
              <SettingsOptions />
            </ButtonOverlay>
          </Button>
     
      </Group>
      <Speeddial/>
    </Container>
  );
}

const Container = styled.div`
padding: 0 10px;
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
  margin: 15px 30px;
  border: none;
`;
const Button23 = styled.div`
  width: 25px;
  height: 25px;
  flex-direction: column;
  display: flex;
  margin: 15px 10% 15px 0;
  border: none;
`;

export default HeaderX;
