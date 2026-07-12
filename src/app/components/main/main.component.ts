import { Component } from '@angular/core';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';

@Component({
  selector: 'app-main',
  imports: [SuperheroListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
