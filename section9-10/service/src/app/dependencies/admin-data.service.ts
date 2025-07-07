import { Injectable } from '@angular/core';
import { ADMIN_DATA } from '../ADMIN_DATA/admin-data';

@Injectable()
export class AdminDataService {
  getData: any;

  constructor() {
    this.getData = ADMIN_DATA;
  }
}
