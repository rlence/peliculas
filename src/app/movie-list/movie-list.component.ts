import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMovieService } from '../api-movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

type:string;
typeSubscription:any;
movies: Array<object> =[];
validTypes= ['top_rated', 'popular' , 'upcoming']

  constructor( private route: ActivatedRoute, private api:ApiMovieService, private router: Router) { }

  ngOnInit() {  
    this.typeSubscription = this.route.params.subscribe( params => {
      this.type = params.type.replace('_',' ');

      if(this.validTypes.includes(params.type)){
      
        this.api.getMovies(params.type).subscribe( (res: any) => {
          this.movies = res.results;
          console.log(res.results)
        });
      }else{
        this.router.navigate( ['/movies/popular'] )
      }
      
    })
  }

  ngOnDestroy(){
    this.typeSubscription.unsubscribe()
  }

}
