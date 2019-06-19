import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productName = 'Samsung Galaxy S10';
  productDescription = 'Description about Galaxy S10';
  productPrice = 60000;
  productIsAvailable = false;

  onSave() {
    console.log('Product saved...');
  }

  onSearch(e) {
    // console.log(e.srcElement.value);
    console.log(e.target.value);
    // document.getElementById('name').value;
  }
}
