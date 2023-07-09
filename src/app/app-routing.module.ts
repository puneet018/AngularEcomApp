import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SellerLoginRegisterComponent } from './components/seller-login-register/seller-login-register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StepsSellerFormComponent } from './components/steps-seller-form/steps-seller-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sellerLoginReg', component: SellerLoginRegisterComponent},
//  { path: 'login', component: LoginComponent },
  { path: 'register', component: SellerLoginRegisterComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admindashboard', component: AdminDashboardComponent},
  {path: 'pro-list', component: ProductsListComponent},
  {path: 'app-steps-seller-form', component: StepsSellerFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }


