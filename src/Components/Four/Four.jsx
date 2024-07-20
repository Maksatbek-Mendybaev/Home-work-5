import { useState } from "react";
import { Title } from "../UI/Title/Title";
import { Button } from "../UI/Button/Button";

export const ItemFour = () => {
    const [text, setText] = useState("");
    function textHandler() {
      setText((prev) => !prev);
    }
    const btnText2 = text ? "Close" : "Open";
    const textUpps = <h2>Upps!</h2>;
    return (
        <div>
            <Title>Тортунчу тапшырма</Title>
        <div>
          <Button onClick={textHandler}>{btnText2}</Button>
        </div>
        <div onClick={textHandler}>{text && textUpps}</div>
      </div>
    );
}