import Title from "@/components/Title"

export default function Info() {
  const Paragraph: React.FC<{ text: string }> = ({ text }) => (
    <p className="bg-blue-100 p-4 rounded-lg">{text}</p>
  )

  return (
    <>
      <Title title="Info Page" color="blue" />
      <div className="grid gap-4 mx-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <Paragraph text="This is the info page. You can put any information you want here." />
        <Paragraph text="Feel free to customize this page as you like!" />
        <Paragraph text="Have fun building your Next.js app!" />
        <Paragraph text="Don't forget to check out the other pages: Counter and Converter!" />
        <Paragraph text="Happy coding! 🚀" />
      </div>
    </>
  )
}