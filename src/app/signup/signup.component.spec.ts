import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdProgressSpinnerModule, MdFormFieldModule } from '@angular/material';

import { SignupComponent } from './signup.component';
import { FormComponent } from '../form/form.component';

fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent,
        FormComponent
      ],
      imports: [
        MdProgressSpinnerModule,
        MdFormFieldModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
