import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
})
export class HighlightElementDirective {
  @HostBinding('style.backgroundColor') bgColor = 'pink';

  @HostListener('click') onToggle() {
    if (this.bgColor === 'pink') {
      this.bgColor = 'blue';
    } else {
      this.bgColor = 'pink';
    }
  }
  constructor() {}
}
