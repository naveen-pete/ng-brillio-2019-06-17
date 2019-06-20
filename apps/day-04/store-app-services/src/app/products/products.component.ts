import { Component } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [LoggerService]
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Samsung Galaxy S10',
      description: 'Description about Galaxy S10',
      price: 60000,
      isAvailable: true
    },
    {
      name: 'iPhone X',
      description: 'Description about iPhone X',
      price: 80000,
      isAvailable: true
    },
    {
      name: 'Asus Zenfone 6',
      description: 'Description about Zenfone',
      price: 35000,
      isAvailable: false
    }
  ];

  constructor(private loggerService: LoggerService) { }

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);

    this.loggerService.log('New product added to the array.');
  }
}
