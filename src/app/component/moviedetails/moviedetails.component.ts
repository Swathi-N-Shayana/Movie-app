import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movie: Movie;
  constructor(private movieservice: MovieService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovie()
  }

  loadMovie() : void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieservice.getMovie(id).subscribe(response => {
     this.movie = response;
    });
  }
}
