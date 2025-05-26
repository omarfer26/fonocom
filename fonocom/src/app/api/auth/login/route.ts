import { type NextRequest, NextResponse } from "next/server"
import { authService } from "@/lib/auth-service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Validar que se enviaron los datos
    if (!username || !password) {
      return NextResponse.json({ success: false, message: "Username y password son requeridos" }, { status: 400 })
    }

    // Autenticar usuario
    const result = authService.authenticate(username.trim(), password)

    if (result.success) {
      return NextResponse.json(result, { status: 200 })
    } else {
      return NextResponse.json(result, { status: 401 })
    }
  } catch (error) {
    console.error("Login API error:", error)
    return NextResponse.json({ success: false, message: "Error interno del servidor" }, { status: 500 })
  }
}
