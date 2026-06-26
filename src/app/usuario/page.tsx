/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { useRouter } from 'next/navigation'

interface Usuario {
  username: string
  password: string
  progreso: {
    comunicacion: number
    empleo: number
    ideas: number
  }
}

export default function UsuarioPage() {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [form, setForm] = useState({ username: '', password: '' })
  const router = useRouter()
  
  useEffect(() => {
    const sesion = localStorage.getItem('user')
    if (!sesion) {
      router.push('/login')
    } else {
      setUsuario(JSON.parse(sesion))
    }
  }, [])

  const cerrarSesion = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  useEffect(() => {
    fetch('/api/usuario')
      .then(res => res.json())
      .then(data => {
        setUsuario(data)
        setForm({ username: data.username, password: data.password })
      })
      .catch(err => console.error(err))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/usuario/actualizar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      const data = await res.json()
      setUsuario(data)
      alert('Datos actualizados correctamente')
    } else {
      alert('Error al actualizar')
    }
  }

  return (
    <>
      <Header />
      <main className="p-6 flex"
      style={{
                    padding: "0 1.5rem !important",
                }}>
        <br/>
        <div className="flex-grow">
        <br/>
        <section>
            <p className="text-xl font-semibold mb-4">
          Bienvenido/a {usuario ? usuario.username : 'Cargando...'}
        </p>
        <br/>        
        {usuario ? (
          <div className="space-y-2">
            <p>Progreso en Comunicación: {usuario.progreso?.comunicacion || 0}%</p>
            <p>Progreso en Empleo: {usuario.progreso?.empleo || 0}%</p>
            <p>Progreso en Ideas: {usuario.progreso?.ideas || 0}%</p>
          </div>
        ) : (
          <p>Cargando progreso...</p>
        )}
        </section>
        <br/>
        <section>
            <p className="dlex flex-col text-xl font-semibold mb-4">Modificar usuario</p>
            <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-semibold">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border border-black px-2 py-1"
            />
          </div>
            <br/>
          <div>
            <label htmlFor="password" className="block font-semibold">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border border-black px-2 py-1"
            />
          </div>
          <br/>
          <button
            type="submit"
            className="button bg-lime-500 px-4 py-2 rounded font-bold"
          >
            Guardar
          </button>
        </form>
        </section>
        <button onClick={cerrarSesion} className="mt-4 bg-red-500 text-white px-4 py-2">
          Cerrar sesión
        </button>
        </div>
        <aside className=" w-64 p-4 border-l border-gray-300 shrink-0 justify-center">
            <img src="/gifs/usuario.webp" alt="Comunicación" className='w-192 h-192' />
        </aside>
      </main>
      <Footer />
    </>
  )
}
