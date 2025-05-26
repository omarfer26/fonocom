'use client'
import { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { Usuario } from '../usuarios/usuarioService'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [usuario, setUsuario] = useState<Usuario | null>(null)

useEffect(() => {
  fetch('/api/usuario')
    .then(res => res.json())
    .then(data => setUsuario(data))
    .catch(err => console.error(err))
}, [])

  return (
    <>
      <header className="bg-lime-500 text-gray-900 w-full z-10">
      <div
        className="w-full max-w-screen-xl mx-auto flex items-center justify-between h-16"
        style={{
          padding: "0 1.5rem !important",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => setIsOpen(true)}>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        <div className="text-sm">
            Bienvenido/a. {usuario ? usuario.username : 'Cargando...'}
          </div>
      </div>
      </header>

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
