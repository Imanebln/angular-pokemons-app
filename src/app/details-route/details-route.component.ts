import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pockemon-card/pockemon.model';
import { PokemonService } from '../pokemon.service';
import { switchMap, toArray } from 'rxjs/operators';
@Component({
  selector: 'app-details-route',
  templateUrl: './details-route.component.html',
  styleUrls: ['./details-route.component.css'],
})
export class DetailsRouteComponent implements OnInit {
  id: any;
  pokemon?: Pokemon;
  hasError = false;
  errorMessage = '';
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => this.pokemonService.getPokemonById(params['id']))
      )
      .subscribe({
        next: (pokemon) => {
          this.pokemon = pokemon;
        },
        error: () => {
          this.router.navigate(['/not-found']);
        },
      });

    // this.id = this.route.snapshot.paramMap.get('id');
    // this.pokemonService.getPokemonById(this.id).subscribe((pokemon) => {
    //   this.pokemon = pokemon;
    // });
  }
}
