import { Injectable } from '@angular/core';

@Injectable()
export class AlertMessage1Service {
  showAlert() {
    alert('First Alert');
  }
}
