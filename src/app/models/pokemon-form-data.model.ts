import { Pokemon } from '../pockemon-card/pockemon.model';

export type PokemonFormData = Omit<
  Pokemon,
  'id' | 'image' | 'types' | 'captured'
>;
