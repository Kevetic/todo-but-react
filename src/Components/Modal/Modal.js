import * as React from "react";
import styled from "styled-components";
import RenderList from "../RenderList/RenderList";
import InputField from "../InputField/InputField";

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
  top: 30%;
  left: 40%;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Modal = () => {
  return (
    <Container>
      <ListContainer>
        <RenderList />
      </ListContainer>
      <InputContainer>
        <InputField />
      </InputContainer>
    </Container>
  );
};

export default Modal;
