
import { useState } from "react";
import React from "react";
export default function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  function makeUser() {
    let data = { name, age, address };
    console.warn("Called make user func", data);
  }

  return (
    <div>
      <h1>CreateUser</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name="username "
        value={name}
      ></input>
      <br /> <br />{" "}
      <input
        type="text"
        onChange={(e) => setAge(e.target.value)}
        name="age "
        value={age}
      ></input>
      <br /> <br />
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        name="username "
        value={address}
      ></input>
      <br /> <br />
      <button onClick={makeUser}>Make user</button>
    </div>
  );
}
