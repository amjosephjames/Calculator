import React, { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };
  return (
    <Container>
      <Card>
        <Display>
          <DisplayHold>
            <Unknown></Unknown>
            <Span>{result}</Span>
            {calc || 0}
          </DisplayHold>
        </Display>
        <Operators>
          <OperatorsHold>
            <Buttoned onClick={() => updateCalc("/")}>/</Buttoned>
            <Buttoned onClick={() => updateCalc("*")}> x</Buttoned>
            <Buttoned onClick={() => updateCalc("-")}>-</Buttoned>
            <Buttoned onClick={() => updateCalc("+")}>+</Buttoned>
            <Buttoned onClick={deleteLast}>DEL</Buttoned>
          </OperatorsHold>
        </Operators>
        <Digits>
          <Digitshold>
            {createDigits()}
            <Button onClick={() => updateCalc("0")}>0</Button>
            <Button onClick={() => updateCalc(".")}>.</Button>
            <Button onClick={calculate}>=</Button>
          </Digitshold>
        </Digits>
      </Card>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Card = styled.div`
  background-color: darkblue;
  width: 350px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Display = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
`;
const DisplayHold = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Unknown = styled.div`
  width: 0px;
  height: 0px;
`;
const Span = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;
const Operators = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
`;
const OperatorsHold = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Buttoned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  color: black;
  font-size: 15px;
`;
const Digits = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
`;
const Digitshold = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  button {
    margin-left: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    color: black;
    font-size: 20px;
  }
`;
const Button = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  color: black;
  font-size: 15px;
`;
