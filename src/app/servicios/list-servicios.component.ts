import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Servicio } from '../models/servicio.dto';
import { TokenService } from '../services/token.service';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.css'],
})
export class ListServiciosComponent implements OnInit {
  servicio: Servicio[] = [];

  listEmpty = undefined;

  isAdmin: boolean = false;

  constructor(
    private serviciosService: ServicioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
    this.showServicioss();
  }

  showServicioss(): void {
    this.serviciosService.list().subscribe(
      (data) => {
        this.servicio = data;
        this.listEmpty = undefined;
      },
      (err) => {
        this.listEmpty = err.error.message;
      }
    );
  }

  deleteServicios(id: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.serviciosService
          .delete(id)
          .subscribe((res) => this.showServicioss());
        Swal.fire('OK', 'Servicio eliminado con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Servicio a salvo', 'error');
      }
    });
  }
}
