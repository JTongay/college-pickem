import {FormControl} from '@angular/forms';
import {async} from '@angular/core/testing';
import { DateValidator } from './date';

describe('DateValidator', () => {
  it('should pass validation', async(() => {
    const validator: DateValidator = new DateValidator();
    const testValue = validator.date(new FormControl('11221989'));
    expect(testValue).toEqual({date: true});
  }));
  xit('should fail validation with any letters', async(() => {
    const validator: DateValidator = new DateValidator();
    const testValue = validator.date(new FormControl('11221b'));
    expect(testValue).toBeNull();
  }));
});
