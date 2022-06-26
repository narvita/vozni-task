import {Injectable} from '@angular/core';
import {AuthorInterface} from '../interfaces/author.interface';
import {BookInterface} from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public authorsArr: AuthorInterface[] = [];
  public genresArr: AuthorInterface[] = [];
  public booksArr: BookInterface[] = [];

  constructor() {
  }

  public addAuthor(data: any): void {
    console.log(data);
    this.authorsArr.push(data);
    console.log(this.authorsArr)
  }

  public addGenre(data: any): void {
    console.log(data);
    this.genresArr.push(data);
  }
  public addBook(data: any): void {
    console.log(data);
    this.booksArr.push(data);
  }
}
