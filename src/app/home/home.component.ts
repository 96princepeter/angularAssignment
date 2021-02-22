import { Component, Input, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details : any
  constructor( public userservice : UserserviceService ) { }
  
  ngOnInit(): void {
    this.details = this.userservice.userdetails
  }

}
