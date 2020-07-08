import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { SuperheroDetailsComponent } from './components/superheroes/superhero-details/superhero-details.component';
import { CreateSuperheroComponent } from './components/superheroes/create-superhero/create-superhero.component';
import { EditSuperheroComponent } from './components/superheroes/edit-superhero/edit-superhero.component';
import { SuperheroService } from './services/superhero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SuperheroesComponent,
    SuperheroDetailsComponent,
    CreateSuperheroComponent,
    EditSuperheroComponent,

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
