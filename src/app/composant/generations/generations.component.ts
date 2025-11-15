import {Component, Inject} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Generation} from "../../models/generation";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [HttpClientModule],
  providers: [PokemonService],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {

  public generations: Array<Generation>;

  constructor(
    @Inject(PokemonService) private pokemonService: PokemonService,
  ) {
    this.generations = [];
    this.getGenerations();
  }

  getGenerations(){
    this.pokemonService.getAllGeneration().subscribe(data => this.generations = data.results);

  }

}
