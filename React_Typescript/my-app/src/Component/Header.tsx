import React from "react";

interface IHeaderProps {
  label: string;
}

const Header = ({ label }: IHeaderProps) => {
  //   console.log(label, typeof label);
  return <div>{label}</div>;
};

export default Header;
