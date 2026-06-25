import { NextResponse } from 'next/server'
import { leerUsuario } from '@/usuarios/usuarioService'

export async function GET() {
  const usuario = await leerUsuario()
  return NextResponse.json(usuario)
}
