import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import Pin from "./Pin";
import { useSelector } from "react-redux";

const Field2 = ({ length, setPin }) => {
  const [inputField, setInputField] = useState(new Array(length).fill(""));
  // console.log(length)

  const iref = useRef([]);
  //   console.log(ref);

  const handleChange = (e, index) => {
    // console.log(e, index);
    inputField[index] = e.target.value;
    if (index < length - 1) {
      iref.current[index + 1].focus();
    }
    setPin(inputField.join(""));
    // console.log(inputField);
  };

  const backSpaceHandler = (e, index) => {
    // console.log("bs");
    inputField[index] = e.target.value;

    if (index > 0) iref.current[index - 1].focus();

    console.log(inputField);
  };

  useEffect(() => {
    iref.current[0].focus();
  }, []);

  return (
    <div>
      {/* {console.log(iref)} */}

      {inputField.map((d, index) => {
        return (
          <Pin
            key={index}
            ref={(e) => {
              //   console.log(e);
              return (iref.current[index] = e);
            }}
            handleChange={(e) => {
              handleChange(e, index);
            }}
            backSpaceHandler={(e) => backSpaceHandler(e, index)}
          />
        );
      })}
    </div>
  );
};
export default Field2;

Field2.propTypes = {
  length: propTypes.number.isRequired,
};
