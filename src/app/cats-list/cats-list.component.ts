import { Component } from '@angular/core';
import { CatsService } from '../services/cats/cats.service';
import { NgIf,NgFor } from '@angular/common';

interface Cat {
  id: number;
  image: string;
  width: any;
  height: any;
  breeds: [];
  favourites: {}
}

@Component({
  selector: 'app-cats-list',
  imports: [NgIf,NgFor],
  templateUrl: './cats-list.component.html',
  styleUrl: './cats-list.component.css',
  providers: [CatsService] // injection de service dans le composant
})
export class CatsListComponent {
    cats: Cat[] = [];
    isLoading: boolean = true;
    errorMessage: string = '';
  
    constructor(private catsService: CatsService) {}
  
    //On execute dans ngOnit du composant pour charger la liste des pokemons dès le départ (lifeCycle hook)
    ngOnInit(): void {
      this.loadCats();
    }
  
    // Méthode pour charger la liste des pokemons (dans le composant)
    // Cela utilise fetchPokemonList du service PokemonService
    loadCats(): void {
      this.catsService
        .fetchCatsList()
        .then((data) => {
          // console.log(data);
          this.cats = data.map((cat: any) => (
            // console.log(pokemon.name.fr),
            {
            id: cat.id,
            name: cat.name,
            image: cat.url,
          }));
          console.log(this.cats);
  
          this.isLoading = false;
        })
        .catch((error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        });
    }
}
