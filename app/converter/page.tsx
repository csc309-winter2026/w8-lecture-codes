'use client'
import Title from "@/components/Title";
import React, { useState } from "react";
import Input from "@/components/Input";

export default function Converter(){
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const onChange = (isCelsius: boolean) => (value: string) => {
    if (isCelsius) {
      setCelsius(value);
      const fahrenheitValue = (parseFloat(value) * 9/5) + 32;
      setFahrenheit(isNaN(fahrenheitValue) ? "" : fahrenheitValue.toString());
    } else {
      setFahrenheit(value);
      const celsiusValue = (parseFloat(value) - 32) * 5/9;
      setCelsius(isNaN(celsiusValue) ? "" : celsiusValue.toString());
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-md mx-auto">
      <Title title="Welcome to the Converter Page!" color="green" />
      <div className="mt-8 space-y-6 bg-white rounded-lg shadow-lg p-6">
        <Input title="Celsius" value={celsius} setValue={onChange(true)} />
        <Input title="Fahrenheit" value={fahrenheit} setValue={onChange(false)} />
      </div>
      </div>
    </div>
  )
}