import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [LoggerService]
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();

  product: Product = new Product();
  showMessage: boolean = false;

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loggerService.log('Form submitted.');

    this.productCreated.emit(this.product);
    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 4000);
  }
}

// built-in (html)
// <input type="text" (input)="onSearch($event)" >
// <button (click)="onSave()">Save</button>

// custom (angular)
// <app-product-form (productCreated)="onProductCreated($event)"></app-product-form>