import React from "react";

interface IButton_props {
  label: string;
  onClick: () => void;
}

const Button = (props: IButton_props) => {
  const { label, onClick } = props;
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
