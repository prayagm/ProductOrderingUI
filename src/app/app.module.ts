import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProgressSpinnerModule } from "primeng/progressspinner";
// import { TableModule } from "primeng/table";

import { HomeComponent } from './ProductOrdering/Home/Home.component';
import { CustomerComponent } from './ProductOrdering/Customer/Customer.component';

import { ProductComponent } from './ProductOrdering/Product/Product.component';
import { CategoryComponent } from './ProductOrdering/Category/Category.component';

import { MenuComponent } from './ProductOrdering/Menu/Menu.component';

import { TableModule } from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ProductComponent,
    CategoryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
    // ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
