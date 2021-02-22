import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { StartComponent } from './products/start/start.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path : '', redirectTo:'/home',pathMatch:'full'},
  { path : 'login', component:LoginComponent},
  { path : 'registration', component:RegistrationComponent},
  { path : 'home', component:HomeComponent},
  { path : 'shopping', component:ShoppingComponent},
  { path : 'product', component:ProductsComponent,children:[
    { path : '',component:StartComponent},
    { path : 'newProduct', component:NewProductComponent},
    { path : ':id',component:ProductDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
