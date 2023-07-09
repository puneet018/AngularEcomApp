import { Router } from '@angular/router';
import { CartModelPublic, CartModelServer } from './../models/cart.model';
import { environment } from './../../environments/environment';
import { OrderService } from './order.service';
import { ProductService } from './../../../../../Angular-EcomApp-FE/ecom-app-fe/src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { ProductModelServer } from '../models/product.model';
//import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private SERVER_URL = environment.serverUrl;

  //Date variable to store the cart information on the client's loacl storage
  private cartDataClient: CartModelPublic = {
      total: 0,
      prodData:[{
        id: 0,
        incart: 0
      }]
  };

  private cartDataServer: CartModelServer = {
    total: 0,
    data: [{
      numInCart: 0,product:undefined
    }]
  };

  cartTotal$ = new BehaviorSubject<Number>(0);
  cartDataObs$ = new BehaviorSubject<CartModelServer>(this.cartDataServer);

  constructor(private httpClient: HttpClient,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    ) {

      this.cartTotal$.next(this.cartDataServer.total);
      this.cartDataObs$.next(this.cartDataServer);

      let info: CartModelPublic = JSON.parse(localStorage.getItem('cart')|| '{}');

      if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
        // assign the value to our data variable which corresponds to the LocalStorage data format
      this.cartDataClient = info;
        // Loop through each entry and put it in the cartDataServer object
      this.cartDataClient.prodData.forEach(p => {
        this.productService.getSingleProduct(p.id).subscribe((actualProdInfo: ProductModelServer) => {
          if(this.cartDataServer.data[0].numInCart===0){
            this.cartDataServer.data[0].numInCart = p.incart;
            this.cartDataServer.data[0].product = actualProdInfo;
            //this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          }else {
            this.cartDataServer.data.push({
              numInCart: p.incart,
              product: actualProdInfo
            });
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          }

        })

      });
      }
     }

     CalculateSubTotal(index:any): Number {
      let subTotal = 0;

      let p = this.cartDataServer.data[index];
      // @ts-ignore
      subTotal = p.product.price * p.numInCart;

      return subTotal;
    }

    AddProductToCart(id: number, quantity?: number) {

      this.productService.getSingleProduct(id).subscribe(prod => {
        // If the cart is empty
        if (this.cartDataServer.data[0].product === undefined) {
          this.cartDataServer.data[0].product = prod;
          this.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;
          this.CalculateTotal();
          this.cartDataClient.prodData[0].incart = this.cartDataServer.data[0].numInCart;
          this.cartDataClient.prodData[0].id = prod.id;
          this.cartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          this.cartDataObs$.next({...this.cartDataServer});
          console.log(`${prod.name} added to the cart.`, "Product Added", {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          })
        }  // END of IF
        // Cart is not empty
        else {

          let index = this.cartDataServer.data.findIndex(p =>
            p.product?.id === prod.id

            );

          // 1. If chosen product is already in cart array
          if (index !== -1) {

            if (quantity !== undefined && quantity <= prod.quantity) {
              // @ts-ignore
              this.cartDataServer.data[index].numInCart = this.cartDataServer.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
            } else {
              // @ts-ignore
              this.cartDataServer.data[index].numInCart < prod.quantity ? this.cartDataServer.data[index].numInCart++ : prod.quantity;
            }


            this.cartDataClient.prodData[index].incart = this.cartDataServer.data[index].numInCart;
            console.log(`${prod.name} quantity updated in the cart.`, "Product Updated", {
              timeOut: 1500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            })
          }
          // 2. If chosen product is not in cart array
          else {
            this.cartDataServer.data.push({
              product: prod,
              numInCart: 1
            });
            this.cartDataClient.prodData.push({
              incart: 1,
              id: prod.id
            });
            console.log(`${prod.name} added to the cart.`, "Product Added", {
              timeOut: 1500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            })
          }
          this.CalculateTotal();
          this.cartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          this.cartDataObs$.next({...this.cartDataServer});
        }  // END of ELSE


      });
    }

    private CalculateTotal() {
      let Total = 0;

      this.cartDataServer.data.forEach(p => {
        const {numInCart} = p;
        const price = p.product?.price;
        // @ts-ignore
        Total += numInCart * price;
      });
      this.cartDataServer.total = Total;
      this.cartTotal$.next(this.cartDataServer.total);
    }


}


