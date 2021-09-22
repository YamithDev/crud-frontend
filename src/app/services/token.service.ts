import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getNombreUsuario(): string {
    if (!this.isLogged()) {
      return '';
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const nombreUsuario = valuesJson.nombreUsuario;
    return nombreUsuario;
  }

  logOut(): void {
    localStorage.clear();
  }
}
