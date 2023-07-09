import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShopCategoryModelServer } from '../models/shop-category.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private SERVER_URL = environment.serverUrl;

  constructor(public httpClient:HttpClient) { }

  uploadImg(event:any): Observable<any>{
    return this.httpClient.post<any>(this.SERVER_URL+'/shopcat/file',event)
  }

  setShopCategory(shopCategory:string,shopCatImg:string): Observable<ShopCategoryModelServer>{
    return this.httpClient.post<ShopCategoryModelServer>(this.SERVER_URL + '/shopcat/create/',{
       shopCategory,shopCatImg},httpOptions);
  }

  getAllShopCategories(): Observable<any>{
    const temp = this.httpClient.get(this.SERVER_URL + '/shopcat/get');
    return temp;
  }
}
