import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ProductOrdering/Home/Home.component';
import { CustomerComponent } from './ProductOrdering/Customer/Customer.component';
import { ProductComponent } from './ProductOrdering/Product/Product.component';
import { CategoryComponent } from './ProductOrdering/Category/Category.component';
import { MenuComponent } from './ProductOrdering/Menu/Menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'products', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
