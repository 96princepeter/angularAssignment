import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : any;
  items = [{name:'Chicken',cost:230},
          {name:'Beef',cost:300},
          {name:'Fish(ayala)',cost:210}]
  constructor(public productservice: ProductserviceService,public router:Router) { }
  

  ngOnInit(): void {
    if (this.productservice.products.length == 0)
    {
      for (let index = 0; index < this.items.length; index++) 
      {
        const element = this.items[index];
        this.productservice.products.push(element);
      }
    }  
    this.products = this.productservice.products;
    console.log('Service Products',this.products)
  }
  
  newProduct(){
    this.router.navigateByUrl('/product/newProduct');

  }
 

}
