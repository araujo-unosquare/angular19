import { Injectable } from '@angular/core';

@Injectable()
export class AlertMessage2Service {
  showAlert() {
    alert('Second Alert');
  }
}
