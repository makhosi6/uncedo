import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

function Channels(props) {
  return (
    <>
<Nav/>
    <Root>
      <Body>
      <ScrollArea>
        <Categories>
          <Button2Row>
            <Button2>
              <ButtonOverlay>
                <Image>
                  <Rect8>
                    <Text22>SCIENCE</Text22>
                  </Rect8>
                </Image>
              </ButtonOverlay>
            </Button2>
            <Button3>
              <ButtonOverlay>
                <Image2>
                  <Rect82>
                    <Text23>TECHNOLOGY</Text23>
                  </Rect82>
                </Image2>
              </ButtonOverlay>
            </Button3>
          </Button2Row>
          <Button2Row>
            <Button2>
              <ButtonOverlay>
                <Image>
                  <Rect8>
                    <Text22>SCIENCE</Text22>
                  </Rect8>
                </Image>
              </ButtonOverlay>
            </Button2>
            <Button3>
              <ButtonOverlay>
                <Image2>
                  <Rect82>
                    <Text23>TECHNOLOGY</Text23>
                  </Rect82>
                </Image2>
              </ButtonOverlay>
            </Button3>
          </Button2Row>
          <Button2Row>
            <Button2>
              <ButtonOverlay>
                <Image>
                  <Rect8>
                    <Text22>SCIENCE</Text22>
                  </Rect8>
                </Image>
              </ButtonOverlay>
            </Button2>
            <Button3>
              <ButtonOverlay>
                <Image2>
                  <Rect82>
                    <Text23>TECHNOLOGY</Text23>
                  </Rect82>
                </Image2>
              </ButtonOverlay>
            </Button3>
          </Button2Row>
          <Button4Row>
            <Button4>
              <ButtonOverlay>
                <Image3>
                  <Rect83>
                    <Text24>FASHION</Text24>
                  </Rect83>
                </Image3>
              </ButtonOverlay>
            </Button4>
            <Button5>
              <ButtonOverlay>
                <Image4>
                  <Rect84>
                    <Text25>FINANCE</Text25>
                  </Rect84>
                </Image4>
              </ButtonOverlay>
            </Button5>
          </Button4Row>
          <Button7Row>
            <Button7>
              <ButtonOverlay>
                <Image22>
                  <Rect85>
                    <Text26>ENVIRONMENT</Text26>
                  </Rect85>
                </Image22>
              </ButtonOverlay>
            </Button7>
            <Button6>
              <ButtonOverlay>
                <Image32>
                  <Rect86>
                    <Text27>AUTO</Text27>
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
  background-color: rgb(255,255,255);
  flex-direction: column;
  margin: auto;
  max-width: 1000px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
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
  background-color: rgba(255,255,255,1);
  flex: 1 1 0%;
  align-self: stretch;
  flex-direction: column;
  display: flex;
`;

const Button2 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/astronaut-astronomy-cosmos-2156.jpg")});
  background-size: cover;
`;

const Rect8 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-bottom: 1px;
`;

const Text22 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  align-self: center;
`;

const Button3 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image2 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/chips-circuit-circuit-board-343457.jpg")});
  background-size: cover;
`;

const Rect82 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text23 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
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
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image3 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/accessories-accessory-boots-322207.jpg")});
  background-size: cover;
`;

const Rect83 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-bottom: 1px;
`;

const Text24 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  align-self: center;
`;

const Button5 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image4 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/cash-cent-child-1246954.jpg")});
  background-size: cover;
`;

const Rect84 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 1px;
`;

const Text25 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
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
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image22 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: -1px;
  margin-top: 1px;
  height: 100%;
  background-image: url(${require("../assets/images/conifers-daylight-environment-1666021.jpg")});
  background-size: cover;
`;

const Rect85 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 2px;
`;

const Text26 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  margin-top: 7px;
  align-self: center;
`;

const Button6 = styled.div`
  width: 571px;
  height: 158px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image32 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: -1px;
  margin-top: 1px;
  height: 100%;
  background-image: url(${require("../assets/images/architecture-audi-automotive-1545743.jpg")});
  background-size: cover;
`;

const Rect86 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 1px;
`;

const Text27 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
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
