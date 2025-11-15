import { Component } from '@angular/core';
import {GenerationsComponent} from "./composant/generations/generations.component";
import {PokemonsComponent} from "./composant/pokemons/pokemons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GenerationsComponent, PokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Génération de pokémon';
}
