import { useState } from "react";
import { Title } from "../UI/Title/Title";
import { Button } from "../UI/Button/Button";

export const ItemEight = () => {
  const [eight, setEight] = useState("All");
  const tasks = [
    "Task 1 NOT COMPLETED",
    "Task 2 COMPLETED",
    "Task 3 NOT COMPLETED",
    "Task 4 COMPLETED",
  ];

  const eightHandler = (type) => {
    setEight(type);
  };

  const filteredTasks = tasks.filter((task, index) => {
    if (eight === "All") return task;
    if (eight === "Even") return (index + 1) % 2 === 0;
    if (eight === "Odd") return (index + 1) % 2 !== 0;
    return;
  });

  const result = filteredTasks.map((task, index) => (
    <li key={index}>{task}</li>
  ));
  return (
    <div>
      <Title>Сегизинчи тапшырма</Title>
      <div className="btnBox">
        <Button onClick={() => eightHandler("All")}>All</Button>
        <Button onClick={() => eightHandler("Even")}>Completed</Button>
        <Button onClick={() => eightHandler("Odd")}>Uncompleted</Button>
      </div>
      <ul className={"list"}>{result}</ul>
    </div>
  );
};
