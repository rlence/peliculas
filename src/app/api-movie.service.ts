import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  urlBase = 'https://api.themoviedb.org/3/';
  key = '6897436b17c7d8da14b770636edc6d5d';

  genereteUrl = ( _type: string ) => this.urlBase + `movie/${_type}?api_key=`+this.key;

  //genereteSimilar = ( _type: string ) => this.urlBase + `movie/${_type}/similar?api_key=`+this.key;

  constructor(private http: HttpClient ){}

  getMovies( type: string ){

    return this.http.get(this.genereteUrl(type))
  }

  getMovie( id: string ){

    return this.http.get( this.genereteUrl(id) )
  } 

  getSimilarMovie(id: string){

    return this.http.get( this.genereteUrl( id + '/similar' ))
  }
  
}
