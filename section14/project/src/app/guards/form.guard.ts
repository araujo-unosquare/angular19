import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from '../login/login.component';

export const formGuard: CanDeactivateFn<LoginComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.email?.dirty && component.password?.dirty) {
    return confirm('Your changes are unsaved! Are you sure you want to leave?')
      ? true
      : false;
  }
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);

  return true;
};
