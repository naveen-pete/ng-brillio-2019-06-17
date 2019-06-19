import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    name: 'abc',
    description: 'def',
    price: 10,
    isAvailable: false
  };

  constructor() { }

  ngOnInit() {
  }

}
