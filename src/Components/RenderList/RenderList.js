import * as React from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";

const ListUL = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItems = styled.div`
  display: flex;
  width: 92%;
  justify-content: space-between;
  margin: 2px;
  list-style: none;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(74, 134, 231, 0.31);
  color: white;
`;

const ListBtn = styled.button`
  background: transparent;
  border: none;
`;

const RenderList = ({ updatedItems, setUpdatedItems }) => {
  const handleComplete = (e) => {
    let filter = updatedItems.filter((x, idx) => {
      if (e !== idx) {
        return x;
      }
    });

    setUpdatedItems([...filter]);
  };

  return (
    <>
      <ListUL>
        {updatedItems.map((x, index) => {
          return (
            <ListItems key={index}>
              <li>{x}</li>
              <>
                <ListBtn index={index} onClick={() => handleComplete(index)}>
                  <CheckIcon />
                </ListBtn>
              </>
            </ListItems>
          );
        })}
      </ListUL>
    </>
  );
};

export default RenderList;
