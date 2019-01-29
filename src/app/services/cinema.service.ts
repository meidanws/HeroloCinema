import { Http, } from '@angular/http';
import { Injectable, }  from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';   
import { Movie } from '../models/Movie.modal';

const IMAGE_PREFIX: string = "https://image.tmdb.org/t/p/w500";


@Injectable()
export class Movies {
     
    
    constructor(private http: Http){}

    getMovies(str : string): Observable<Movie[] | Error> {
         
        return this.http.get("https://api.themoviedb.org/3/movie/"+str+"?api_key=161d130b6575207c8c50e85fd94ac56d&language=en-US&page=1" ).map((response) => {
            return this.normalizeData(response.json().results);
        }).catch(this.handleError);
    }

    handleError(error: any): Observable<Error> {               //On error, throw exception
        return Observable.throw(error);
    }

    normalizeData(data: Array<Movie>): Array<Movie> {     
        return data.map(item => {
            item.poster_path = IMAGE_PREFIX.concat(item.poster_path)
            return item;
        })
    }

    getMoviesBySearch(str){
        return this.http.get("http://api.themoviedb.org/3/search/movie?api_key=161d130b6575207c8c50e85fd94ac56d&language=en-US&page=1&include_adult=false&query="+str ).map((response) => {
            return this.normalizeData(response.json().results);
        }).catch(this.handleError);
    }

}