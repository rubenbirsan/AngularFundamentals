import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  
      
        <button  (click)="handleClick(username.value)">GetValue</button>
   
      <input
        type="text" #username
      />

      <div>{{ name }}</div>
   
  `,
})
export class AppComponent {
  title: string;
  number1: number = 1;
  number2: number = 2;
  logo: string = 'assets/img/angular.svg';
  isHappy: boolean = false;
  name: string = 'Todd';

  constructor() {
    this.title = 'Angular Ultimate';
  }

  handleClick(value: string) {
    console.log(value);
    // this.name = "Motto";
  }
}
