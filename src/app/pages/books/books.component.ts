import {Component, OnInit} from '@angular/core';
import {BooksConfig} from '../../constants/modal-configs.constants';
import {DataService} from '../../services/data.service';
import {BookInterface} from '../../interfaces/book.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: BookInterface[] = [];
  public form!: FormGroup;

  constructor(
    private data: DataService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required]
    })
    this.books = this.data.booksArr;
  }

  public addBook(data: any): void {
    this.form = data;
    this.data.addBook(this.form.value);
  }
}
