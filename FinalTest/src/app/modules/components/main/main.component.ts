import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pokemonObj!:IPokemon;
  addToTeam!:IPokemon;
  addToPc!:IPokemon;

  constructor(private service: PokemonService) {
    this.getData()
  }

  ngOnInit(): void {
  }

  getData(): void {
    this.service.getPokemon().subscribe(data => this.pokemonObj = data)
 }

  addTeam(): void {
    this.addToTeam = this.pokemonObj;
    this.getData()
  }

  addPc():void {
    this.addToPc = this.pokemonObj;
    this.getData()
    console.log(this.pokemonObj);

  }

}
