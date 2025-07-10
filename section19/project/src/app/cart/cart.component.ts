import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  newItemName: string = '';
  newItemPrice: number | null = null;

  items = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 12 },
  ];

  itemList = signal(this.items);

  addItem() {
    if (this.newItemName && this.newItemPrice !== null) {
      const newItem = { name: this.newItemName, price: this.newItemPrice };
      this.itemList.set([...this.itemList(), newItem]);

      this.newItemName = '';
      this.newItemPrice = null; //Reset fields
    }
  }

  removeItem(item: { name: string; price: number }) {
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }

  totalPrice = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });
}
