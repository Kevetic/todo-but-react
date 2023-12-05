import { useEffect } from "react";
import styled from "styled-components";

const InputStyles = styled.input`
  padding: 10px;
  width: 80%;
  border-radius: 10px;
  background: linear-gradient(
    252deg,
    rgba(42, 157, 186, 1) 41%,
    rgba(47, 185, 151, 1) 100%
  );
  &:focus {
    outline: none;
    box-border: 1px 1px 1px white;
  }
`;

const BtnStyles = styled.button`
  padding: 10px;
  background: linear-gradient(
    252deg,
    rgba(42, 157, 186, 1) 41%,
    rgba(47, 185, 151, 1) 100%
  );
  color: white;
  border-radius: 10px;
  outline: none;
`;

const Container = styled.div`
  display: flex;
  margin: 5px;
  width: 100%;
  justify-content: space-between;
`;

const InputField = ({
  userInput,
  setUserInput,
  updatedItems,
  setUpdatedItems,
}) => {
  const handleInput = (e) => {
    let value = e.toUpperCase();
    setUpdatedItems([value, ...updatedItems]);
  };

  return (
    <Container>
      <InputStyles onChange={(e) => setUserInput(e.target.value)} />
      <BtnStyles
        disabled={userInput.length === 0}
        onClick={() => {
          handleInput(userInput);
        }}
      >
        +
      </BtnStyles>
    </Container>
  );
};

export default InputField;
