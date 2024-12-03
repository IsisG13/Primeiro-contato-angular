import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa o CommonModule para o *ngFor
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent], // Importa o componente que será usado
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  pokemons = [
    "Bulbasaur","Ivysaur"
  ];
}
