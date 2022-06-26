import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {GenreInterface} from '../../interfaces/genre.interface';
import {AuthorInterface} from '../../interfaces/author.interface';
import {Subject, takeUntil} from 'rxjs';
import {GenreService} from '../../services/genre.service';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss']
})
export class BookModalComponent implements OnInit {
  public isOpenModal!: boolean;
  public genres: GenreInterface[] = [];
  public authors: AuthorInterface[] = [];

  private unsubscriber$ = new Subject<void >();

  @Input() form!: FormGroup;
  @Output() emitBookForm = new EventEmitter();

  constructor(
    private genreService: GenreService,
    private authorService: AuthorService
    ) {
  }

  ngOnInit(): void {
    this.getGenres();
    this.getAuthors();
  }

  public toggleModal(): void {
    this.isOpenModal = !this.isOpenModal;
  }

  public addBook(): void {
    this.emitBookForm.emit(this.form);
    this.isOpenModal = false;
  }

  public getGenres(): void {
    this.genreService.getGenre()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: GenreInterface[]) => {
        this.genres = res;
      });
  }

  public getAuthors(): void {
    this.authorService.getAuthors()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: AuthorInterface[]) => {
        this.authors = res;
      });
  }
}
