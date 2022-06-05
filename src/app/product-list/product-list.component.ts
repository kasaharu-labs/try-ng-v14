import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
