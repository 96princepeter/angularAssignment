import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( public userservice : UserserviceService,public router : Router,public http: HttpClient ) { }
  sinupform : FormGroup
    
  ngOnInit(): void {
    this.sinupform = new FormGroup({
      'fname' : new FormControl(null),
      'lname' : new FormControl(null),
      'email' : new FormControl(null),
      'password' : new FormControl(null)      
    })
  }
  sinup(){
    this.userservice.userdetails.push(this.sinupform.value)
    const user = this.sinupform.value;
    // this.http.post('https://foodiez-complete-db.firebaseio.com/user.json',user).subscribe(
    //   responseData =>{
    //     console.log(responseData)
    //   }
    // )
    this.router.navigateByUrl('/login')
  }

  
  

}
