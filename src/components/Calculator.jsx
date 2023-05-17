import React, { useState } from "react";
import "../components/Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const Calculator = () => {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNumber(e) {
        let input = e.target.value;
        if(num === 0) {
            setNum(input);
        }else{
            setNum(num + input);
        }
        
    }

    function clear() {
        setNum(0);
    }

    function porcentage() {
        setNum(num/100)
    }

    function changeSign() {
        if(num > 0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value
        setOperator(operatorInput);
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        if(operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num))
        }else if(operator === "x") {
            setNum(parseFloat(oldNum) * parseFloat(num))
        }else if(operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num))
        }else if(operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
    }

  return (
    <div>
        <Box m={5}/>
      <div style={{ marginTop: "2em" }}></div>
      <Container maxWidth="sm">
        <div className="wrapper">
            <Box m={8}/>
            <h1 className="result">{num}</h1>
            <button onClick={clear} className="button-ac">AC</button>
            <button onClick={changeSign} className="button-ac">+/-</button>
            <button onClick={porcentage} className="button-ac">%</button>
            <button className="orange" onClick={operatorHandler} value="/">/</button>
            <button onClick={inputNumber} value={7}>7</button>
            <button onClick={inputNumber} value={8}>8</button>
            <button onClick={inputNumber} value={9}>9</button>
            <button className="orange" onClick={operatorHandler} value="x">x</button>
            <button onClick={inputNumber} value={4}>4</button>
            <button onClick={inputNumber} value={5}>5</button>
            <button onClick={inputNumber} value={6}>6</button>
            <button className="orange" onClick={operatorHandler} value="-">-</button>
            <button onClick={inputNumber} value={1}>1</button>
            <button onClick={inputNumber} value={2}>2</button>
            <button onClick={inputNumber} value={3}>3</button>
            <button className="orange" onClick={operatorHandler} value="+">+</button>
            <button onClick={inputNumber} value={0} className="zero">0</button>
            <button onClick={inputNumber} value={"."}>,</button>
            <button onClick={calculate} className="orange">=</button>
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
