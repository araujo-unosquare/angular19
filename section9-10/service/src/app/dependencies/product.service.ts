import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getNames(): string[] {
    return ['Angular', 'MongoDB', 'NestJS', 'Next.js', 'React'];
  }
}
