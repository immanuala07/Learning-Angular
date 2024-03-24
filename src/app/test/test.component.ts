import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>

  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>

  <h2 [style.color]="highlightColor">Style Binding 2</h2>

  <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: []
})
export class TestComponent {

  public name = "Immanual";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = 'orange';
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  greetUser(){
    return "Hello " + this.name;
  }
}
