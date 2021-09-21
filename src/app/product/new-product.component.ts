import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  nombre = '';
  precio: number = 0;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const producto = new Product(this.nombre, this.precio);
    this.productService.save(producto).subscribe(
      data => {
        this.toastr.success('Servicio creado con éxito', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
