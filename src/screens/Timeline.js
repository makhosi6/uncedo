import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import Nav from "../components/Nav";

function Timeline(props) {
  return (
    <>
   <Nav/>
    <Root>
      <Body>
        <Headline className="hero" >
          <Image>
            <Overlay>
            <Text4Column>
                  <Text42>Gender and domestic abuse</Text42>
                  <Text4></Text4>
                </Text4Column>
              <Followers></Followers>
            </Overlay>
          </Image>
        </Headline>
        <ScrollArea>
        <Article />
        <Article/>
        <Article />
        <Article/>
        <Article />
        <Article/>
        <Article />
        <Article/>
        <Article />
        <Article/>
        <Article />
        <Article/>
        <Article />
        <Article/>
        <Article />
        <Article/>
        </ScrollArea>
      </Body>
    </Root>
    </>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Body = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Headline = styled.div`
  height: 246px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
`;

const Image = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/astronaut-astronomy-cosmos-21561.jpg")});
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: rgba(30, 26, 26, 0.4);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Following = styled.div`
  width: 90px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: 103px;
  align-self: center;
`;

const Text = styled.span`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  color: rgba(31, 178, 204, 1);
  font-size: 14px;
  font-weight: bold;
  align-self: center;
`;

const Followers = styled.span`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: bold;
  margin-top: 39px;
  align-self: center;
`;

const ScrollArea = styled.div`
  overflow-y: scroll; 
  top: 312px;
  left: 0px;
  background-color: #fffff
  position: absolute;
  flex-direction: column;
  right: 0px;
  bottom: -42px;
  justify-content: flex-start;
  display: flex;
`;
const Text4Column = styled.div`
  flex-direction: column;
  margin-top: 39px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
`;

const Text4 = styled.span`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  margin: 10px auto;
`;

const Text42 = styled.span`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  margin-top: 9px;
  text-align: center !important;
  align-self: center;
`;
export default Timeline;
