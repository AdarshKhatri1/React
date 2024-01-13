import React from "react";
import { ItoDoProps } from "./Todo";

const Todoitem = ({ id, title, status }: ItoDoProps) => {
  return (
    <div>
      <span>{id} </span>
      <span>{title} </span>
      <span>{status ? "True" : "False"}</span>
    </div>
  );
};

export default Todoitem;
