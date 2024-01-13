import propTypes from "prop-types";
import { useEffect, useRef } from "react";

const Field = ({ length }) => {
  // console.log(length)

  const iref = useRef([]);
  //   console.log(ref);

  const handleChange = (e, index) => {
    // console.log(e, index);
    if (index < length - 1) {
      iref.current[index + 1].focus();
    }
  };

  useEffect(() => {
    iref.current[0].focus();
  }, []);

  const handlekeyup = (e, index) => {
    console.log(e, "keyupd");
    if (index > 0) {
      iref.current[index - 1].focus();
    }
  };

  return (
    <div>
      {/* {console.log(iref)} */}
      {new Array(length).fill(0).map((d, index) => {
        return (
          <input
            style={{
              width: "50px",
              height: "50px",
              fontWeight: "bold",
              fontSize: "50px",
              textAlign: "center",
            }}
            key={index}
            maxLength={1}
            ref={(e) => {
              //   console.log(e);
              return (iref.current[index] = e);
            }}
            onChange={(e) => {
              handleChange(e, index);
            }}
            onKeyUp={(e) => {
              handlekeyup(e, index);
            }}
          />
        );
      })}
    </div>
  );
};
export default Field;

Field.propTypes = {
  length: propTypes.number.isRequired,
};
