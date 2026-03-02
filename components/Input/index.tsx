import React from "react"

interface InputProps {
  label: string
  value: string
  setValue: (value: string) => void
}

const Input: React.FC<InputProps> = ({ label, value, setValue }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="text-sm font-medium text-gray-700">
      {label}
      </label>
      <input 
        id="input" 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  )
}

export default Input