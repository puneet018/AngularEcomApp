import { ShareComponentsService } from './../../services/share-components.service';

import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { SellerLoginRegisterComponent } from '../seller-login-register/seller-login-register.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerHide = true;
  //eventSubscription:Subscription;

  constructor(private userService: UserService,private tokenStorageService: TokenStorageService,private shareComponentsService: ShareComponentsService) {

    // this.eventSubscription = this.shareComponentsService.getSignInEvent().subscribe(()=>{
    //   this.headerHide = false;
    // })
    // this.eventSubscription = this.shareComponentsService.getSignOutEvent().subscribe(()=>{
    //   this.headerHide = true;
    // })
   }

  isLoggedIn = false;
  isLoggedInCust = false;
  isLoggedInSeller = false;
  isLoggedInAdmin = false;
  pincode: number | undefined;
  content?: string;
  username?: string;
  private roles?: string;

  ngOnInit(): void {
    //alert(this.sellerComp.getLoggedInStatus())
    this.userService.getPublicContent().subscribe( data =>{
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).massage;
    })

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.tokenStorageService.getToken()+'app.compo -this.tokenStorageService.getToken()')
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles[0];
      //alert(this.roles=="ROLE SHOP KEEPER")
      if(this.roles=='ROLE SHOP KEEPER'){
        this.isLoggedInSeller = true;
        this.headerHide = false;
      }
      if(this.roles=='ROLE ADMIN'){
        this.isLoggedInAdmin = true;
        this.headerHide = false;
      }
      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showShopKeeperBoard = this.roles.includes('ROLE_SHOPKEEPER');

      this.username = user.username;
    }
  }

  findStoreByPincode(): void{
    this.pincode
  }



}
