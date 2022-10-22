import React from "react";
import styled from "styled-components";

export default function Die(props) {
  return (
    <DieFace>
      <h2>{props.value}</h2>
    </DieFace>
  );
}

const DieFace = styled.div`
  background: white;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;
