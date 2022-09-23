import { User } from './../../../../../../BACKEND/src/Interfaces/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { customerInterface, CustomerService } from '../authservice/customer.service';


export interface loginInterface{
  email: string
  password:string

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // customerArray: customerInterface [] = [];


  @ViewChild('form') form!:NgForm


  constructor(private customer:CustomerService , private router:Router) { }

  ngOnInit(): void {
      
  }

  onSubmit(loginData:loginInterface){
    if(this.form.valid)
    {
      this.customer.logCustomer(this.form.value).subscribe(value=>{
        console.log(value.user[0].Role);
        localStorage.setItem('token',value.token)
        if ( value.user[0].Role  === "user"){
            this.router.navigate(['/user'])

        }else{

          this.router.navigate(['/admin'])
        }
        
      })
      this.router.navigate(['/user'])

    }
    
  }

}
