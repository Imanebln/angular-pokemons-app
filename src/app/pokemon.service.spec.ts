import { TestBed } from '@angular/core/testing';
import { PokemonFormData } from './models/pokemon-form-data.model';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    let pokemon: PokemonFormData;
    pokemon = {
      name: 'toto6',
      attack: 49,
      defense: 49,
      lastSeen: '',
      hasEvolution: true,
      description:
        'Bulbizarre peut être vu en train de faire la sieste sous le soleil. Il y a une graine sur son dos. En absorbant les rayons du soleil, la graine grandit progressivement.',
    };
    service.createPokemon(pokemon);
    expect(
      service.getPokemons().subscribe((pokemons) => pokemons.length)
    ).toBeGreaterThan(12);
    expect(service).toBeTruthy();
  });
});
