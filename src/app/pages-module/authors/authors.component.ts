import {Component, OnInit} from '@angular/core';
import {AuthorsConfig, GenresConfig} from '../../constants/modal-configs.constants';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {AuthorInterface} from '../../interfaces/author.interface';
import {AuthorService} from '../../services/author.service';
import {Subject, takeUntil} from 'rxjs';
import {GenreInterface} from '../../interfaces/genre.interface';
import {GenreService} from '../../services/genre.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  public authorsArr!: AuthorInterface[];
  public authorForm!: FormGroup;

  private unsubscriber$ = new Subject<void>();


  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
  ) {
  }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      authorName: ['', [Validators.required, this.nameValidator()]],
      genre: ['', Validators.required]
    });
    this.getAuthors();
  }

  private nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;

      if (!name) {
        return null
      }
      const hasUpperCase = /[A-Z]+/.test(name);
      return !hasUpperCase ? {genreStrength: true} : null

    }
  }


  public addAuthor(data: any): void {
    this.authorForm = data;
    this.authorService.addAuthor(this.authorForm.value)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: AuthorInterface) => {
      });
    this.getAuthors()
  }

  public getAuthors(): void {
    this.authorService.getAuthors()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: AuthorInterface[]) => {
        this.authorsArr = res;
      });
  }


}
