import {Injectable} from '@angular/core';
import {AuthorInterface} from '../interfaces/author.interface';
import {BookInterface} from '../interfaces/book.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {GenreInterface} from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public authorsArr: AuthorInterface[] = [];
  public genresArr: AuthorInterface[] = [];
  public booksArr: BookInterface[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  public addAuthor(data: any): void {
    console.log(data);
    this.authorsArr.push(data);
    console.log(this.authorsArr)
  }


  public addBook(data: any): void {
    console.log(data);
    this.booksArr.push(data);
  }
}
