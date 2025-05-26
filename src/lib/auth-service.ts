import fs from "fs"
import path from "path"

export interface Progreso {
  comunicacion: number
  empleo: number
  ideas: number
}

export interface User {
  username: string
  password: string
  progreso: Progreso
}

export interface LoginResponse {
  success: boolean
  user?: Omit<User, "password">
  message?: string
}

class AuthService {
  private usersFilePath: string

  constructor() {
    this.usersFilePath = path.join(process.cwd(), "data", "users.json")
  }

  private loadUsers(): User[] {
    try {
      // Crear directorio si no existe
      const dataDir = path.dirname(this.usersFilePath)
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }

      // Crear archivo si no existe con los usuarios por defecto
      if (!fs.existsSync(this.usersFilePath)) {
        const defaultUsers: User[] = [
          {
            username: "omar",
            password: "1234",
            progreso: {
              comunicacion: 0,
              empleo: 0,
              ideas: 0,
            },
          },
          {
            username: "ana",
            password: "abcd",
            progreso: {
              comunicacion: 0,
              empleo: 0,
              ideas: 0,
            },
          },
        ]
        fs.writeFileSync(this.usersFilePath, JSON.stringify(defaultUsers, null, 2))
      }

      const fileContent = fs.readFileSync(this.usersFilePath, "utf-8")
      return JSON.parse(fileContent)
    } catch (error) {
      console.error("Error loading users:", error)
      return []
    }
  }

  public authenticate(username: string, password: string): LoginResponse {
    try {
      const users = this.loadUsers()

      const user = users.find((u) => u.username === username && u.password === password)

      if (user) {
        const { password, ...userWithoutPassword } = user
        return {
          success: true,
          user: userWithoutPassword,
        }
      }

      return {
        success: false,
        message: "Credenciales incorrectas",
      }
    } catch (error) {
      console.error("Authentication error:", error)
      return {
        success: false,
        message: "Error interno del servidor",
      }
    }
  }

  public getAllUsers(): Omit<User, "password">[] {
    const users = this.loadUsers()
    return users.map(({ password, ...user }) => user)
  }

  public updateUserProgress(username: string, newProgress: Partial<Progreso>): boolean {
    try {
      const users = this.loadUsers()
      const userIndex = users.findIndex((u) => u.username === username)

      if (userIndex === -1) {
        return false
      }

      users[userIndex].progreso = { ...users[userIndex].progreso, ...newProgress }
      fs.writeFileSync(this.usersFilePath, JSON.stringify(users, null, 2))
      return true
    } catch (error) {
      console.error("Error updating user progress:", error)
      return false
    }
  }
}

export const authService = new AuthService()
