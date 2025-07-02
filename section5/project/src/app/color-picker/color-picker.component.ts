import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css',
})
export class ColorPickerComponent implements AfterViewInit {
  @ViewChild('colorInput') colorInput!: ElementRef;
  @HostBinding('style.backgroundColor') selectedColor!: string;
  @HostListener('input', ['$event.target.value']) onColorChange(color: string) {
    this.selectedColor = color;
  }

  ngAfterViewInit(): void {
    this.selectedColor = this.colorInput.nativeElement.value;
  }
}
