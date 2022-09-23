import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface customerInterface{
  FullNames :string
  email: string
  PhoneNumber: string
  password:string

}

export interface LogCustomer{

  email: string
  password:string

}

export interface registerSuccessMessage{
  message:string
}

@Injectable({

  providedIn: 'root'

})

export class CustomerService {

  constructor(private http:HttpClient) {}

addCustomer(customerData:customerInterface):Observable<registerSuccessMessage>{
  
  return this.http.post<registerSuccessMessage>('http://localhost:5000/user/signup',customerData)
}

logCustomer(customerData:LogCustomer):Observable<any>{
  console.log(customerData);
   
  return this.http.post<any>('http://localhost:5000/user/login',customerData)
}


getAllCustomers():Observable<customerInterface>{
  return this.http.get<customerInterface>('http://localhost:5000/user/allusers')
}

}
