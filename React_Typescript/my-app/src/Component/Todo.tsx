import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import Todoitem from "./Todoitem";
import axios, { AxiosResponse } from "axios";

export interface ItoDoProps {
  id: number;
  title: string;
  status: boolean;
}
const Todo = () => {
  const [todo, setTodo] = useState<ItoDoProps[]>([]);

  const handleAdd = (title: string) => {
    const payload = {
      title: title,
      status: false,
    };
    // setTodo([...todo, payload]);

    axios.post("http://localhost:8080/todo", payload).then(getTodo);
  };

  const getTodo = () => {
    axios("http://localhost:8080/todo")
      // 1st way
      // .then((res) => {
      //   setTodo(res.data);
      // });
      //   2nd way
      //   .then(({ data }: { data: ItoDoProps[] }) => {
      //     setTodo(data);
      //   });

      // 3rd way
      .then((res: AxiosResponse<ItoDoProps[]>) => {
        setTodo(res.data);
      });
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <Header label="To Do" />
      <TodoInput handleAdd={handleAdd} />

      {todo.length > 0 &&
        todo.map((item) => {
          return <Todoitem key={item.id} {...item} />;
        })}
    </div>
  );
};

export default Todo;
