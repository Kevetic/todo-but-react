import * as React from "react";
import styled from "styled-components";

const Header = styled.h1`
  margin: auto;
  text-align: center;
  position: fixed;
`;

const ListUL = styled.div`
  margin: auto;
  text-align: center;
  position: relative;
  top: 10%;
`;

const RenderList = () => {
  return (
    <>
      <Header>Today's ToDo</Header>
      <ListUL>
        <li>TEST</li>
        <li>TEST</li>
        <li>TEST</li>
        <li>TEST</li>
        <li>TEST</li>
        <li>TEST</li>
        <li>TEST</li>
        <li>TEST</li>
      </ListUL>
    </>
  );
};

export default RenderList;
