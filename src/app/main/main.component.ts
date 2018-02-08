import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean;
  private openIt: boolean = false;
  private loggedIn: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedIn = this.auth.isLoggedIn();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  openNav(open: boolean): void {
    this.openIt = open;
  }

  closeNav(open: boolean): void {
    this.openIt = !open;
  }

  logout(open: boolean): void {
    this.auth.logout();
    this.openIt = !open;
    this.router.navigate(['']);
  }

}
