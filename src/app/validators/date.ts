import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class dateValidator {

  constructor() {}

  date(input: FormControl) {
    const dateRegEx = new RegExp(/^\d{1,2}\.\d{1,2}\.\d{4}$/);
    return dateRegEx.test(input.value) ? null : {date: true};
  }

}
