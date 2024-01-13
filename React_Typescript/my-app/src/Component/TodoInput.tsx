import React, { useState } from "react";

interface ITodoinputprops {
  handleAdd: (title: string) => void;
}

const TodoInput = ({ handleAdd }: ITodoinputprops) => {
  const [text, setText] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleButton = () => {
    handleAdd(text);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleButton}>Add</button>
    </div>
  );
};

export default TodoInput;
