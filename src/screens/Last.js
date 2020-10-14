import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Btn from "../components/utili/Btn";
function Feedback(props) {
  return (
    <>
      <Nav />
      <Root>
        <Body>
          <Background>
            <Rect7>
              <FeedbackBox>
                <Text4Column>
                  <Text42>Emergency Request Sent.</Text42>
                  <Text4>{`Please stay Calm! \n\n Help will reach out to you soon`}</Text4>
                  <Text4></Text4>
                </Text4Column>
                <Text4ColumnFiller></Text4ColumnFiller>
              </FeedbackBox>
            </Rect7>
          </Background>
          <Rect34>
      
          </Rect34>
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
  margin-bottom: 1px;
`;

const Background = styled.div`
  height: 330px;
  flex-direction: column;
  display: flex;
`;

const Rect7 = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(31, 178, 204, 1) 100%
  );
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;
const Rect34 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const FeedbackBox = styled.div`
  height: 330px;
  flex-direction: column;
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
  align-self: center;
`;

const Form = styled.div`
  height: 112px;
  flex-direction: column;
  display: flex;
  margin-top: 20px;
`;

const Name = styled.div`
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput2 = styled.input`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  height: 30px;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const NameFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Email = styled.div`
  height: 50px;
  background-color: rgba(251, 247, 247, 0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput3 = styled.input`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  height: 30px;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 19px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Text4Column = styled.div`
  flex-direction: column;
  margin-top: 39px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
`;

const Text4ColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect8 = styled.div`
  border-color: rgba(255, 255, 255, 1);
  border-width: 0px;
  border-bottom-width: 1px;
  height: 49px;
  flex-direction: column;
  display: flex;
  margin-bottom: 29px;
  margin-left: 40px;
  margin-right: 28px;
  border-style: solid;
`;

const TextInput4 = styled.textarea`
  width: 300px;
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  top: 0px;
  left: 0px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-size: 12px;
  border: none;
  background: transparent;
`;

const TextInput4Stack = styled.div`
  flex: 1 1 0%;
  margin-bottom: 1px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Map = styled.div`
  flex: 1 1 0%;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
`;

export default Feedback;
