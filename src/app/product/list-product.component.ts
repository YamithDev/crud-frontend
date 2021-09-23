import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import Swal from 'sweetalert2';
import { Product } from '../models/product';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];

  listEmpty = undefined;

  isAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
    this.showProducts();
  }

  showProducts(): void {
    this.productService.list().subscribe(
      (data) => {
        this.products = data;
        this.listEmpty = undefined;
      },
      (err) => {
        this.listEmpty = err.error.message;
      }
    );
  }

  deleteProduct(id: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.productService.delete(id).subscribe((res) => this.showProducts());
        Swal.fire('OK', 'Servicio eliminado con éxito', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Servicio a salvo', 'error');
      }
    });
  }
}
