import { AbstractControl, ValidationErrors } from '@angular/forms';

export function urlValidator(
  control: AbstractControl
): ValidationErrors | null {
  const domainExt = ['.com', '.in', '.me', '.org'];
  if (!control.value.startsWith('https://')) {
    return { urlValid: true };
  }
  const checkExtension = domainExt.some((extension) =>
    control.value.includes(extension)
  );
  if (!checkExtension) {
    return { urlValid: true };
  }

  return null;
}
