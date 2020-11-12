import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './component/characters/characters.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { MovieComponent } from './component/movie/movie.component';
import { MoviedetailsComponent } from './component/moviedetails/moviedetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie', pathMatch: 'full' },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/:id', component: MoviedetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'characters', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
