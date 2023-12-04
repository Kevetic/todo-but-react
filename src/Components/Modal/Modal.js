import * as React from "react";
import styled from "styled-components";
import RenderList from "../RenderList/RenderList";
import InputField from "../InputField/InputField";
import { useState, useEffect } from "react";

const ListContainer = styled.div`
  border-radius: 10px;
  background: linear-gradient(
    252deg,
    rgba(42, 157, 186, 1) 41%,
    rgba(47, 185, 151, 1) 100%
  );
  height: 500px;
  width: 500px;
  overflow: auto;
`;

const Container = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 20%;
  left: 40%;
`;

const Header = styled.h1`
  margin: auto;
  text-align: center;
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Modal = () => {
  const [updatedItems, setUpdatedItems] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([{}]);
  console.log("this is data:", data);

  async function getData() {
    const response = await fetch("/api");
    const listitems = await response.json();
    setData(listitems.todoList);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Header>Today's ToDo:</Header>
      <ListContainer>
        <RenderList updatedItems={updatedItems} userInput={userInput} />
      </ListContainer>
      <InputContainer>
        <InputField
          data={data}
          userInput={userInput}
          setUserInput={setUserInput}
          updatedItems={updatedItems}
          setUpdatedItems={setUpdatedItems}
        />
      </InputContainer>
    </Container>
  );
};

export default Modal;
