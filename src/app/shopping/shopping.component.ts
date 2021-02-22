import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  searchKey = "";
  product : any;
  constructor(public productservice: ProductserviceService) { }

  ngOnInit(): void {
  }
  onSearch(){
    // this.product = this.productservice.products[name]==this.searchKey
  }
  onSearchProduct(event:any){
    // this.searchKey=(<HTMLInputElement>event.target).value;
  }

}
