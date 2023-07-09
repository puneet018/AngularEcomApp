
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const AUTH_API = environment.serverUrl+"/auth";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  // login(username: string, password: string): Observable<any> {
  //   return this.httpClient.post(AUTH_API + '/signin', {
  //     username,
  //     password
  //   }, httpOptions);
  // }

  signIn(phoneNumber: string): Observable<any> {
    return this.httpClient.post(AUTH_API + '/signin', {
      phoneNumber
    }, httpOptions);
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.httpClient.post(AUTH_API + '/signup', {
  //     username,
  //     email,
  //     password
  //   }, httpOptions);
  // }

}
