import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieTitlePipe } from './pipes/movieTitle.pipe';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './modal/notification/notification.component';


const appRoutes: Routes = [
  { path: '', component: MoviesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieItemComponent,
    TruncatePipe,
    MovieFormComponent,
    MovieTitlePipe,
    ModalComponent,
    NotificationComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
