import { Component, OnInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart.model';
import { ProductModelServer } from 'src/app/models/product.model';
//import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData: CartModelServer | undefined;
  cartTotal: Number | undefined;
  subTotal: Number | undefined;

  constructor() {
  }

  ngOnInit() {
    //  this.cartService.cartDataObs$.subscribe((data: any) => this.cartData = data);
    //  this.cartService.cartTotal$.subscribe((total: Number | undefined) => this.cartTotal = total);
  }


  ChangeQuantity(id: Number, increaseQuantity: Boolean) {
    //this.cartService.UpdateCartData(id, increaseQuantity);
  }

}
