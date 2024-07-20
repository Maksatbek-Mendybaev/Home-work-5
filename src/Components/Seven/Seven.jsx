import { useState } from "react";
import { Title } from "../UI/Title/Title";

export const ItemSeven = () => {
  const [seven, setSeven] = useState();
  function sevenHandler(prev) {
    setSeven(prev);
  }
  return (
    <div>
      <Title>Жетинчи тапшырма</Title>
      <div>
        <ul>
          <li onClick={() => sevenHandler("Item 1")}>Item 1</li>
          <li onClick={() => sevenHandler("Item 2")}>Item 2</li>
          <li onClick={() => sevenHandler("Item 3")}>Item 3</li>
          <li onClick={() => sevenHandler("Item 4")}>Item 4</li>
          <li onClick={() => sevenHandler("Item 5")}>Item 5</li>
        </ul>
      </div>
      <p className="select">
        You selected: <span>{seven}</span>
      </p>
    </div>
  );
};
