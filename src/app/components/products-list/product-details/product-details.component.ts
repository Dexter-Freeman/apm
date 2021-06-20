import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product details';
  
  constructor() { }

  ngOnInit(): void {
  }

}
