import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>

  <h2>Immanual</h2>

  <h2 [class]="successClass">Immanual</h2>

  <h2 class="text-special" [class]="successClass">Immanual</h2>

  <h2 [class.text-danger]="hasError">Immanual</h2>

  <h2 [ngClass]="messageClasses">Immanual</h2>
  `,
  styles: [`
    .text-success {
      color:green;
    }
    .text-danger {
      color:red;
    }
    .text-special {
      font-style:italic;
    }
  `]
})
export class TestComponent {

  public name = "Immanual";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  greetUser(){
    return "Hello " + this.name;
  }
}
