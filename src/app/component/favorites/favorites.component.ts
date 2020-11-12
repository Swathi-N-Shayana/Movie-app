import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

wishList: Movie[];
  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.wishList = this.movieservice.getSavedMovie();
    console.log('this', this.wishList)
  }

}
