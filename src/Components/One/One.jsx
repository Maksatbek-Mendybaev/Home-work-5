import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import { Title } from "../UI/Title/Title";

export const ItemOne = () => {
  const [one, setOne] = useState();
  const btnText = one ? "Open" : "Close";

  const handleClick = () => {
    setOne((prev) => !prev);
  };
  return (
    <div>
      <Title>Биринчи тапшырма</Title>
      <Button onClick={handleClick}>{btnText}</Button>
    </div>
  );
};
