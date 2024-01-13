import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const [count, setCount] = useState<number>(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };
  return (
    <div>
      <Header label="Counter" />
      <Header label={`${count}`} />
      <Button
        label="Add"
        onClick={() => {
          handleClick(1);
        }}
      />
      <Button
        label="Reduce"
        onClick={() => {
          handleClick(-1);
        }}
      />
    </div>
  );
};

export default Counter;
