import * as React from "react";
import styled from "styled-components";

const ListUL = styled.div`
  margin: auto;
  text-align: center;
  top: 10%;
`;

const RenderList = ({ updatedItems }) => {
  return (
    <>
      <ListUL>
        {/* {updatedItems.map((x) => {
          return <li>{x}</li>;
        })} */}
      </ListUL>
    </>
  );
};

export default RenderList;
