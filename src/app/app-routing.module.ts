import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from './pages/books/books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'genres',
    pathMatch: 'full'
  },
  {path: 'books', component: BooksComponent},
  { path: 'genres', loadChildren: () => import('./pages-module/genres/genres.module').then(m => m.GenresModule) },
  { path: 'authors', loadChildren: () => import('./pages-module/authors/authors.module').then(m => m.AuthorsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
