import logo from "./logo.svg";
import "./App.css";
import Button from "./Component/Button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <h3 data-testid="hid"> Current theme is {theme}</h3>
      <Button
        data-testid="btid"
        colorScheme="green"
        variant="bordered"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          // if (theme === "light") {
          //   setTheme("dark");
          // } else {
          //   setTheme("light");
          // }
        }}
      >
        click me
      </Button>
    </div>
  );
}

export default App;
