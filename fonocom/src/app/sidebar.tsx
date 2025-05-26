import { useState } from "react";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {

   const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* Sidebar */}
      <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{
        padding: "0 1.5rem !important",
      }}
    >
      <div style={{
          marginTop: "2rem",
        }}>
        <button onClick={onClose} className="text-lg mb-6 cursor-pointer hover:transform hover:scale-110">
          <p className="text-2xl">X</p>
        </button>
        <ul className="space-y-4 cursor-pointer">
          <Link href="/"><li className="cursor-pointer">Inicio</li></Link>
          <Link href="../usuario"><li className="cursor-pointer">Usuario</li></Link>
        </ul>
        <button
          className="w-full text-left font-semibold hover:text-lime-600"
          onClick={() => toggleSection("programas")}
        >
          Programas
        </button>
        <div className={`overflow-hidden transition-all duration-600 ${
          openSection === "programas" ? "max-h-96" : "max-h-0"
        }`}>
        {openSection === "programas" && (
          <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700">
            <Link href="/programas/comunicacion"><li className="hover:text-lime-600 cursor-pointer">Comunicación</li></Link>
            <Link href="/programas/empleo"><li className="hover:text-lime-600 cursor-pointer">Empleo y trabajo</li></Link>
            <Link href="/programas/negocio"><li className="hover:text-lime-600 cursor-pointer">Ideas de negocio</li></Link>
          </ul>
        )}
        </div>
      </div>

      {/* Sección 2 */}
      <div>
        <Link href="/actividades"><button className="w-full text-left font-semibold cursor-pointer hover:text-lime-600">Actividades</button></Link>
      </div>

        {/* Sección 3 */}
        <button className="w-full text-left font-semibold cursor-pointer hover:text-lime-600">
          <Link href="./login">Cerrar sesión</Link>
        </button>

    </div>

      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-10"
          onClick={onClose}
        />
      )}
    </>
  )
}
