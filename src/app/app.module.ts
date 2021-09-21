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

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    NewProductComponent,
    EditProductComponent,
    DetailProductComponent
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
