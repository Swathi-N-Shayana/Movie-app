import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../component/movie/movie';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = 'apikey=1328ee0';
  baseUrl = 'http://www.omdbapi.com/';

  constructor(private httpClient: HttpClient) { }

  getMovies(page): Observable<any> {
    const url = `${this.baseUrl}?s=john&page=${page}&${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getMovie(id): Observable<any> {
    const url = `${this.baseUrl}?i=${id}&${this.apiKey}`;
    return this.httpClient.get(url);
  }
  saveMovie(movie: Movie): void {
    let existingList = [];
    existingList = JSON.parse(localStorage.getItem('movielist')) || [];
    existingList.push(movie);
    localStorage.setItem('movielist', JSON.stringify(existingList));
  }
  getSavedMovie(): Movie[] {
    let existingList: Movie[];
    existingList = JSON.parse(localStorage.getItem('movielist'));
    return existingList;
  }
}
