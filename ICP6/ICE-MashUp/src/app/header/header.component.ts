import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background:ghostwhite; }',
    'li a { color: black}',
    'ul.nav a:hover { color: black  }'
  ]
})
export class HeaderComponent {
  constructor() {}

  }
