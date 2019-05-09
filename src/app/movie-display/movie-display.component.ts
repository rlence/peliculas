import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit {
@Input() films:object[];


  constructor() { }

  ngOnInit() {
  }

}
