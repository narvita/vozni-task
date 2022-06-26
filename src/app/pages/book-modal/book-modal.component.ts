import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {GenreInterface} from '../../interfaces/genre.interface';
import {AuthorInterface} from '../../interfaces/author.interface';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss']
})
export class BookModalComponent implements OnInit {
  public isOpenModal!: boolean;
  public genres: GenreInterface[] = [];
  public authors: AuthorInterface[] = [];

  @Input() form!: FormGroup;
  @Output() emitBookForm = new EventEmitter();

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getGenres();
    this.getAuthors();
  }

  public toggleModal(): void {
    this.isOpenModal = !this.isOpenModal;
    console.log('clicked')
  }

  public addBook(): void {
    this.emitBookForm.emit(this.form);
    this.isOpenModal = false;
  }

  private getGenres(): void {
    this.genres = this.dataService.genresArr;
  }

  private getAuthors(): void {
    this.authors = this.dataService.authorsArr;
  }
}
