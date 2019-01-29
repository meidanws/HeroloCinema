import { Component, OnInit, Input , Output,EventEmitter,Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../models/Movie.modal'

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() moviesList: Array<Movie>;
  @Input() movie: Movie;
  
  @Output() removeMovie: EventEmitter<any> = new EventEmitter();
  @Output() editMovie: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
