import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import {PagesModule} from '../../pages/pages.module';


@NgModule({
  declarations: [
    AuthorsComponent
  ],
    imports: [
        CommonModule,
        AuthorsRoutingModule,
        PagesModule
    ]
})
export class AuthorsModule { }
