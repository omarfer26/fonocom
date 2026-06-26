import { prisma } from "./prisma"

export interface Progreso {
  comunicacion: number
  empleo: number
  ideas: number
}

export interface User {
  username: string
  password?: string
  progreso?: Progreso | null
}

export interface LoginResponse {
  success: boolean
  user?: Omit<User, "password">
  message?: string
}

class AuthService {
  private async loadDefaultUsers() {
    try {
      const count = await prisma.usuario.count()
      if (count === 0) {
        await prisma.usuario.create({
          data: {
            username: "omar",
            password: "1234",
            progreso: {
              create: {
                comunicacion: 0,
                empleo: 0,
                ideas: 0,
              }
            }
          }
        })
        await prisma.usuario.create({
          data: {
            username: "ana",
            password: "abcd",
            progreso: {
              create: {
                comunicacion: 0,
                empleo: 0,
                ideas: 0,
              }
            }
          }
        })
        // También el usuario admin que estaba en users.json
        await prisma.usuario.create({
          data: {
            username: "admin",
            password: "123456",
            progreso: {
              create: {
                comunicacion: 0,
                empleo: 0,
                ideas: 0,
              }
            }
          }
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  constructor() {
    this.loadDefaultUsers().catch(console.error)
  }

  public async authenticate(username: string, password: string): Promise<LoginResponse> {
    try {
      const user = await prisma.usuario.findUnique({
        where: { username },
        include: { progreso: true }
      })

      if (user && user.password === password) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _pw, ...userWithoutPassword } = user
        return {
          success: true,
          user: userWithoutPassword as Omit<typeof user, 'password'>,
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

  public async getAllUsers(): Promise<Omit<User, "password">[]> {
    const users = await prisma.usuario.findMany({
      include: { progreso: true }
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return users.map(({ password: _pw, ...user }) => user as Omit<typeof user, 'password'>)
  }

  public async updateUserProgress(username: string, newProgress: Partial<Progreso>): Promise<boolean> {
    try {
      const user = await prisma.usuario.findUnique({
        where: { username },
        include: { progreso: true }
      })

      if (!user) {
        return false
      }

      if (user.progreso) {
        await prisma.progreso.update({
          where: { usuarioId: user.id },
          data: newProgress
        })
      } else {
        await prisma.progreso.create({
          data: {
            comunicacion: newProgress.comunicacion || 0,
            empleo: newProgress.empleo || 0,
            ideas: newProgress.ideas || 0,
            usuarioId: user.id
          }
        })
      }
      return true
    } catch (error) {
      console.error("Error updating user progress:", error)
      return false
    }
  }
}

export const authService = new AuthService()
