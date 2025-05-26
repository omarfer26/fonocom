import { NextResponse } from "next/server"
import { leerUsuarios } from "@/usuarios/usuarioService"

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    console.log("=== DEBUG LOGIN ===")
    console.log("1. Datos recibidos:", { username, password })
    console.log("2. Tipos:", { usernameType: typeof username, passwordType: typeof password })

    if (!username || !password) {
      console.log("3. Error: Faltan credenciales")
      return NextResponse.json({ error: "Faltan username o password" }, { status: 400 })
    }

    // Leer usuarios directamente para ver qué tenemos
    const usuarios = leerUsuarios()
    console.log("4. Usuarios en archivo:", usuarios)
    console.log("5. Cantidad de usuarios:", usuarios.length)

    if (usuarios.length === 0) {
      console.log("6. Error: No hay usuarios en el archivo")
      return NextResponse.json({ error: "No hay usuarios registrados" }, { status: 500 })
    }

    // Buscar usuario manualmente con logs detallados
    let usuarioEncontrado = null
    for (const usuario of usuarios) {
      console.log(`7. Comparando:`)
      console.log(`   - Usuario archivo: "${usuario.username}" (tipo: ${typeof usuario.username})`)
      console.log(`   - Usuario input: "${username}" (tipo: ${typeof username})`)
      console.log(`   - Password archivo: "${usuario.password}" (tipo: ${typeof usuario.password})`)
      console.log(`   - Password input: "${password}" (tipo: ${typeof password})`)

      const usernameMatch = usuario.username.toLowerCase().trim() === username.toLowerCase().trim()
      const passwordMatch = usuario.password === password

      console.log(`   - Username match: ${usernameMatch}`)
      console.log(`   - Password match: ${passwordMatch}`)

      if (usernameMatch && passwordMatch) {
        usuarioEncontrado = usuario
        console.log("8. ¡Usuario encontrado!")
        break
      }
    }

    if (!usuarioEncontrado) {
      console.log("9. Usuario NO encontrado")
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    console.log("10. Autenticación exitosa")
    const { password: _password, ...usuarioSinPass } = usuarioEncontrado

    return NextResponse.json(usuarioSinPass)
  } catch (error) {
    console.error("Error en API login:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
