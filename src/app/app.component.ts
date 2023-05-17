import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'any value';

  movie = {
    title: 'Spider-man',
    releaseDate: new Date(),
    price: 1400.99
  }

  handleClick() {
    console.log('Hello world');
  }

  duplicateNumber(n: number){
    return n*2;
  }

  getDebugger() {
    // Normal comment
    // TODO: I will fix this later

    let a = 'wow debugger';
    console.log('hello world: ' + a);
  }

}
