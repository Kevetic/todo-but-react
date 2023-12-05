import * as React from "react";
import styled from "styled-components";

const randomBgColor = () => {
  var firstGradient = Math.floor(Math.random() * 100);
  var secondGradient = Math.floor(Math.random() * 100);
  var deg = Math.floor(Math.random() * -240);
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgba(" + x + "," + y + "," + z + "," + 1 + ")";
  let gradientbg =
    "linear-gradient(" +
    deg +
    "deg, " +
    bgColor +
    " " +
    firstGradient +
    "%, " +
    bgColor +
    " " +
    secondGradient +
    "%)";

  return gradientbg;
};

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
  border-radius: 10px;S
`;

const RenderList = ({ updatedItems, setUpdatedItems }) => {
  const handleDelete = (e, updatedItems) => {
    let filter = updatedItems.filter((x, idx) => {
      if (e.target.id != idx) {
        return x;
      }
    });

    setUpdatedItems([...filter]);
  };

  return (
    <>
      <ListUL>
        {updatedItems.map((x, i) => {
          return (
            <ListItems key={i} style={{ background: `${randomBgColor()}` }}>
              <li>{x}</li>
              <div>
                <button id={i} onClick={(e) => handleDelete(e, updatedItems)}>
                  X
                </button>
              </div>
            </ListItems>
          );
        })}
      </ListUL>
    </>
  );
};

export default RenderList;
