import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements AfterContentInit {
  @ContentChild('showParagraph') paraRef?: ElementRef;

  ngAfterContentInit(): void {
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = 'italic';
  }
}
