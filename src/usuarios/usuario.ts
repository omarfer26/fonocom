export interface Progreso {
  comunicacion: number
  empleo: number
  ideas: number
}

export interface Usuario {
  username: string
  password?: string
  progreso: Progreso
}
