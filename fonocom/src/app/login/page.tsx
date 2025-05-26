"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // Guardar usuario en localStorage
        localStorage.setItem("user", JSON.stringify(data.user))
        router.push("/homepage")
      } else {
        setError(data.message || "Error al iniciar sesión")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Función para llenar credenciales de prueba
  const fillTestCredentials = (username: string, password: string) => {
    setFormData({ username, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md border border-gray-200">
        {/* Header */}
        <div className="p-6 pb-4 space-y-1">
          <h1 className="text-2xl font-bold text-center text-gray-900">Iniciar Sesión</h1>
          <p className="text-center text-gray-600">Ingresa tus credenciales para acceder</p>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Ingresa tu usuario"
                value={formData.username}
                onChange={handleInputChange}
                required
                disabled={loading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={formData.password}
                onChange={handleInputChange}
                required
                disabled={loading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
          </form>

          {/* Panel de credenciales de prueba */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold text-sm mb-3 text-gray-800">Credenciales de prueba:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">
                  <strong>admin</strong> / 123456
                </span>
                <button
                  type="button"
                  onClick={() => fillTestCredentials("admin", "123456")}
                  className="px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Usar
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">
                  <strong>user1</strong> / password
                </span>
                <button
                  type="button"
                  onClick={() => fillTestCredentials("user1", "password")}
                  className="px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Usar
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">
                  <strong>test</strong> / test
                </span>
                <button
                  type="button"
                  onClick={() => fillTestCredentials("test", "test")}
                  className="px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Usar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
