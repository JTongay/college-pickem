import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {AuthService} from './auth.service';
import {DebugElement, ElementRef} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        NavbarComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpModule
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render the footer component on load', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app: any = fixture.debugElement.nativeElement;
    expect(app.querySelector('app-footer')).toBeTruthy();
  }));
  it('should render the navbar component on load', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app: any = fixture.debugElement.nativeElement;
    expect(app.querySelector('app-navbar')).toBeTruthy();
  }));
  it('should render the main container component on load', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app: any = fixture.debugElement.nativeElement;
    expect(app.querySelector('app-main')).toBeTruthy();
  }));

});
