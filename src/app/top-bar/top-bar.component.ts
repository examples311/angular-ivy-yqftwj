import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  navs: string[] = ['Home', 'Invoice', 'About', 'Contact Us'];
  constructor() {}

  ngOnInit() {
    this.display();
  }

  display() {
    console.log(this.navs);
  }
}
