import { forwardRef } from "react";

const Pin = forwardRef(({ handleChange, backSpaceHandler }, ref) => {
  const handleKeyup = (e) => {
    // console.log(e);
    if (e.keyCode == 8) {
      backSpaceHandler(e);
    } else {
      handleChange(e);
    }
  };
  return (
    <input
      style={{
        width: "50px",
        height: "50px",
        fontWeight: "bold",
        fontSize: "50px",
        textAlign: "center",
      }}
      // onChange={handleChange}
      maxLength={1}
      ref={ref}
      onKeyUp={handleKeyup}
    />
  );
});

export default Pin;
