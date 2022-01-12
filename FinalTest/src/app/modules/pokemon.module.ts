import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MainComponent } from './components/main/main.component';
import { TeamComponent } from './components/team/team.component';
import { PCComponent } from './components/pc/pc.component';


@NgModule({
  declarations: [
    MainComponent,
    TeamComponent,
    PCComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
