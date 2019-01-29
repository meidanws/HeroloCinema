import { Component, OnInit,Output,Input,EventEmitter,ViewChild } from '@angular/core';
import { Movies } from '../services/cinema.service';
import { Movie } from '../models/Movie.modal';
import { NgStyle } from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [ Movies ]
})
export class MoviesComponent implements OnInit {

  moviesList: Array<Movie>;
  movie: Movie;
  str : "upcoming";
  showMovieForm: boolean;
  showPopUp: boolean;
  movieID : number;
  emptyMovie: Movie ={
    vote_count: 0,
    id: 0,
    video: false,
    title: "Empty name",
    poster_path: "https://museoitaloamericano.org/wp-content/uploads/Cinema-cover.jpg",
    original_language: "en",
    original_title: "empty name",
    genre_ids: [1,2],
    backdrop_path: "",
    adult: false,
    overview: "",
    release_date: ""
  };
  searchValue="";
  showError: boolean;
    

  constructor(private cinemaService : Movies ) { }


  ngOnInit() {   
    this.getMovies("upcoming");
  
  }

  onEditMovie(movieId : number): void{
      
     this.movie = {...this.moviesList.find(movie => movie.id == movieId)};
     this.showMovieForm = true;
  }

  onRemoveMovie(movieId : number): void{ 
    this.movieID = movieId;
    this.showPopUp = true ; 
  }

  editMovie(m : Movie){ 

    let movieTitle = this.moviesList.find(movie => movie.title == m.title);
    if(movieTitle != undefined){
      this.showError = true;
      this.showMovieForm = false;
      return;
    }

    this.showMovieForm = false;
    let editedMovie = this.moviesList.find(movie => movie.id == m.id);
    if(editedMovie != undefined){
    Object.keys(editedMovie).forEach((key) => {
      editedMovie[key] = m[key];
  });
}
else{
  this.moviesList.push(m);
   
}
  }

  close(){
    this.showMovieForm = false;
  }

  closePopUp(){
    this.showPopUp = false;
  }

  deleteMovie(){
    let index = this.moviesList.findIndex(movie => movie.id == this.movieID);
    this.moviesList.splice(index, 1);
    this.showPopUp = false;
  }

  createNewMovie(){
    this.movie = this.emptyMovie;
    this.showMovieForm = true;
  }

  getMovies(str){
    this.cinemaService.getMovies(str).subscribe((response: any) =>{
      this.moviesList = response; 
    })
  }

  getPopularNow(){
    this.cinemaService.getMovies("popular").subscribe((response: any) =>{
      this.moviesList = response;
       
    })
  }

  searchMovie(){
    this.cinemaService.getMoviesBySearch(this.searchValue).subscribe((response: any) =>{
      this.moviesList = response;
  })}

  closeNotification(){
    this.showError = false;
  }
}
