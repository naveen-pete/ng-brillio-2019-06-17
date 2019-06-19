import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  showMessage: boolean = false;
  product: Product = new Product();

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

  onSubmit() {
    this.products.unshift(this.product);
    this.product = new Product();
    this.showMessage = true;

    // Callback is an arrow function here (ES6)
    setTimeout(() => {
      this.showMessage = false;
      console.log('setTimeout() callback invoked.');
    }, 4000);

    // Normal ES5 function syntax
    // setTimeout(function () {
    //   this.showMessage = false;
    //   console.log('setTimeout() callback invoked.');
    // }, 4000);

  }
}
