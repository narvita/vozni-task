import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenresRoutingModule} from './genres-routing.module';
import {GenresComponent} from './genres.component';
import {PagesModule} from '../../pages/pages.module';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    PagesModule,
  ]
})
export class GenresModule {
}
