import { leerUsuario } from './usuarioService';

export function validarLogin(user: string, pass: string): boolean {
  const usuario = leerUsuario();
  return usuario.username === user && usuario.password === pass;
}