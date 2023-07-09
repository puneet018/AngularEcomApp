import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareComponentsService {

  constructor() { }

  private subject = new Subject<any>();

  sendSignInEvent(){
    // this.subject.next();
  }

  getSignInEvent():Observable<any>{
     return this.subject.asObservable();
  }

  sendSignOutEvent(){
    // this.subject.next();
  }

  getSignOutEvent():Observable<any>{
     return this.subject.asObservable();
  }
}
