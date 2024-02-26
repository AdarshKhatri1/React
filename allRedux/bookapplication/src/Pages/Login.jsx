import { useState } from "react";
import styled from "styled-components";
import { loginn } from "../Redux/Auth/Action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getBook } from "../Redux/App/Action";

export default function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state?.data;
  // console.log(path,"sldjflsdjflkjsdlkfjsdlkjj");

  const handleSubmit = () => {
    // console.log("slfj")

    dispatch(loginn({ email, password })).then((r) => {
      // dispatch(getBook())
      // console.log("after Login",r);
      navigate(path, { replace: true });
    });
    // navigate("/",{replace:true})
  };

  return (
    <Div>
      <div>
        <input
          value={email}
          placeholder="Email"
          type="email"
          onChange={() => {}}
        />
        <label>Email</label>
      </div>

      <div>
        <input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Password</label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </Div>
  );
}

const Div = styled.div`
  border: 5px solid Grey;
  width: 250px;
  margin: auto;
  padding: 20px;
  margin-top: 100px;

  div {
    border: 1px solid orange;
    input {
      border: 2px solid grey;
      justify-content: center;
    }

    label {
      font-weight: bold;
    }
  }
`;
