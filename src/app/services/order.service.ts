import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private SERVER_URL = environment.serverUrl;
  private products : ProductResponseModel[] = [];

  constructor(private httpClient : HttpClient) { }

  getSingalOrder(orderId:number){
    return this.httpClient.get<ProductResponseModel[]>(this.SERVER_URL + '/order' + orderId).toPromise();
  }


}

export class ProductResponseModel{
  id: number | undefined;
  name: string | undefined;
  discription: string | undefined;
  price: number | undefined;
  quantityOrdered: number | undefined;
  image: string | undefined;
}
