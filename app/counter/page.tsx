'use client'
import Title from "@/components/Title";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title title={`This button is clicked ${count} times`} color="red" />
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  )
}