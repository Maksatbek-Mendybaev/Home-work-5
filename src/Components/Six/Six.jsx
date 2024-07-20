import { useState } from "react";
import { Title } from "../UI/Title/Title";
import { Button } from "../UI/Button/Button";

export const ItemSix = () => {
    const [six, setSix] = useState();
    const textHome = "HOME";
    const textAbout = "ABOUT";
    const textContact = "CONTACT";
    function sixHandler(type) {
      setSix(type);
    }
    return (
      <div>
        <Title>Алтынчы тапшырма</Title>
        <div className="btnBox">
          <Button onClick={() => sixHandler(textHome)}>{textHome}</Button>
          <Button onClick={() => sixHandler(textAbout)}>{textAbout}</Button>
          <Button onClick={() => sixHandler(textContact)}>{textContact}</Button>
        </div>
        <h2>{six}</h2>
      </div>
    );
}