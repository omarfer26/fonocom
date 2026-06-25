import { NextResponse } from 'next/server'
import { guardarUsuario, leerUsuario } from '@/usuarios/usuarioService'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const currentData = await leerUsuario()

    if (!currentData) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
    }

    const updatedData = {
      ...currentData,
      username: data.username ?? currentData.username,
      password: data.password ?? currentData.password,
    }

    await guardarUsuario(updatedData as any)

    return NextResponse.json(updatedData)
  } catch (error) {
    console.error('ERROR AL GUARDAR:', error)
    return NextResponse.json({ error: 'No se pudo actualizar' }, { status: 500 })
  }
}
