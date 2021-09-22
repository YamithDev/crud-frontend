import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ListProductComponent } from './product/list-product.component';
import { NewProductComponent } from './product/new-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { DetailProductComponent } from './product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    NewProductComponent,
    EditProductComponent,
    DetailProductComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
