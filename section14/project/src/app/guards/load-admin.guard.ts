import { CanMatchFn } from '@angular/router';

export const loadAdminGuard: CanMatchFn = (route, segments) => {
  let role = null;
  if (typeof window !== 'undefined' && window.localStorage) {
    // Access localStorage here
    role = localStorage.getItem('role');
  }
  console.log('Role: ', role);

  if (role == 'ADMIN') {
    return true;
  }
  return false;
};
