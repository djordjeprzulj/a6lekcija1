import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  template: `
            <h1>{{ question }}</h1>
            <p>{{ solution }}</p>`
})
export class PuzzleComponent {
  question: string;
  solution: string;

  constructor() {
    this.question = 'Dva lokvanja oko panja.';
    this.solution = 'Glava i uši.';
  }
}
