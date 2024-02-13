import React, { useEffect, useState } from "react";

function Contact() {
  const [name, setName] = useState("rupesh bavaskar from Pune");
  const [age, setAge] = useState("26");

  useEffect(() => {
    console.warn("Hello from hook");
  }, [age]); //use [] for using useEffect only for age hook (click event)
  let data = "from JSX"; // javasript html

  return (
    <div>
      <h1> Contact us page component {data}</h1>
      <h1>Name: {name}</h1>
      <h1>Age:{age}</h1>

      <button
        onClick={() => {
          setName("React Developer");
        }}
      >
        update name
      </button>
      <button
        onClick={() => {
          setAge("26 as of FEB 2024");
        }}
      >
        update age
      </button>
    </div>
  );
}

export default Contact;

