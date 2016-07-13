import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Another cool Angular 2 App in ES6 only</h1>'
})
export class AppComponent {
  constructor() {
    console.log('Initializing AppComponent')
  }
}