import { useState } from "react";
import { Title } from "../UI/Title/Title";
import { Button } from "../UI/Button/Button";

export const ItemFive = () => {
  const [rotate, setRotate] = useState();
  function rotateHandler() {
    setRotate((start) => !start);
  }
  const rotateApp = <div className="loader"></div>;
  return (
    <div>
      <Title>Бешинчи тапшырма</Title>
      <div>
        <Button onClick={rotateHandler}>START</Button>
      </div>
      <div onClick={rotateHandler}>{rotate && rotateApp}</div>
    </div>
  );
};
