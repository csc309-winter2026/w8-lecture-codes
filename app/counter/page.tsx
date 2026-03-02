'use client'
import Title from "@/components/Title";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Title 
        title={`The button has been clicked ${count} times`}
        color="blue"
      />
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  )
}