"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { AboutResponse } from "../api/about/route";

function About() {
  // const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/about").then((res: AboutResponse) => {
      const { message } = res.data;
      setMessage(message);
    });
  }, []);

  return (
    <>
      <h1>About</h1>

      <p>{message}</p>
    </>
  );
}

export default About;