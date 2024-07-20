import { useState } from "react";
import { ItemOne } from "./Components/One/One";
import { ItemThree } from "./Components/Three/Three";
import { ItemTwo } from "./Components/Two/Two";
import { ItemFour } from "./Components/Four/Four";
import { ItemFive } from "./Components/Five/Five";
import { ItemSix } from "./Components/Six/Six";
import { ItemSeven } from "./Components/Seven/Seven";
import { ItemEight } from "./Components/Eight/Eight";

function App() {
  const [dark, setDark] = useState(false);

  const styleHandler = (newThree) => {
    setDark(newThree);
    document.body.className = dark ? "" : "dark";
  };

  return (
    <div>
      <section>
        <ItemOne />
      </section>
      <section>
        <ItemTwo />
      </section>
      <section>
        <ItemThree onStyleChange={styleHandler} />
      </section>
      <section>
        <ItemFour />
      </section>
      <section>
        <ItemFive />
      </section>
      <section>
        <ItemSix />
      </section>
      <section>
        <ItemSeven />
      </section>
      <section>
        <ItemEight />
      </section>
    </div>
  );
}

export default App;
