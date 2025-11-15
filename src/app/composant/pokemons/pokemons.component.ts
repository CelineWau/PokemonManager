import {Component, Inject} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";
import {HttpClientModule} from "@angular/common/http";
import {TitleCasePipe} from "@angular/common";


@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [HttpClientModule, TitleCasePipe,],
  providers: [PokemonService],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  public pokemons: Array<Pokemon>;
  public nbPokemon: number = 0;

  constructor(@Inject(PokemonService) private pokemonService: PokemonService) {
    this.pokemons = [];
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(resp => {
      this.pokemons = resp.results;
      this.nbPokemon = resp.count;
      this.getPokemonDetails();
    });
  }

  getPokemonDetails(): void {
    this.pokemons.forEach(pokemon => {
      this.pokemonService.getPokemonDetail(pokemon.url).subscribe(detail => {
        pokemon.height = detail.height;
        pokemon.weight = detail.weight;
        pokemon.sprites = detail.sprites;
      });
    })
  }
}
