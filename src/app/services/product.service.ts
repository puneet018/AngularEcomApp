import { environment } from './../../environments/environment';
import { ProductModelServer } from './../models/product.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.serverUrl;

  constructor(public httpClient : HttpClient) { }

  getAllProducts(): Observable<any>{
    const temp = this.httpClient.get(this.SERVER_URL + '/products');
    console.log(temp)
    return temp;
  }

  getSingleProduct(id: Number): Observable<ProductModelServer>{
    return this.httpClient.get<ProductModelServer>(this.SERVER_URL + '/product/' + id);
  }

  getProductFromCategory(catName: string) : Observable<ProductModelServer[]> {
    return this.httpClient.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
  }

  addProduct(title:string,discription:string,prodImg:string,productCatId:number):Observable<ProductModelServer>{
    return this.httpClient.post<ProductModelServer>(this.SERVER_URL+'/product/createprod',
    {
      title,discription,prodImg,productCatId
    }, httpOptions)
  }

  uploadImg(event:any): Observable<any>{
    return this.httpClient.post<any>(this.SERVER_URL+'/product/file',event)
  }

  addSellerProduct(productId:number,qty:string,price:string,unitId:number,sellerId:number): Observable<any>{
    return this.httpClient.post<any>(this.SERVER_URL+'/sellerproduct/create',{
      productId,qty,price,unitId,sellerId
    },httpOptions)
  }

  getAllSellerProducts(): Observable<any>{
    const temp = this.httpClient.get(this.SERVER_URL + '/sellerproducts');
    return temp;
  }

  setProductUnit(unitName: string,unitCode: string): Observable<any>{
    return this.httpClient.post<any>(this.SERVER_URL+'/product/createunit',{
      unitName,
      unitCode
    },httpOptions)
  }

  getAllProductUnits(): Observable<any>{
    const temp = this.httpClient.get(this.SERVER_URL + '/product/productunits');
    return temp;
  }

}
