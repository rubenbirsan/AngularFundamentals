import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1>
        {{ title + '!' }}
      </h1>
      <h1 [innerHtml]="title"></h1>
      <img [src]="logo" >
      <input type="text" [value]="name">
      <div>{{name}}</div>
    </div>
  `,
})
export class AppComponent {
  title: string;

  number1: number = 1;
  number2: number = 2;

  logo: string = 'assets/img/angular.svg'
  isHappy: boolean = false;
  name: string = 'Todd';
  constructor() {
    this.title = 'Angular Ultimate';
  }
}
