import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperheroDetailsComponent } from './superhero-details/superhero-details.component'
import { SuperheroService } from './superhero.service';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { EditSuperheroComponent } from './edit-superhero/edit-superhero.component'
import { of } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperheroDetailsComponent,
    CreateSuperheroComponent,
    EditSuperheroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
