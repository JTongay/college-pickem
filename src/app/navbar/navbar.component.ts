import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() openSideNav = new EventEmitter<boolean>();
  @Input() isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {  }

  openNav(): void {
    this.isOpen = !(this.isOpen);
    this.openSideNav.emit(this.isOpen);
  }

}
