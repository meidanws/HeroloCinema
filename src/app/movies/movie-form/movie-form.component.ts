import { Component, OnInit, Input, ViewChild, Output,EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/Movie.modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @ViewChild('f') movieForm : NgForm;
  @Input() movie: Movie;
  editTitle : boolean;
  checked : boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.movie);
    if (this.movie.adult){
      this.checked = true;
    }
    
  }

  onEditTitle(){
    this.editTitle= !this.editTitle;
  }

  

}
