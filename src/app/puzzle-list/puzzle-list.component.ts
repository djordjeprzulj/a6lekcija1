import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component';

@Component({
  selector: 'app-puzzle-list',
  templateUrl: './puzzle-list.component.html',
  styleUrls: ['./puzzle-list.component.css']
})
export class PuzzleListComponent implements OnInit {

  puzzles: PuzzleComponent[];

  constructor() {
    this.puzzles = [
      {question: 'Dva lokvanja oko panja.', solution: 'Glava i uši.'},
      {question: 'Bele koke ispod strehe vire.', solution: 'Zubi.'},
      {question: 'Vodu pije a živo nije.', solution: 'Sunđer.'}
    ];
  }

  ngOnInit() {
  }

}
