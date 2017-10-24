import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflPickComponent } from './nfl-pick.component';

describe('NflPickComponent', () => {
  let component: NflPickComponent;
  let fixture: ComponentFixture<NflPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
