import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public BASE_URL = "https://pokeapi.co/api/v2/";

  constructor(
    @Inject(HttpClient) private http: HttpClient,
  ) {
  }

  // getAllGenerations() {
  //   return this.http.get<{ results: Array<Generation> }>(this.BASE_URL + 'generation')
  //     .pipe(
  //       map(res => res.results)
  //     );
  // }

  getAllGeneration(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/generation`);
  }

   getAllPokemons(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/pokemon`);
  }


  getPokemonDetail(url: string) {
    return this.http.get<Pokemon>(url)
  }
}
