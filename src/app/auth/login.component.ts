import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuarioDto } from '../models/login-usuario.dto';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: LoginUsuarioDto = {
    nombreUsuario: '',
    password: '',
  };

  nombreUsuario: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toasterService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.usuario = new LoginUsuarioDto(this.nombreUsuario, this.password);
    this.authService.login(this.usuario).subscribe((data) => {
      if (!data.token) {
        this.toasterService.error(data.response.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      }
      this.tokenService.setToken(data.token);
    });
  }
}
