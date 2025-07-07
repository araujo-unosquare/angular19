import { Injectable } from '@angular/core';

@Injectable()
export class LogMessage2Service {
  log(): void {
    console.log('This is serivce 2');
  }
}
