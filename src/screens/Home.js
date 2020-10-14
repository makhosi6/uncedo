import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function Channels(props) {
  return (
    <>
      <Nav />
      <Root>
        <Body>
          <ScrollArea>
            <Categories>
              <Button2Row>
                <Button2>
                  <ButtonOverlay>
                    <Image href="/topic?id=34r2345122">
                      <Rect8>
                        <Text22>Domestic Abuse: How to respond?</Text22>
                      </Rect8>
                    </Image>
                  </ButtonOverlay>
                </Button2>
                <Button3>
                  <ButtonOverlay>
                    <Image2 href="/topic?id=34r2345122">
                      <Rect82>
                        <Text23>What is Domestic Abuse?</Text23>
                      </Rect82>
                    </Image2>
                  </ButtonOverlay>
                </Button3>
              </Button2Row>
              <Button4Row>
                <Button4>
                  <ButtonOverlay>
                    <Image3 href="/topic?id=34r2345122">
                      <Rect83>
                        <Text24>Support Organizations</Text24>
                      </Rect83>
                    </Image3>
                  </ButtonOverlay>
                </Button4>
                <Button5>
                  <ButtonOverlay>
                    <Image4 href="/topic?id=34r2345122">
                      <Rect84>
                        <Text25>Know Your Legal Rights</Text25>
                      </Rect84>
                    </Image4>
                  </ButtonOverlay>
                </Button5>
              </Button4Row>
              <Button7Row>
                <Button7>
                  <ButtonOverlay>
                    <Image22 href="/topic?id=34r2345122">
                      <Rect85>
                        <Text26>Safety Planning</Text26>
                      </Rect85>
                    </Image22>
                  </ButtonOverlay>
                </Button7>
                <Button6>
                  <ButtonOverlay>
                    <Image32 href="/topic?id=34r2345122">
                      <Rect86>
                        <Text27>Digital Safety</Text27>
                      </Rect86>
                    </Image32>
                  </ButtonOverlay>
                </Button6>
              </Button7Row>
              <Button7Row>
                <Button7>
                  <ButtonOverlay>
                    <Image2 href="/topic?id=34r2345122">
                      <Rect85>
                        <Text26>Safety Planning</Text26>
                      </Rect85>
                    </Image2>
                  </ButtonOverlay>
                </Button7>
                <Button6>
                  <ButtonOverlay>
                    <Image32 href="/topic?id=34r2345122">
                      <Rect86>
                        <Text26>Frequently Asked Questions</Text26>
                      </Rect86>
                    </Image32>
                  </ButtonOverlay>
                </Button6>
              </Button7Row>
            </Categories>
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
  margin: auto;
  max-width: 1000px;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border: none;
`;

const Body = styled.div`
  flex-direction: column;
  display: flex;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  top: 60px;
  margin: auto;
  max-width: 1000px;
  left: 0px;
  background-color: #fffff
  position: absolute;
  right: 0px;
  bottom: 0px;

`;

const Categories = styled.div`
  background-color: rgba(255, 255, 255, 1);
  flex: 1 1 0%;
  align-self: stretch;
  flex-direction: column;
  display: flex;
`;

const Button2 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230, 1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image = styled.a`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url("https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41407-019-0103-9/MediaObjects/41407_2019_103_Fig1_HTML.jpg");
  background-size: cover;
`;

const Rect8 = styled.div`
  height: 27px;
  background-color: rgba(21, 19, 19, 0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-bottom: 1px;
`;

const Text22 = styled.span`
  font-family: System;
  color: rgba(247, 252, 253, 1);
  font-size: 14px;
  align-self: center;
`;

const Button3 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230, 1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image2 = styled.a`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbUUZoTC9hYStTaiNhlFeJKp6UPmTSZ4uiFA&usqp=CAU");
  background-size: cover;
`;

const Rect82 = styled.div`
  height: 27px;
  background-color: rgba(21, 19, 19, 0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text23 = styled.span`
  font-family: System;
  color: rgba(247, 252, 253, 1);
  font-size: 14px;
  align-self: center;
`;

const Button2Row = styled.div`
  justify-content: center;
  height: 158px;
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Button4 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230, 1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image3 = styled.a`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk07D_sKeHsW7rEF_k_7CQ81hrPIJj11rYKQ&usqp=CAU");
  background-size: cover;
`;

const Rect83 = styled.div`
  height: 27px;
  background-color: rgba(21, 19, 19, 0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-bottom: 1px;
`;

const Text24 = styled.span`
  font-family: System;
  color: rgba(247, 252, 253, 1);
  font-size: 14px;
  align-self: center;
`;

const Button5 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230, 1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image4 = styled.a`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkY29vVIzYyd1ufnetHvnPZt3P5b1l0wzHMw&usqp=CAU");
  background-size: cover;
`;

const Rect84 = styled.div`
  height: 27px;
  background-color: rgba(21, 19, 19, 0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 1px;
`;

const Text25 = styled.span`
  font-family: System;
  color: rgba(247, 252, 253, 1);
  font-size: 14px;
  margin-top: 7px;
  align-self: center;
`;

const Button4Row = styled.div`
  justify-content: center;
  height: 158px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Button7 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230, 1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image22 = styled.a`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: -1px;
  margin-top: 1px;
  height: 100%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQovHg6HNWyBt73iAW320gK477I_-pM48UsrQ&usqp=CAU");
  background-size: cover;
`;

const Rect85 = styled.div`
  height: 27px;
  background-color: rgba(21, 19, 19, 0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 2px;
`;

const Text26 = styled.span`
  font-family: System;
  color: rgba(247, 252, 253, 1);
  font-size: 14px;
  margin-top: 7px;
  align-self: center;
`;

const Button6 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230, 1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image32 = styled.a`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: -1px;
  margin-top: 1px;
  height: 100%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtWciLBWgGpInuksES0ZdbeZVpbROTPhjUbw&usqp=CAU");
  background-size: cover;
`;

const Rect86 = styled.div`
  height: 27px;
  background-color: rgba(21, 19, 19, 0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 1px;
`;

const Text27 = styled.span`
  font-family: System;
  color: rgba(247, 252, 253, 1);
  font-size: 14px;
  margin-top: 6px;
  align-self: center;
`;

const Button7Row = styled.div`
  justify-content: center;
  height: 158px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-bottom: 30px;
  margin-left: 15px;
  margin-right: 14px;
`;

export default Channels;
