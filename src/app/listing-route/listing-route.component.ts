import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Subject,
} from 'rxjs';
import { Pokemon } from '../pockemon-card/pockemon.model';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-listing-route',
  templateUrl: './listing-route.component.html',
  styleUrls: ['./listing-route.component.css'],
})
export class ListingRouteComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[] = [];
  isDeleteLoading: any[] = [];
  searchQuery = '';
  searchQuerySubject = new Subject<string>();

  constructor(private pokemonService: PokemonService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
      this.isDeleteLoading = pokemons.map((p) => ({
        id: p.id,
        isLoading: false,
      }));
    });
  }
  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  capture(pokemon: Pokemon) {
    this.pokemonService
      .editPokemon({ ...pokemon, captured: !pokemon.captured })
      .subscribe((updatedPokemon) => {
        this.pokemons = this.pokemons.map((pokemon) => {
          if (pokemon.id === updatedPokemon.id) {
            return updatedPokemon;
          }
          return pokemon;
        });
      });
  }

  changeValue(event: any) {
    const { value, key, pokemon } = event;
    this.pokemonService
      .editPokemon({ ...pokemon, [key]: value })
      .subscribe((updatedPokemon) => {
        this.pokemons = this.pokemons.map((pokemon) =>
          pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon
        );
      });
  }

  onDelete(pokemon: Pokemon) {
    this.setIsLoading(pokemon, true);
    this.pokemonService.deletePokemon(pokemon).subscribe(() => {
      this.pokemons = this.pokemons.filter((item) => item.id !== pokemon.id);
      this.setIsLoading(pokemon, false);
    });
  }

  getIsDeleteLoading(pokemon: Pokemon) {
    return this.isDeleteLoading.find((p) => p.id === pokemon.id)?.isLoading;
  }

  search(query: string) {
    this.pokemonService.search(query).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

  private setIsLoading(pokemon: Pokemon, isLoading: boolean) {
    this.isDeleteLoading = this.isDeleteLoading.map((p) => {
      if (p.id === pokemon.id) {
        return { ...p, isLoading };
      }
      return p;
    });
  }
}
