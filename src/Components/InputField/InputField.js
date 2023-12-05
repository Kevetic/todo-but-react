import { useEffect } from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const InputStyles = styled.input`
  padding: 10px;
  width: 85%;
  border-radius: 10px;
  background: rgba(74, 134, 231, 0.31);
  &:focus {
    outline: none;
    box-border: 1px 1px 1px white;
  }
  color: white;
  font-size: 1.3rem;
`;

const BtnStyles = styled.button`
  background: rgba(74, 134, 231, 0.31);
  color: white;
  border-radius: 10px;
  outline: none;
  width: 10%;
  &:disabled {
    opacity: 0.5;
    color: grey;
  }
  justify-content: center;
  align-items: center;
  display: flex;
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
  const handleAdd = async (e) => {
    let value = e.toUpperCase();
    await setUpdatedItems([value, ...updatedItems]);
    await setUserInput("");
  };

  const handleInputField = (e) => {
    setUserInput(e);
  };

  return (
    <Container>
      <InputStyles
        value={userInput}
        onChange={(e) => handleInputField(e.target.value)}
      />
      <BtnStyles
        disabled={!userInput}
        onClick={() => {
          handleAdd(userInput);
        }}
      >
        <AddCircleOutlineIcon fontSize="large" />
      </BtnStyles>
    </Container>
  );
};

export default InputField;
