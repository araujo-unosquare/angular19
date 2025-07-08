import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonClickService {
  private clicked: boolean = false;

  setButtonClicked(): void {
    this.clicked = true;
  }

  isButtonClicked(): boolean {
    return this.clicked;
  }
}
