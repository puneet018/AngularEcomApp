import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductCategoryModelServer } from '../models/product-category.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ProductCategoryService {
  private SERVER_URL = environment.serverUrl;

  constructor(public httpClient:HttpClient) { }

  setProductCategory(prodCategory:string): Observable<ProductCategoryModelServer>{
    return this.httpClient.post<ProductCategoryModelServer>(this.SERVER_URL + '/prodcat/create/',{
       prodCategory},httpOptions);
  }

  getAllProductCategories(): Observable<any>{
    const temp = this.httpClient.get(this.SERVER_URL + '/prodcat/get');
    return temp;
  }
}
