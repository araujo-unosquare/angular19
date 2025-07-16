import { Component, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../services/category/category.storeItem';
import { SearchKeyword } from '../types/searchKeyword.type';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  readonly searchClicked = output<SearchKeyword>();

  constructor(public categoryStore: CategoriesStoreItem) {}

  onClickSearch(keyword: string, categoryId: string) {
    this.searchClicked.emit({ categoryId: parseInt(categoryId), keyword });
  }
}
