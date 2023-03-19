import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from './pockemon-card/pockemon.model';
import { PokemonFormData } from './models/pokemon-form-data.model';
const API_URL = 'http://localhost:3000/pokemons';
@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(API_URL);
  }
  getPokemonById(id: any): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${API_URL}/${id}`);
  }
  getPokemonByName(name: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${API_URL}?name=${name}`);
  }
  editPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${API_URL}/${pokemon.id}`, pokemon);
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`${API_URL}/${pokemon.id}`);
  }

  search(name: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${API_URL}?q=${name}`);
  }

  createPokemon(pokemon: PokemonFormData): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${API_URL}`, pokemon);
  }
}
('');
