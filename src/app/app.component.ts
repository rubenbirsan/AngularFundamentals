import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <section>
      <div class="example-button-row">
        <button mat-raised-button color="primary" (click)="handleClick($event)">Change Name</button>
      </div>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      />
      <input
        type="text"
        [(ngModel)]="name"
      />
      <div>{{ name }}</div>
    </section>
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

  handleChange(value: string) {

    this.name = value;
  }
  handleClick(event: any) {
    console.log(event);
    this.name = "Motto";
  }
}
