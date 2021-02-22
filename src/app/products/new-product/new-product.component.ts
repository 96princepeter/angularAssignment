import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(public productservice: ProductserviceService) { }
  @ViewChild('newProductForm') productForm: NgForm;
  product = {
    name : '',
    cost : ''
  };

  ngOnInit(): void {
  }
  onSubmit(){
    this.product.name = this.productForm.value.productData.productname;
    this.product.cost = this.productForm.value.productData.productcost;
    this.productservice.products.push(this.product);
    console.log('output',this.productservice.products);

  }

} 

