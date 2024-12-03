import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
@Component({
  selector: 'app-root',
  imports: [PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-pokedex';
}
