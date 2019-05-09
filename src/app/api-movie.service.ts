import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  urlBase = 'https://api.themoviedb.org/3/';
  key = '6897436b17c7d8da14b770636edc6d5d';

  genereteUrl = ( _type ) => this.urlBase + `movie/${_type}?api_key=`+this.key;

  constructor(private http: HttpClient ){}

  getMovies( type ){

    return this.http.get(this.genereteUrl(type))
  }
}
