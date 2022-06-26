import {Injectable} from '@angular/core';
import {GenreInterface} from '../interfaces/genre.interface';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(
    private http: HttpClient
  ) {
  }

  public addGenre(data: GenreInterface): Observable<GenreInterface> {
    return this.http.post<GenreInterface>(`${environment.endpoint}/genres`, data)
  }

  public getGenre(): Observable<GenreInterface[]> {
    return this.http.get<GenreInterface[]>(`${environment.endpoint}/genres`)
  }
}
