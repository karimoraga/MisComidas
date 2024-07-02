import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})

export class DBService {
  
  private localStorageKey = 'usuarios';
  private activeUserKey = 'usuarioActivo';

  constructor() { }

  // Registrar un nuevo usuario
  crearUsuario(user: User): void {
    const users = this.getUsuarios();
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  private getUsuarios(): User[] {
    const usersJSON = localStorage.getItem(this.localStorageKey);
    return usersJSON ? JSON.parse(usersJSON) : [];
  }

  existeUsuario(username: string): boolean {
    const users = this.getUsuarios();
    return users.some(user => user.username === username);
  }

  verificarUsuario(username: string, password: string): boolean {
    const users = this.getUsuarios();
    return users.some(user => user.username === username && user.password === password);
  }

  obtenerNombre(username: string): string {
    const users = this.getUsuarios();
    let i;

    for(i = 0; i < users.length; i++) {
        if(users[i].username === username) return users[i].nombre;
    }

    return "No encontrado";
  }

  setActiveUser(nombre: string): void {
    localStorage.setItem(this.activeUserKey, nombre);
  }

  getActiveUser(): string | null {
    return localStorage.getItem(this.activeUserKey);
  }
}