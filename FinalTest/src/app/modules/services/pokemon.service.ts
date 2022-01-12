import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IPokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getPokemon():Observable<IPokemon> {
  let id:number = Math.floor(Math.random() * 898 + 1);
  let apiPokemon: string = `https://pokeapi.co/api/v2/pokemon/${id}/`
     return this.http.get<IPokemon>(apiPokemon)
    .pipe(
      map(response => {
        let pokemon: IPokemon = {
          id:response.id,
          name:response.name,
          weight:response.weight,
          height:response.height
        }

        return pokemon
      })
    )
  }
}
