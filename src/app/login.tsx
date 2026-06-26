'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";



export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/usuario')
      const data = await res.json()

      if (data.username === form.username && data.password === form.password) {
        // guardar en localStorage o estado global
        localStorage.setItem('usuario', JSON.stringify(data))
        router.push('/usuario') // redirige al panel de usuario
      } else {
        setError('Usuario o contraseña incorrectos')
      }
    } catch (err) {
      console.error(err)
      setError('Error al conectar con el servidor')
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Usuario:</label>
          <input
            type="text"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="border px-2 py-1"
          />
        </div>
        <div>
          <label className="block">Contraseña:</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border px-2 py-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Entrar
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </main>
  )
}