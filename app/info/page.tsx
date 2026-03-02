import Title from "@/components/Title"; 

export default function Info() {
  const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="bg-blue-100 p-4 rounded-lg">{children}</p>
  );

  return (
    <>
      <Title 
        title="Blog"
        color="red"
      />
      <div className="p-8 space-y-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph >
        <Paragraph>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
        <Paragraph>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>
        <Paragraph>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        <Paragraph>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Paragraph>
        <Paragraph>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Paragraph>
      </div>
  </>
  )
}