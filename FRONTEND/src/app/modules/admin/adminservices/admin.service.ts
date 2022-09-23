import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



export interface customerInterface{
  FullNames:string
  EmailAddress: string
  PhoneNumber: string
  Password:string

}
export interface parcelInterface{
  ParcelID:string
  ParcelDescription:string
  DispatchedFrom:string
  Destination:string
  p_weight:string
  P_Status:string
  P_TimeOut:string
  P_ArrivalTime:string
  Sender_Email:string
  ReceiverName:string
  ReceiversNumber:string


}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<customerInterface[]>{
    return this.http.get<customerInterface[]>('http://localhost:5000/user/allusers')
  }

  addParcel(parcelData:parcelInterface):Observable<parcelInterface[]>{
    return this.http.post<parcelInterface[]>('http://localhost:5000/parcels',parcelData)
  }

  getAllParcels():Observable<parcelInterface[]>{
    return this.http.get<parcelInterface[]>('http://localhost:5000/parcels')
    
  }

  getParcel(ParcelID:string){
    return this.http.get<parcelInterface[]>(`http://localhost:5000/parcels/${ParcelID}`)
  }

}
