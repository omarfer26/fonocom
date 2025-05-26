import { NextResponse } from "next/server"
import { authService } from "@/lib/auth-service"

export async function GET() {
  try {
    const users = authService.getAllUsers()
    return NextResponse.json({ success: true, users })
  } catch (error) {
    console.error("Users API error:", error)
    return NextResponse.json({ success: false, message: "Error al obtener usuarios" }, { status: 500 })
  }
}
