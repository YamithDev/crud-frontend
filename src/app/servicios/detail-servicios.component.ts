import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Servicio } from '../models/servicio.dto';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-detail-servicios',
  templateUrl: './detail-servicios.component.html',
  styleUrls: ['./detail-servicios.component.css'],
})
export class DetailServiciosComponent implements OnInit {
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

  volver(): void {
    this.router.navigate(['/lista']);
  }
}
