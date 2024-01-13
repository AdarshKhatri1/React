import { useState } from "react";
import Field2 from "./Field2";

export default function Custom_Pin2() {
  const [pinInput, setPinInput] = useState("");

  return (
    <div>
      <h1>Pin</h1>
      <Field2 length={5} setPin={setPinInput} />
      <h1>OTP is {pinInput}</h1>
    </div>
  );
}
