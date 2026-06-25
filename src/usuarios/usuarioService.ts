import { prisma } from "../lib/prisma"
import type { Progreso, Usuario } from "./usuario"

export async function leerUsuario(): Promise<Usuario | null> {
  const users = await prisma.usuario.findMany({ include: { progreso: true } })
  return (users[0] as unknown as Usuario) || null
}

export async function leerUsuarios(): Promise<Usuario[]> {
  const users = await prisma.usuario.findMany({ include: { progreso: true } })
  return users as unknown as Usuario[]
}

export async function obtenerUsuario(username: string): Promise<Usuario | null> {
  const user = await prisma.usuario.findUnique({
    where: { username },
    include: { progreso: true }
  })
  return user as unknown as Usuario | null
}

export async function guardarUsuario(usuario: Usuario): Promise<void> {
  const existing = await prisma.usuario.findUnique({ where: { username: usuario.username } })
  if (existing) {
    await prisma.usuario.update({
      where: { username: usuario.username },
      data: {
        password: usuario.password,
        progreso: usuario.progreso ? {
          upsert: {
            create: usuario.progreso,
            update: usuario.progreso
          }
        } : undefined
      }
    })
  } else {
    await prisma.usuario.create({
      data: {
        username: usuario.username,
        password: usuario.password,
        progreso: usuario.progreso ? {
          create: usuario.progreso
        } : undefined
      }
    })
  }
}

export async function actualizarProgreso(nuevoProgreso: Partial<Progreso>): Promise<void> {
  const user = await leerUsuario()
  if (user) {
    const existing = await prisma.usuario.findUnique({ where: { username: user.username } })
    if (existing) {
      await prisma.progreso.upsert({
        where: { usuarioId: existing.id },
        create: { 
          comunicacion: nuevoProgreso.comunicacion || 0,
          empleo: nuevoProgreso.empleo || 0,
          ideas: nuevoProgreso.ideas || 0,
          usuarioId: existing.id 
        },
        update: {
          comunicacion: nuevoProgreso.comunicacion,
          empleo: nuevoProgreso.empleo,
          ideas: nuevoProgreso.ideas,
        }
      })
    }
  }
}
