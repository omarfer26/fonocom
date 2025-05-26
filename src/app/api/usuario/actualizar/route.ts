import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const filePath = path.join(process.cwd(), 'src', 'data', 'data.json')

    // Leer los datos actuales
    const currentData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    // Fusionar datos nuevos con los existentes (solo actualiza username y password)
    const updatedData = {
      ...currentData,
      username: data.username ?? currentData.username,
      password: data.password ?? currentData.password,
    }

    // Guardar los datos fusionados
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf-8')

    return NextResponse.json(updatedData)
  } catch (error) {
    console.error('ERROR AL GUARDAR:', error)
    return NextResponse.json({ error: 'No se pudo actualizar' }, { status: 500 })
  }
}
