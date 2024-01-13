import { useState } from "react";
import Field from "./Field";

export default function Custom_Pin() {
  const [pinInput, setPinInput] = useState("");

  return (
    <div>
      <h1>Pin</h1>
      <Field length={5} setPin={setPinInput} />
    </div>
  );
}
