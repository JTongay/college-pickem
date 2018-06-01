import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainComponent } from './main.component';
import {AuthService} from '../auth.service';
import {NavbarComponent} from '../navbar/navbar.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {FooterComponent} from '../footer/footer.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        NavbarComponent,
        WelcomeComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: '', component: WelcomeComponent}]
        )
      ],
      providers: [
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
