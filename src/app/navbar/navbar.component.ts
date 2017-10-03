import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isOpen;
  }

  openNav() {
    this.isOpen = !(this.isOpen);
    console.log(this.isOpen);
  }

}
