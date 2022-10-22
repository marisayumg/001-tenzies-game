import React from "react";
import styled from "styled-components";
import Die from "./Die";

export default function Game() {
  const [dice, setDice] = React.useState(allNewDice);

  // get 10 random numbers and push them to the array
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice);
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <Container>
      <ContainerDice>{diceElements}</ContainerDice>
      <RollButton onClick={rollDice}>Roll</RollButton>
    </Container>
  );
}

const Container = styled.div``;

const ContainerDice = styled.div`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  padding: 24px;
  gap: 24px;
`;

const RollButton = styled.button`
  border: none;
  background: blue;
  color: white;
  padding: 16px 40px;
  cursor: pointer;
`;
