import { Injectable } from '@angular/core';
import {AuthorInterface} from '../interfaces/author.interface';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {BookInterface} from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  public addBook(data: BookInterface): Observable<BookInterface> {
    return this.http.post<BookInterface>(`${environment.endpoint}/books`, data)
  }

  public getBooks(): Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>(`${environment.endpoint}/books`)
  }
}
