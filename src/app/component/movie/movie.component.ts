import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {

  pageNo = 1;
  movies: Movie[];
  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.loadmovie()
  }

  loadmovie(): void {
    this.movieservice.getMovies(this.pageNo).subscribe(response => {
      this.movies = response.Search;
    })
  }
  paginate(direction): void {
    this.pageNo += direction;
    this.loadmovie();
  }
  addtoWishList(event: MouseEvent, movie: Movie): void {
    this.movieservice.saveMovie(movie);
    event.stopPropagation();
  }
}