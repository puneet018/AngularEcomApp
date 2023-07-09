// import { AppPage } from './../../../../e2e/src/app.po';
import { AuthService } from './../../_services/auth.service';
// import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ParseSourceSpan } from '@angular/compiler';
// import { DepFlags } from '@angular/compiler/src/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ShareComponentsService } from 'src/app/services/share-components.service';
import { WindowService } from 'src/app/services/window.service';
//import {AngularFireAuth} from 'angularfire/auth'
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-seller-login-register',
  templateUrl: './seller-login-register.component.html',
  styleUrls: ['./seller-login-register.component.css']
})
export class SellerLoginRegisterComponent implements OnInit {

  winRef : any

  form : any = {
    phoneNumber :null,
    //shop_name: null
  };
  isSuccessful= false;
  isSignUpFailed = false;
  errorMessage = '';

  public sellerDashboardOpenStatus = false;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];



  constructor(private winService: WindowService, private router: Router,private authService: AuthService,private tokenStorageService: TokenStorageService,private shareComponentsService:ShareComponentsService) { }

  // sellerFlag = false;
  // username = '';
  // password = '';
   isActive = false;

  ngOnInit(): void {

    //this.winRef = this.winService.windowRef

 //  this.winRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    //this.winRef.recaptchaVerifier.render()

      if (this.tokenStorageService.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getUser().roles;
      }
  }

  getLoggedInStatus(): boolean{
    return this.isLoggedIn;
  }

  phoneNumberSignIn(): void {
    const { phoneNumber} = this.form;

     this.authService.signIn(phoneNumber).subscribe(
       data => {
        console.log(phoneNumber)

        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getUser().roles;
        this.showStepsPage();

        //this.shareComponentsService.sendSignInEvent();// HEADER HIDE CALL
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  showStepsPage():void{
    this.router.navigate(['app-steps-seller-form'])
      .then(() => {
      window.location.reload();
    });
  }

  showHomePage(): void {
    this.router.navigate(['dashboard'])
      .then(() => {
      window.location.reload();
    });
  }



}
