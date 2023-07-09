import { ShopCategoryModelServer } from '../../../models/shop-category.model';
import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  errorMessage:any
  isCreationFailed:any
  isSuccessful:any

   // Variable to store shortLink from api response
   shortLink: string = "";
   loading: boolean = false; // Flag variable
   file:any // Variable to store file

  form : any ={
    shopCategory :null,
    shopCatId: null,
    shopCatImg: null
  }

  allShopCat: any

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getAllShopCategories().subscribe(
      data=>{
        this.allShopCat=data},
        error =>{
          console.log(error)
        });
  }

   // On file Select
   onChange(event:any) {
    this.file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.file);
    this.shopService.uploadImg(formData).subscribe(
      (res) => {this.form.shopCatImg = res.path},
      (err) => console.log(err)
    );
    //console.log(this.file)
  }

  onSubmitAddShopCategory(): void {
    const {shopCategory,shopCatImg} = this.form
    this.shopService.setShopCategory(shopCategory,shopCatImg).subscribe( data=>{
      this.isSuccessful = true;
      this.isCreationFailed = false;
      this.allShopCat.push(data)
      this.form.shopCategory = ''
    },
    err => {
      this.errorMessage = err.error.message;
      this.isCreationFailed = true;
  })
  }

}
