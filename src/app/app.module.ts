import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperheroDetailsComponent } from './superhero-details/superhero-details.component'
import { SuperheroService } from './superhero.service'

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperheroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
