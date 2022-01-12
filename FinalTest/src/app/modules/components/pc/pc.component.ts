import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss']
})
export class PCComponent implements OnInit {
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
