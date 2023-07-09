import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from "src/environments/environment";
// import { AngularFireModule } from "@angular/fire";
import { FirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistIconComponent } from './components/wishlist-icon/wishlist-icon.component';
import { SellerLoginRegisterComponent } from './components/seller-login-register/seller-login-register.component';
import { BuyerLoginRegisterComponent } from './components/buyer-login-register/buyer-login-register.component';
import { CartComponent } from './components/cart/cart.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StepsSellerFormComponent } from './components/steps-seller-form/steps-seller-form.component';
import { ShopComponent } from './components/admin/shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NavComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WishlistIconComponent,
    SellerLoginRegisterComponent,
    BuyerLoginRegisterComponent,
    CartComponent,
    AdminDashboardComponent,
    StepsSellerFormComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule
  ],
  providers: [authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
