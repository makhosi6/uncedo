import React from "react";
import styled from "styled-components";
import { ListIcon, SettingsIcon } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

function HeaderX(props) {
  console.log({ ListIcon });
  return (
    <Container {...props}>
      <Group>
        <IconRow>
          <ListIcon
            style={{ color: "white", marginTop: "10px", fontSize: "28px" }}
          />
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
        <Link to="/Settings">
          <Button>
            <ButtonOverlay /* Conditional navigation not supported at the moment */
            >
              <SettingsIcon style={{ color: "white", fontSize: "25px" }} />
            </ButtonOverlay>
          </Button>
        </Link>
      </Group>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(31, 178, 204, 1);
  flex-direction: column;
  padding: 0 20px;
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
  margin-top: 6px;
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
  margin-right: 30px;
  margin-top: 15px;
  border: none;
`;

export default HeaderX;
