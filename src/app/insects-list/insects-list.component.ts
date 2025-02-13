import { Component } from '@angular/core';
import { InsectsService } from '../services/insects/insects.service';
import { NgIf,NgFor } from '@angular/common';

interface Insect {
  number: string;
  genus: string;
  species: string;
  family: string;
  bugGuideId: string;
  url: string,
  commonName: string
}

@Component({
  selector: 'app-insects-list',
  imports: [NgIf,NgFor],
  templateUrl: './insects-list.component.html',
  styleUrl: './insects-list.component.css',
  providers: [InsectsService] // injection de service dans le composant
})
export class InsectsListComponent {
      insects: Insect[] = [];
      isLoading: boolean = true;
      errorMessage: string = '';
    
      constructor(private insectsService: InsectsService) {}
    
      //On execute dans ngOnit du composant pour charger la liste des pokemons dès le départ (lifeCycle hook)
      ngOnInit(): void {
        this.loadInsects();
      }
    
      // Méthode pour charger la liste des pokemons (dans le composant)
      // Cela utilise fetchPokemonList du service PokemonService
      loadInsects(): void {
        this.insectsService
          .fetchInsectsList()
          .then((data) => {
            // console.log(data);
            this.insects = data.map((insect: any) => (
              // console.log(pokemon.name.fr),
              {
              number: insect.number,
              genus: insect.genus,
              species: insect.species,
              family: insect.family,
              bugGuideId: insect.bugGuideId,
              url: insect.url,
              commonName: insect.commonName
            }));
            console.log(this.insects);
    
            this.isLoading = false;
          })
          .catch((error) => {
            this.errorMessage = error.message;
            this.isLoading = false;
          });
      }
}
