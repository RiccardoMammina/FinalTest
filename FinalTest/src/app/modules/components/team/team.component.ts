import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() inputAdd!:IPokemon;
  pokemonList:IPokemon[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.inputAdd !== undefined) {
      this.pokemonList.push(this.inputAdd)
      localStorage.setItem('pokemon', JSON.stringify(this.pokemonList))
    }
  }
}
