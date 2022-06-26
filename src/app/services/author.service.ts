import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenreInterface} from '../interfaces/genre.interface';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {AuthorInterface} from '../interfaces/author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient) {
  }


  public addAuthor(data: AuthorInterface): Observable<AuthorInterface> {
    return this.http.post<AuthorInterface>(`${environment.endpoint}/authors`, data)
  }

  public getAuthors(): Observable<AuthorInterface[]> {
    return this.http.get<AuthorInterface[]>(`${environment.endpoint}/authors`)
  }

}
