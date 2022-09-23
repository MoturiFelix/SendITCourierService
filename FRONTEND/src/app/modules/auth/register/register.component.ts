import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../authservice/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // registerFormData!:FormGroup
 constructor(private customer:CustomerService) { }

 form! : FormGroup
 ngOnInit(): void {

   this.form = new FormGroup({
    role: new FormControl("user"),
     FullNames: new FormControl(null, Validators.required),
     email: new FormControl('email@domain.com', [Validators.required, Validators.email]),
     PhoneNumber: new FormControl(null, Validators.required),
     Password: new FormControl(null, Validators.required),
   })
 }
 
 onSubmit(){
  console.log(this.form.value);
  
   if(this.form.valid){
 this.customer.addCustomer(this.form.value).subscribe(res=>{
  console.log(res);
  this.form.reset()

 })
   }
 }
}
