import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './product/detail-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { ListProductComponent } from './product/list-product.component';
import { NewProductComponent } from './product/new-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListProductComponent },
  { path: 'detail/:id', component: DetailProductComponent },
  { path: 'new', component: NewProductComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
