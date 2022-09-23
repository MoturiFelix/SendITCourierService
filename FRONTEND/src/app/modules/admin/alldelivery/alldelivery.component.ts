import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService, parcelInterface } from '../adminservices/admin.service';

@Component({
  selector: 'app-alldelivery',
  templateUrl: './alldelivery.component.html',
  styleUrls: ['./alldelivery.component.css']
})
export class AlldeliveryComponent implements OnInit {

  p: number = 1;

  allparcels: parcelInterface[] = [];

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();


  constructor( 
    private parcel: AdminService,
    private router:Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {

    this.parcel.getAllParcels().subscribe(res=>{
      this.allparcels=res
      // console.log(this.allparcels);
      
    })
  }


  parceldetail(ParcelID:string){
    // console.log(ParcelID);
    this.router.navigate([`/admin/delivery/${ParcelID}`], {
      relativeTo:this.route,
    })


    
  }

}
