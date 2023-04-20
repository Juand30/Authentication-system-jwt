import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const handleClick = () => {
    fetch(
      "https://3001-4geeksacade-reactflaskh-j51n20z2l13.ws-eu94.gitpod.io/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          actions.setToken(data.token);
          // navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="text-center mt-5">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
