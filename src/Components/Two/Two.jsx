import { useState } from "react";
import { Button } from "../UI/Button/Button";
import { Title } from "../UI/Title/Title";

export const ItemTwo = () => {
  const [two, setTwo] = useState(0);
  function plusHandler() {
    setTwo(two + 1);
  }
  function minusHandler() {
    setTwo(two - 1);
    }
    return (
      <div>
        <Title>Экинчи тапшырма</Title>
        <div className="btnBox">
          <Button onClick={plusHandler}>Increment</Button>
          <p className="counter">{two}</p>
          <Button onClick={minusHandler}>Decrement</Button>
        </div>
      </div>
    );
};
