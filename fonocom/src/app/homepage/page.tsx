import Header from "../header"
import type { ReactNode } from "react"
import Link from "next/link"
import Footer from "../footer"
interface Program {
  id: number
  icon: ReactNode
  title: string
  link: string
}

const programs: Program[] = [
  {
    id: 1,
    icon: "📚",
    title: "Comunicación",
    link: "/programas/comunicacion",
  },
  {
    id: 2,
    icon: "🔬",
    title: "Empleo y trabajo",
    link: "/programas/empleo",
  },
  {
    id: 3,
    icon: "🏛️",
    title: "Ideas de negocio",
    link: "/programas/negocio",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white-900">
      <Header />

      <div className="max-w-screen-xl mx-auto px-6 py-8 justify-center"
      style={{
          padding: "0 1.5rem !important",
          marginTop: "2rem"
        }}>
        <main className="bg-white rounded-md p-8 text-gray-800">
          <h1 className="text-2xl font-bold">Inicio</h1>
          <h2 className="text-lg font-semibold mt-2">Bienvenido a nuestra plataforma de aprendizaje</h2>
          <p className="text-sm mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tincidunt eros, at tincidunt ante. Aenean
            ut imperdiet lacus.
          </p>
          <br></br>
          {/* Program cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="border rounded-xl p-4 flex flex-col items-center text-center shadow hover:shadow-md transition max-w-sm mx-auto"
              >
                <div className="text-4xl mb-2">{program.icon}</div>
                <h3 className="text-base font-semibold">{program.title}</h3>
                <Link href={program.link}><button className="mt-3 text-sm font-underline cursor-pointer text-gray-800 border border-gray-500 px-3 py-1 rounded hover:bg-gray-200">
                  Entrar
                </button></Link>
                <br></br>
              </div>
            ))}
          </div>
        </main>
      </div>
      <br></br>
      <Footer />
    </div>
  )
}

