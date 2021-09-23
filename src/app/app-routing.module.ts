import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginGuard } from './guards/login.guard';
import { ProductoGuard } from './guards/producto.guard';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './product/detail-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { ListProductComponent } from './product/list-product.component';
import { NewProductComponent } from './product/new-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'lista',
    component: ListProductComponent,
    canActivate: [ProductoGuard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'detail/:id',
    component: DetailProductComponent,
    canActivate: [ProductoGuard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'new',
    component: NewProductComponent,
    canActivate: [ProductoGuard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
    canActivate: [ProductoGuard],
    data: { expectedRol: ['admin'] },
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
