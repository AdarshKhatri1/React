import { render, screen, mockfn } from "@testing-library/react";
import Button from "./Button";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { createRenderer } from "react-dom/test-utils";

// `20 september live`
describe("testing the button component", () => {
  it("should be in dom tree", () => {
    render(<Button>click me</Button>);
    screen.debug();
    let button = screen.getByText("click me");

    expect(button).toBeInTheDocument();
  });

  //   it.skip("should hava a button with text Click me in the App.js", () => {
  //     render(<App />);
  //     screen.debug();
  //     let button = screen.getByTestId("btid");
  //     expect(button).toBeInTheDocument();
  //   });

  //   it.only("should check if the value present in the button or not", () => {
  //     render(<Button>Testing</Button>);
  //     screen.debug();
  //     let button = screen.getByTestId("btid");
  //     expect(button).toHaveTextContent("Testing");
  //   });

  it("should be  an empty dom element, without any children", () => {
    render(<Button></Button>);
    let button = screen.getByTestId("btid");
    expect(button).toBeEmptyDOMElement();
  });

  // #############kam ni kar raha hai 1:36:00
  it.skip("should toggled the theme when clicked on the button", () => {
    render(<App />);
    screen.debug();
    let h3tag = screen.getByText("Current theme is light");
    // let h3tag = screen.getByTestId("hid");
    expect(h3tag).toHaveTextContent("light");

    let bt = screen.getByTestId("btid");
    userEvent.click(bt);
    // screen.debug();

    expect(h3tag).toHaveTextContent("dark");
  });

  //not worked
  it.skip("Should invokde the onClick function", () => {
    render(<Button onClick={mockfn}>Checking onClick</Button>);

    let button = screen.getByTestId("btid");
    userEvent.click(button);
    expect(mockfn).toHaveBeenCalled(1);
  });

  // some more i haven't written
  // it.only("Should create/match the snapshot",()=>{

  //   const tree = createRenderer(<Button colorScheme="green" varaint = "ghost">CustomButton</Button>).
  // })
});
