import {AbstractControl} from '@angular/forms';

export class UrlValidator {
  static url(ac: AbstractControl) {
    console.debug('ac', ac);
    let result = null;

    if (ac) {
      if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(ac.value)) {
        result = {incorrectUrl: true};
      }
    }

    return result;
  }
}
