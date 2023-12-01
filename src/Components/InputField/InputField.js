import * as React from "react";
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
`;

const BtnStyles = styled.button`
  padding: 10px;
  background: linear-gradient(
    252deg,
    rgba(42, 157, 186, 1) 41%,
    rgba(47, 185, 151, 1) 100%
  );
  color: white;
  box-shadow: 1px 1px 1px white;
  border-radius: 10px;
`;

const InputField = () => {
  return (
    <>
      <InputStyles />
      <BtnStyles>TEST</BtnStyles>
    </>
  );
};

export default InputField;
