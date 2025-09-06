import Mode from "@/components/Mode"

const MainLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="relative">
            <Mode />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

export default MainLayout