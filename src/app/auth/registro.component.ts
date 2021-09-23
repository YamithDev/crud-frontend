import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: NuevoUsuarioDto = {
    nombre: '',
    nombreUsuario: '',
    email: '',
  };

  nombre: string = '';
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password
    );

    this.authService.registro(this.usuario).subscribe(
      (data) => {
        this.toastService.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-left',
        });
        this.router.navigate(['/login']);
      },
      (err) => {
        this.toastService.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-bottom-left',
        });
      }
    );
  }
}
