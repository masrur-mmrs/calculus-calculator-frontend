import { AlgebraModeProvider, AlgebraEquationProvider } from "@/context/context"

const AlgebraLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="relative">
            <AlgebraModeProvider>
                <AlgebraEquationProvider>
                    {children}
                </AlgebraEquationProvider>
            </AlgebraModeProvider>
          </div>
        </main>
      </body>
    </html>
  )
}

export default AlgebraLayout