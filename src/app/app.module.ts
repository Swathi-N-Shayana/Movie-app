import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './component/movie/movie.component';
import { HeaderComponent } from './component/header/header.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { MoviedetailsComponent } from './component/moviedetails/moviedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    FavoritesComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
