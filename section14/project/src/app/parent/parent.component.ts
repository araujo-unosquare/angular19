import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonClickService } from '../services/button-click.service';

@Component({
  selector: 'app-parent',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  constructor(private btnService: ButtonClickService) {}

  enableRoutes() {
    this.btnService.setButtonClicked();
  }
}
