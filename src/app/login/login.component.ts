import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public  authService : AuthService,
    public userservice : UserserviceService,
    public router:Router,
    public http: HttpClient) { }
    
  loginform : FormGroup
  ngOnInit(): void {
    this.loginform = new FormGroup({
      'username' : new FormControl(null),
      'password' : new FormControl(null)      
    })
  }

  // login function check usernme and password 
  login(){
    let logUser =this.loginform.value
    // console.log(logUser,'form values')
    // console.log('userdetails',this.userservice.userdetails)
    // this.http.get('https://foodiez-complete-db.firebaseio.com/user.json').subscribe(
    //    responseData =>{
    //      console.log(responseData)
    //      }
    // )
    let authUser=this.userservice.userdetails.find(user=>{
      return user.email == logUser.username && user.password == logUser.password;
    });
    if(authUser){
      
      console.log('loging successfully ',authUser)
      this.authService.token=true;
      this.authService.isLoggedIn=true;
      this.router.navigateByUrl('/home')
    }
    else{
      console.log('false',authUser)
      console.log('user',logUser.username,logUser.password)
    }
  }      
}
