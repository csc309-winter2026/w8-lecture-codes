import React from 'react'

interface TitleProps {
  title: string
  color?: string
}

const Title: React.FC<TitleProps> = ({ title, color }) => {
  return (
    <h1 className={`text-3xl font-bold ${color ? `text-${color}-600` : 'text-gray-800'}`}>
      {title}
    </h1>
  )
}

export default Title