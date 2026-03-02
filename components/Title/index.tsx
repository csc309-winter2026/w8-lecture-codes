interface TitleProps {
  title: string
  color?: string
}

// export default function Title({ title, color }: TitleProps) {
const Title: React.FC<TitleProps> = ({ title, color }) => {
  return (
    <h1 className={`text-2xl text-center font-bold mb-6 ${color ? `text-${color}-600` : "text-gray-800"}`}>
      {title}
    </h1>
  )
}

export default Title