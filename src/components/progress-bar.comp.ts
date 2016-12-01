import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `<div>My Goals Component {{goals}}</div>`
})
export class ProgressBarComponent {
  
  public goals: string = 'Hello World';

  constructor() {

  }
}
