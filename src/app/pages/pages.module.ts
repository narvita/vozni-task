import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { BookModalComponent } from './book-modal/book-modal.component';
import { AuthorModalComponent } from './author-modal/author-modal.component';
import { GenreModalComponent } from './genre-modal/genre-modal.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    BooksComponent,
    TableComponent,
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
