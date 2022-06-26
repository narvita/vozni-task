import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { RouterModule } from '@angular/router';
import { BookModalComponent } from '../modals/book-modal/book-modal.component';
import { AuthorModalComponent } from '../modals/author-modal/author-modal.component';
import { GenreModalComponent } from '../modals/genre-modal/genre-modal.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    BooksComponent,
    BookModalComponent,
    AuthorModalComponent,
    GenreModalComponent,

  ],
  exports: [
    HeaderComponent,
    GenreModalComponent,
    AuthorModalComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }
