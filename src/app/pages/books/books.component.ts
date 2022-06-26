import {Component, OnInit} from '@angular/core';
import {BookInterface} from '../../interfaces/book.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public booksArr: BookInterface[] = [];
  public bookForm!: FormGroup;

  private unsubscriber$ = new Subject<void>();

  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required]
    });
    this.getBooks();
  }


  public addBook(data: any): void {
    this.bookForm = data;
    this.bookService.addBook(this.bookForm.value)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: BookInterface) => {
      });
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: BookInterface[]) => {
        this.booksArr = res;
      });
  }
}
