import { leerUsuario } from './usuarioService';

export async function validarLogin(user: string, pass: string): Promise<boolean> {
  const usuario = await leerUsuario();
  return !!usuario && usuario.username === user && usuario.password === pass;
}