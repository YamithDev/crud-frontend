import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Servicio } from '../models/servicio.dto';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-new-servicios',
  templateUrl: './new-servicios.component.html',
  styleUrls: ['./new-servicios.component.css'],
})
export class NewServiciosComponent implements OnInit {
  nombre = '';
  precio = 0;
  descripcion = '';

  constructor(
    private serviciosService: ServicioService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const servicio = new Servicio(this.nombre, this.precio, this.descripcion);
    this.serviciosService.save(servicio).subscribe(
      (data) => {
        this.toastr.success('Servicio creado con éxito', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.volver();
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista']);
  }
}
