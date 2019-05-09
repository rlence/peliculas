import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMovieService } from '../api-movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
type:string;
typeSubscription:any;
movies: object[];

  constructor( private route: ActivatedRoute, private api:ApiMovieService) { }

  ngOnInit() {  
    this.typeSubscription = this.route.params.subscribe( params => {
      this.type = params.type
      this.api.getMovies(this.type).subscribe(movies => {
        console.log(movies)
      })
    })
  }

  ngOnDestroy(){
    this.typeSubscription.unsubscribe()
  }

}
