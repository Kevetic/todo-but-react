// Modal.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RenderList from "../RenderList/RenderList";
import InputField from "../InputField/InputField";

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

const ListContainer = styled.div`
  border-radius: 10px;
  background-color: rgba(74, 134, 231, 0.31);
  height: 600px;
  width: 550px;
  overflow: auto;
  padding: 5px;
`;

const Modal = () => {
  const [updateStorage, setUpdateStorage] = useState(
    localStorage.todos ? JSON.parse(localStorage.getItem("todos")) : []
  );
  const [updatedItems, setUpdatedItems] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setUpdatedItems([...updateStorage]);
  }, [updateStorage]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(updatedItems));
  }, [updatedItems]);

  return (
    <Container>
      <Header>Today's ToDo:</Header>
      <ListContainer>
        <RenderList
          updatedItems={updatedItems}
          setUpdatedItems={setUpdatedItems}
        />
      </ListContainer>
      <InputField
        userInput={userInput}
        setUserInput={setUserInput}
        updatedItems={updatedItems}
        setUpdatedItems={setUpdatedItems}
      />
    </Container>
  );
};

export default Modal;
