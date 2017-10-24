import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegePickComponent } from './college-pick.component';

describe('CollegePickComponent', () => {
  let component: CollegePickComponent;
  let fixture: ComponentFixture<CollegePickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegePickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
