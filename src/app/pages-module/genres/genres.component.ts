import {Component, OnDestroy, OnInit} from '@angular/core';
import {GenresConfig} from '../../constants/modal-configs.constants';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {GenreInterface} from '../../interfaces/genre.interface';
import {Subject, takeUntil} from 'rxjs';
import {GenreService} from '../../services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit, OnDestroy {
  public genresArr!: GenreInterface[];
  public genreForm!: FormGroup;

  private unsubscriber$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private genreService: GenreService
  ) {
  }

  ngOnInit(): void {
    this.genreForm = this.fb.group({
      genre: ['', [Validators.required, this.genreValidator()]]
    });
    this.getGenre();
  }

  private genreValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      return !hasUpperCase ? {genreStrength: true} : null
    }
  }


  public addGenre(data: any): void {
    this.genreForm = data;
    this.genreService.addGenre(this.genreForm.value)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res) => {
      });
    this.getGenre();
  }

  public getGenre(): void {
    this.genreService.getGenre()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: GenreInterface[]) => {
        this.genresArr = res;
      });
  }


  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
