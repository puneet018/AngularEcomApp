import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router,private productService: ProductService,private breakpointObserver: BreakpointObserver,private tokenStorageService: TokenStorageService) {}

  sellerDetails : any;

  adminProductsList : any
  errorMessage:any
  isCreationFailed:any
  isSuccessful:any
  addedSellerProducts: any
  allProductUnits: any

  imgPath : any;
  tempTitle :any
  classExpression:any

  form : any ={
    productId : null,
    title : null,
    proImg : null,
    product_qty : null,
    productUnintId: null,
    product_price : null
  }

  ngOnInit(): void {
    this.sellerDetails = false; //false meaning is details completed

    this.productService.getAllProducts().subscribe(
      data=>{
       this.adminProductsList=data},
       error =>{
         console.log(error)
       });
    this.productService.getAllSellerProducts().subscribe(
      data=>{
        this.addedSellerProducts=data},
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

  // addedSellerProducts: any = [
  //   {product_id:1,title:'Tomato',image:'../assets/imgs/vegs/tomato.jpg',qty:12,price:12},
  //   {product_id:2,title:'Potato',image:'../assets/imgs/vegs/potato.jpg',qty:10,price:14}
  // ];

  onSubmitAddProduct(): void {
    const {productId,product_qty,product_price,unitId,sellerId} = this.form;
    // this.productService.addSellerProduct(productId,product_qty,product_price,unitId,sellerId).subscribe(
    //   (data)=>{
    //     console.log(data)
    //     this.isSuccessful = true;
    //     this.isCreationFailed = false;
    //     this.addedSellerProducts.push(data);
    //     this.form.product_qty = '';
    //     this.form.product_price = '';
    //     this.imgPath = '';

    //     //console.log('------------------------'+this.allProducts.length)
    //   },
    //   (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isCreationFailed = true;
    //   }
    // );
     //console.log(this.form)
    // //this.added_products.push(this.form)
    // console.log(this.added_products)
    //localStorage.setItem('added_products',this.added_products)
  }


  setImg(proId:any): void {
    this.imgPath = this.adminProductsList[proId-1].image;
    this.tempTitle = this.adminProductsList[proId-1].title;
    this.classExpression = 'showImg'
  }

  getOrderDetials(): void{
    alert("getOrderDetials")
  }

  acceptedStatus():void{
    alert("acceptedStatus()")
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['home'])
      .then(() => {
      window.location.reload();
    });
  }

}
