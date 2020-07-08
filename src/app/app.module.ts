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
import { MainComponent } from './components/main/main.component';
import { SuperheroDetailsComponent } from './components/main/superhero-details/superhero-details.component';
import { CreateSuperheroComponent } from './components/main/create-superhero/create-superhero.component';
import { EditSuperheroComponent } from './components/main/edit-superhero/edit-superhero.component';
import { SuperheroService } from './services/superhero.service';
import { SuperheroListComponent } from './components/main/superhero-list/superhero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SuperheroDetailsComponent,
    CreateSuperheroComponent,
    EditSuperheroComponent,
    SuperheroListComponent
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
