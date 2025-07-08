import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { ButtonClickService } from '../services/button-click.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const btnService = inject(ButtonClickService);

  const btnClick: boolean = btnService.isButtonClicked();

  if (btnClick) {
    return true;
  } else {
    router.navigate(['/parent']);
    return false;
  }
};
