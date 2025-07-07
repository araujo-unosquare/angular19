import { Component } from '@angular/core';
import { ProductService } from '../dependencies/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  names: string[];

  constructor(private productService: ProductService) {
    this.names = this.productService.getNames();
  }
}
