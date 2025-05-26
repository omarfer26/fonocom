import fs from "fs"
import path from "path"
import type { Progreso, Usuario } from "./usuario"

const filePath = path.join(process.cwd(), "data", "data.json")

export function leerUsuario(): Usuario {
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

export function leerUsuarios(): Usuario[] {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, "[]", "utf-8")
  }
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

export function obtenerUsuario(username: string): Usuario | null {
  const usuarios: Usuario[] = leerUsuarios()
  console.log("Usuarios disponibles:", usuarios)
  console.log("Buscando username:", username)

  // Corregir la comparación para que coincida con el backend
  const encontrado = usuarios.find((u: Usuario) => u.username.toLowerCase().trim() === username.toLowerCase().trim())

  console.log("Usuario encontrado:", encontrado)
  return encontrado || null
}

export function guardarUsuario(usuario: Usuario) {
  const usuarios: Usuario[] = leerUsuarios()
  const index = usuarios.findIndex((u: Usuario) => u.username === usuario.username)

  if (index === -1) {
    usuarios.push(usuario)
  } else {
    usuarios[index] = usuario
  }

  fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2), "utf-8")
}

export function actualizarProgreso(nuevoProgreso: Partial<Progreso>): void {
  const usuario = leerUsuario()
  usuario.progreso = { ...usuario.progreso, ...nuevoProgreso }
  guardarUsuario(usuario)
}
