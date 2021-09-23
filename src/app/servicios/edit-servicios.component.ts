import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Servicio } from '../models/servicio.dto';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-edit-servicios',
  templateUrl: './edit-servicios.component.html',
  styleUrls: ['./edit-servicios.component.css'],
})
export class EditServiciosComponent implements OnInit {
  servicios: Servicio = {
    nombre: '',
    precio: 0,
    descripcion: '',
  };

  constructor(
    private serviciosService: ServicioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.serviciosService.detail(id).subscribe(
      (data) => {
        this.servicios = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.serviciosService.update(id, this.servicios).subscribe(
      (data) => {
        this.toastr.success(data.message, 'OK', {
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
