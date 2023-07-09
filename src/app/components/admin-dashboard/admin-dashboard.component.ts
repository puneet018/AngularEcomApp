import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  errorMessage:any
  isCreationFailed:any
  isSuccessful:any
   // Variable to store shortLink from api response
   shortLink: string = "";
   loading: boolean = false; // Flag variable
   file:any // Variable to store file

  form : any ={
    prodCategory :null,

    productCatId: null,
    title: null,
    prodImg: null,
    discription: null,

    unitName: null,
    unitCode: null
  }

  allProdCat: any;
  allProducts: any;
  allProductUnits : any;

  constructor(
    private productCategoryService: ProductCategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.productCategoryService.getAllProductCategories().subscribe(
      data=>{
        this.allProdCat=data},
        error =>{
          console.log(error)
        });
    this.productService.getAllProducts().subscribe(
      data=>{
        this.allProducts=data},
        error =>{
          console.log(error)
        });
    this.productService.getAllProductUnits().subscribe(
      data=>{
        this.allProductUnits=data},
        error =>{
          console.log(error)
        });

   }

  onSubmitAddProductCategory(): void {
    this.productCategoryService.setProductCategory(this.form.prodCategory).subscribe( data=>{
      this.isSuccessful = true;
      this.isCreationFailed = false;
      this.allProdCat.push(data)
      this.form.prodCategory = ''
    },
    err => {
      this.errorMessage = err.error.message;
      this.isCreationFailed = true;
  })
  }

  onSubmitAddProductUnit(): void {
    this.productService.setProductUnit(this.form.unitName,this.form.unitCode).subscribe( data=>{
      this.isSuccessful = true;
      this.isCreationFailed = false;
      this.allProductUnits.push(data)
      this.form.unitName = ''
      this.form.unitCode = ''
    },
    err => {
      this.errorMessage = err.error.message;
      this.isCreationFailed = true;
  })
  }

   // On file Select
  onChange(event:any) {
    this.file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.file);
    this.productService.uploadImg(formData).subscribe(

      (res) => {this.form.prodImg = res.path},
      (err) => console.log(err)
    );
    //console.log(this.file)
  }

  onSubmitAddProduct(): void {
    const {title,discription,prodImg,productCatId} = this.form
    this.productService.addProduct(title,discription,prodImg,productCatId).subscribe(
      (data) => {
        this.loading = false; // Flag variable
        this.isSuccessful = true;
        this.isCreationFailed = false;
        this.allProducts.push(data);
        //console.log(data)
        //console.log('------------------------'+this.allProducts.length)
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isCreationFailed = true;
      }
    );

  }

}
