import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { FUN_LOGIN_FAILURE, FUN_LOGIN_REQUEST, FUN_LOGIN_SUCCESS } from "../Redux/AuthReducer/Action";

export default function Login() {
    const [email, setEmail] = useState("");
    // email = eve.holt@reqres.in
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        if (email && password) {
            const payload = {
                email: email,
                password: password
            }
            dispatch(FUN_LOGIN_REQUEST())
                return axios.post("https://reqres.in/api/login", payload)
                    .then((r) => {
                        dispatch(FUN_LOGIN_SUCCESS(r.data.token))
                    })
                    .catch((e) => {
                        dispatch(FUN_LOGIN_FAILURE(e));
                    })
        }
        else{
        console.log("write email, password")
        }
    }

    return (
        <div>
            <input placeholder='email' onChange={(e) => setEmail(e.target.value)} type='email' value={email} />
            <br />
            <input placeholder='password' onChange={(e) => setPassword(e.target.value)} type='password' value={password} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}