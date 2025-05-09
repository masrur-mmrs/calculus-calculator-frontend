import Mode from "@/components/Mode"

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <main>
            <div className="relative">
                <Mode/>
                {children}
            </div>
        </main>
        </body>
      </html>
    )
  }