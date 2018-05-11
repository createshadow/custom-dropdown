import {Component, OnInit} from '@angular/core';
import {MovieService} from './movieService/movie.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [MovieService]
})
export class DropdownComponent implements OnInit{
  constructor(private _movieService: MovieService) { }
  public movies: any;
  public selectedValue: string;
  public moviePicked = false;
  public isShown = false;
  public ngOnInit() {
    this._movieService.getMovies().then(response => this.movies = response.results);
    this.selectedValue = 'Pick movie';
  }
  public toggleDropdown(): void {
    this.isShown = !this.isShown;
  }
  public pickMovie(index): string {
    this.toggleDropdown();
    this.moviePicked = true;
    return this.selectedValue = this.movies[index].title;
  }
  public setDefautlValue(): void {
    this.selectedValue = 'Pick movie';
    this.moviePicked = false;
  }
}
