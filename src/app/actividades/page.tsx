import Header from "../header"
import type { ReactNode } from "react"
import Footer from "../footer"

interface Program {
  id: number
  icon: ReactNode
  title: string
  actividades: Actividad[]
}

interface Actividad {
  id: number
  titulo: string
  descripcion: string
  link: string
}

const programs: Program[] = [
  {
    id: 1,
    icon: "📚",
    title: "Comunicación: Habilidades comunicativas",
    actividades: [
      {
        id: 1,
        titulo: "Actividad 1",
        descripcion: "Escucha activa.",
        link: "actividades/comunicacion/habilidades/modulo1",
      },
      {
        id: 2,
        titulo: "Actividad 2",
        descripcion: "Habla.",
        link: "actividades/comunicacion/habilidades/modulo2",
      },
      {
        id: 3,
        titulo: "Actividad 3",
        descripcion: "Habilidades de lecto-esctitura.",
        link: "actividades/comunicacion/habilidades/modulo3",
      },
      {
        id: 4,
        titulo: "Actividad 4",
        descripcion: "Habilidades conversacionales.",
        link: "actividades/comunicacion/habilidades/modulo3",
      },
    ],
  },
  {
    id: 2,
    icon: "📚",
    title: "Comunicación: Competencias comunicativas",
    actividades: [
      {
        id: 1,
        titulo: "Actividad 1",
        descripcion: "Competencia lingüística.",
        link: "actividades/comunicacion/competencias/modulo1",
      },
      {
        id: 2,
        titulo: "Actividad 2",
        descripcion: "Competencia paralingüística.",
        link: "actividades/comunicacion/competencias/modulo2",
      },
      {
        id: 3,
        titulo: "Actividad 3",
        descripcion: "Competencia pragmática.",
        link: "actividades/comunicacion/competencias/modulo3",
      },
      {
        id: 4,
        titulo: "Actividad 4",
        descripcion: "Competencia proxémica.",
        link: "actividades/comunicacion/competencias/modulo4",
      },
    ],
  },
  {
    id: 3,
    icon: "🔬",
    title: "Empleo y trabajo",
    actividades: [
      {
        id: 1,
        titulo: "Actividad 1",
        descripcion: "Evaluación de habilidades laborales.",
        link: "actividades/empleo/modulo1",
      },
      {
        id: 2,
        titulo: "Actividad 2",
        descripcion: "Entrenamiento en habilidades socio-laborales.",
        link: "actividades/empleo/modulo2",
      },
      {
        id: 3,
        titulo: "Actividad 3",
        descripcion: "Talleres de comunicación funcional.",
        link: "actividades/empleo/modulo3",
      },
      {
        id: 4,
        titulo: "Actividad 4",
        descripcion: "Orientación a familias y cuidadores en inclusión laboral.",
        link: "actividades/empleo/modulo4",
      },
    ],
  },
  {
    id: 4,
    icon: "🏛️",
    title: "Ideas de negocio",
    actividades: [
      {
        id: 1,
        titulo: "Actividad 1",
        descripcion: "Capacitación en habilidades emprendedoras.",
        link: "actividades/emprendimiento/modulo1",
      },
      {
        id: 2,
        titulo: "Actividad 2",
        descripcion: "Desarrollo de ideas de negocio.",
        link: "actividades/emprendimiento/modulo2",
      },
      {
        id: 3,
        titulo: "Actividad 3",
        descripcion: "Educación financiera básica.",
        link: "actividades/emprendimiento/modulo3",
      },
      {
        id: 4,
        titulo: "Actividad 4",
        descripcion: "Entrenamiento en comunicación para ventas.",
        link: "actividades/emprendimiento/modulo3",
      },
      {
        id: 5,
        titulo: "Actividad 5",
        descripcion: "Formación a familias o cuidadores sobre emprendimiento.",
        link: "actividades/emprendimiento/modulo3",
      },
    ],
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
          <p className="text-2xl font-bold">Actividades</p>
          <h2 className="text-lg font-semibold mt-2">Aqui podras encontrar nuestras actividades de aprendizaje</h2>
          <br></br>
          {/* Program cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {programs.map((program) => (
              <div key={program.id} className="border rounded-xl p-4 flex flex-col items-center text-center shadow hover:shadow-md transition max-w-sm mx-auto">
                <br></br>
                <h2 className="text-xl font-bold mb-2">{program.title}</h2>
                <div className="grid gap-4">
                  {program.actividades?.map((act) => (
                    <div key={act.id} className="p-3 border rounded">
                      <h3 className="text-lg font-semibold">{program.icon}{act.titulo}</h3>
                      <p className="text-sm text-gray-600">{act.descripcion}</p>
                      <a href={act.link} className="text-blue-600 hover:underline text-sm">
                        Ver actividad
                      </a>
                    </div>
                  ))}
                  <br></br>
                </div>
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
