import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private _http : Http) {}
  
  searchCustomer( cus_id : number) : Observable<Customer> {
    return this._http.get("http://localhost:8080/CustomerService/webapi/customer/"+cus_id).
    map((res:Response)=>res.json())
  }

  showCustomer() : Observable<Customer[]> {
   return this._http.get("http://localhost:8080/CustomerService/webapi/customer").
   map((res:Response)=>res.json())
 }
}
