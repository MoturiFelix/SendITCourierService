import { AdminService, parcelInterface } from './../adminservices/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-onedelivery',
  templateUrl: './onedelivery.component.html',
  styleUrls: ['./onedelivery.component.css']
})
export class OnedeliveryComponent implements OnInit {

  ParcelID!:string
  allparcels: parcelInterface[] = [];


  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();


  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private AdminService:AdminService

  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((param)=>{
    this.ParcelID=param ['ParcelID']
    this.AdminService.getParcel(this.ParcelID).subscribe(res=>{
      this.allparcels=res
      console.log(res);
      
    })
    })

  }

}
