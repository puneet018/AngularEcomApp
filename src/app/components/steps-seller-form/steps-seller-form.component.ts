import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-steps-seller-form',
  templateUrl: './steps-seller-form.component.html',
  styleUrls: ['./steps-seller-form.component.css']
})
export class StepsSellerFormComponent implements OnInit {

  constructor(private router:Router,private shopService:ShopService) { }

  form = {
    shopName : "Krishna Kirana Shop",
    shopCate : null,
    pinCode:null,
    //shopAddressLocation:null
    marketLocationName:null
  }

  allShopCategories : any

  ngOnInit(): void {
    this.shopService.getAllShopCategories().subscribe(
      data=>{
        this.allShopCategories=data},
        error =>{
          console.log(error)
        });
  }

  saveShopInfoAfterLogin(): void {
    
      //send data in database 
  }

}
