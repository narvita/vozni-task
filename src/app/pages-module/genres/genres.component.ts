import {Component, OnInit} from '@angular/core';
import {GenresConfig} from '../../constants/modal-configs.constants';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {GenreInterface} from '../../interfaces/genre.interface';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  public genresConfig = GenresConfig;
  public genresArr: GenreInterface[] = [];
  public isActiveModal!: boolean;
  public genreForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private data: DataService
  ) {
  }

  ngOnInit(): void {
    this.genreForm = this.fb.group({
      genre: ['', [Validators.required, this.genreValidator()] ]
    });
    this.genresArr = this.data.genresArr;
  }

  private genreValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if(!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      return !hasUpperCase ? { genreStrength: true}: null
    }
  }


  public addGenre(data: any): void {
    this.genreForm = data;
    this.data.addGenre(this.genreForm.value);
  }
}
