import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() isOpen: boolean;
  openIt: boolean = false;
  loggedIn: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.auth.isLoggedIn();
  }

  openNav(open: boolean) {
    this.openIt = open;
  }

  closeNav(open: boolean) {
    this.openIt = !open;
  }

}
