import { useState } from "react";
import { Title } from "../UI/Title/Title";
import { Input } from "../UI/Input/Input";

export const ItemThree = ({ onStyleChange }) => {
  const [three, setThree] = useState(false);

  const checkboxHandler = () => {
    const newThree = !three;
    setThree(newThree);
    onStyleChange(newThree);
  };
  return (
    <div>
      <Title>Учунчу тапшырма</Title>
      <div>
        <Input onChange={checkboxHandler} />
      </div>
    </div>
  );
};
