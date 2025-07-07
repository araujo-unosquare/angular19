import { Injectable } from '@angular/core';

@Injectable()
export class LogMessage1Service {
  log(): void {
    console.log('This is serivce 1');
  }
}
