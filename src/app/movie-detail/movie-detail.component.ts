import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMovieService } from '../api-movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id:string;
  typeSubscription:any;
  viewMovie: object = {};
  similarMovie: object[] = [];
  
  
  constructor(  private route: ActivatedRoute, private api:ApiMovieService, private router: Router  ) { }

  ngOnInit() {

      this.typeSubscription = this.route.params.subscribe( params => {
      this.id = params.id;
      window.scrollTo({ top:0, left: 0, behavior: 'smooth'});
      
        this.api.getMovie(this.id).subscribe( (res: any) => {
        this.viewMovie = res
        console.log(res)
        })

        this.api.getSimilarMovie(this.id).subscribe( (res:any) =>{
          this.similarMovie = res.results
          console.log(res)
        });
    })

  }

}
