import { Component, OnInit } from '@angular/core';
declare function require(path: string);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc = require('../images/HeroloCinema_logo.png');
  
  constructor() { }

  ngOnInit() {
  }

}
