import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService, parcelInterface } from '../adminservices/admin.service';

@Component({
  selector: 'app-addparcels',
  templateUrl: './addparcels.component.html',
  styleUrls: ['./addparcels.component.css'],
})
export class AddparcelsComponent implements OnInit {
  formValue!: FormGroup;
  allparcels: parcelInterface[] = [];

  constructor(private formbuider: FormBuilder, private parcel: AdminService , private router :Router) {}
  ngOnInit(): void {
    this.formValue = this.formbuider.group({
      // username: this.formbuider.control('', Validators.required),
      ParcelDescription: this.formbuider.control('', Validators.required),
      DispatchedFrom: this.formbuider.control('', Validators.required),
      Destination: this.formbuider.control('', Validators.required),
      p_weight: this.formbuider.control('', Validators.required),
      P_Status: this.formbuider.control('', Validators.required),
      P_TimeOut: this.formbuider.control('', Validators.required),
      P_ArrivalTime: this.formbuider.control('', Validators.required),
      Sender_Email: this.formbuider.control('', Validators.required),
      ReceiverName: this.formbuider.control('', Validators.required),
      ReceiversNumber: this.formbuider.control('', Validators.required),

    });
  }

  addParcel() {
    if (this.formValue.valid) {
      this.parcel.addParcel(this.formValue.value).subscribe((res) => {
        this.allparcels = res;
        // console.log(res);
        
        this.formValue.reset()
        this.router.navigate(['/admin'])

      });
    }
  }
}
