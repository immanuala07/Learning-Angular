import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="Vishwas">
  <input id="{{myId}}" bind-disabled="isDisabled" type="text" value="Vishwas">
  `,
  styles: []
})
export class TestComponent {
  public name = "Immanual";
  public myId = "testId";
  public isDisabled = false;

  greetUser(){
    return "Hello " + this.name;
  }
}
